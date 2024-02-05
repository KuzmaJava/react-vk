const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

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
        }
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 23,
                message: this._state.profilePage.newPostText,
                likesCount: 4
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body =  this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default store;
window.store = store;