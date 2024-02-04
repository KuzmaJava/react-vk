let rerenderEntireTree = () => {
    console.log('State has been changed.')
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'I am going to the ocean', likesCount: 5},
            {id: 2, message: 'I\'ve bought the car', likesCount: 3},
            {id: 3, message: 'That\'s my first post', likesCount: 2},
        ],
        newPostText: 'base text'
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Jackson'},
            {id: 2, name: 'Maria'},
            {id: 3, name: 'Robert'}
        ],
        messages: [
            {id: 1, message: 'Hey brother'},
            {id: 2, message: 'How are you do in man'},
            {id: 3, message: 'See yo'},
        ],
    }
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 23,
        message: state.profilePage.newPostText,
        likesCount: 4
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;