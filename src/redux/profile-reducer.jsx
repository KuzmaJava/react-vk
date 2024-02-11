const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'I am going to the ocean', likesCount: 5},
        {id: 2, message: 'I\'ve bought the car', likesCount: 3},
        {id: 3, message: 'That\'s my first post', likesCount: 2},
    ],
    newPostText: 'base text'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 23,
                message: state.newPostText,
                likesCount: 4
            }
            // make shallow copy of the 'state'
            let stateCopy = {...state};
            // copy object posts to 'stateCopy' ( probably deep copy of the 'posts' )
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            state.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            // shallow copy
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;