import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'I am going to the ocean', likesCount: 5},
            {id: 2, message: 'I\'ve bought the car', likesCount: 3},
            {id: 3, message: 'That\'s my first post', likesCount: 2},
        ]
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

export let addPost = (postMessage) => {
    let newPost = {
        id: 23,
        message: postMessage,
        likesCount: 4
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;