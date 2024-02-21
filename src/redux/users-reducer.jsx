const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://cdn5.vedomosti.ru/image/2023/9f/ysgcr/original-1936.jpg',
            isFollowed: true,
            fullName: 'Yulia Snigir',
            status: 'Master and Margarita 2024',
            location: {
                city: 'Donskoy', country: 'Russia'
            },
        },
        {
            id: 2,
            photoUrl: 'https://www.mk.ru/upload/entities/2021/04/29/12/photoreportsImages/detailPicture/10/3d/a5/56/8765935_8099904.jpg',
            isFollowed: false,
            fullName: 'Ekaterina Klimova',
            status: 'At home',
            location: {
                city: 'Moscow', country: 'Russia'
            },
        },
        {
            id: 3,
            photoUrl: 'https://n1s1.hsmedia.ru/62/ea/bb/62eabbedb0f55b054a05ef05cc4d8423/728x542_1_925471840e84ba9b9cb966fa05af7eb3@1000x745_0xac120003_5043048631562644928.jpg',
            isFollowed: true,
            fullName: 'Angelina Jolie',
            status: 'Hollywood',
            location: {
                city: 'Los Angeles', country: 'USA'
            },
        }
    ]
}

const usersReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, isFollowed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, isFollowed: false}
                    }
                    return user;
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, action.users]
            };
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})


export default usersReducer;