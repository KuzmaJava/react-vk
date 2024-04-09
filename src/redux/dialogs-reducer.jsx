const SEND_MESSAGE = 'dialogs/SEND_MESSAGE';

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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type)  {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;