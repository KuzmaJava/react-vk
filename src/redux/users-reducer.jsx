import {usersAPI} from "../api/API";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const followUnfollowUser = (state, action, followed) => {
    return {
        ...state,
        users: state.users.map(user => {
            if (user.id === action.userId) {
                return {...user, followed};
            }
            return user;
        })
    };
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return followUnfollowUser(state, action, true);
        case UNFOLLOW:
            return followUnfollowUser(state, action, false);
        case SET_USERS:
            return {
                ...state, users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const toggleFollowing = async (dispatch, user, action) => {
    dispatch(toggleFollowingProgress(true, user.id));
    let response = await action(user);
    if (response.data.resultCode === 0) {
        dispatch(action === usersAPI.followUser ? followSuccess(user.id) : unfollowSuccess(user.id));
    }
    dispatch(toggleFollowingProgress(false, user.id));
};

export const follow = (user) => {
    return async (dispatch) => {
        await toggleFollowing(dispatch, user, usersAPI.followUser);
    }
}

export const unfollow = (user) => {
    return async (dispatch) => {
        await toggleFollowing(dispatch, user, usersAPI.unfollowUser);
    }
}

export default usersReducer;