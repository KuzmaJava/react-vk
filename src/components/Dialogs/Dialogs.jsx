import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators";
import {Textarea} from "../common/FormControl/FormControl";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);

    let messageElements = state.messages
        .map(message => <Message message={message.message} key={message.id}/>)

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Navigate to={"/login"} />;

    return (
        <div>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={styles.messages}>
                    {/* ctrl + alt + J in order to surround with tag from both sides */}
                    <div>{messageElements}</div>
                    {/* div*2 and click Tab in order to create 2 divs at the same time */}
                    <AddMessageReduxForm onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    )
}

const maxLength30 = maxLengthCreator(30);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newMessageBody"} placeholder={"Enter your message"}
                       validate={[required, maxLength30]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'addMessage'}) (AddMessageForm)

export default Dialogs;