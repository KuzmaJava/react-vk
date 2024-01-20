import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Jackson'},
        {id: 2, name: 'Maria'},
        {id: 3, name: 'Robert'}
    ]

    let messages = [
        {id: 1, message: 'Hey brother'},
        {id: 2, message: 'How are you do in man'},
        {id: 3, message: 'See yo'},
    ]

    let dialogsElements = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messageElements = messages
        .map(message => <Message message={message.message}/>)

    return (
        <div>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={styles.messages}>
                    {messageElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;