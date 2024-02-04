let store = {
    // '_' - means private, no access from the outside
    _state: {
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber () {
        console.log('State has been changed.')
    },
    addPost () {
        let newPost = {
            id: 23,
            message: this._state.profilePage.newPostText,
            likesCount: 4
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }
}

export default store;
window.store = store;