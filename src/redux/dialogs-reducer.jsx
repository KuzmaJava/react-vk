const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body =  state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;