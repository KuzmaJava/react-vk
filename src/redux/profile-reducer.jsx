import {profileAPI} from "../api/API";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
    posts: [
        {id: 1, message: 'I am going to the ocean', likesCount: 5},
        {id: 2, message: 'I\'ve bought the car', likesCount: 3},
        {id: 3, message: 'That\'s my first post', likesCount: 2},
    ],
    newPostText: 'base text',
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 23, message: state.newPostText, likesCount: 9}]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) =>
    ({type: SET_USER_STATUS, status})


export const getUserProfile = (userId) => (dispatch) => {
    return profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
}

export const getUserStatus = (userId) => (dispatch) => {
    console.log('Status from get user Status:', userId);
    return profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data));
        })
}

export const updateUserStatus = (status) => (dispatch) => {
    console.log('Status from PROFILE-REDUCER:', status);
    return profileAPI.updateUserStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        })
}

export default profileReducer;