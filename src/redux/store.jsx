import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Jackson'},
                {id: 2, name: 'Maria'},
                {id: 3, name: 'Robert'},
                {id: 4, name: 'Zheka'}
            ],
            messages: [
                {id: 1, message: 'Hey brother'},
                {id: 2, message: 'How are you do in man'},
                {id: 3, message: 'See yo'},
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber () {
        console.log('State has been changed.')
    },

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;