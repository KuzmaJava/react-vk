import React from 'react'
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={styles.dialog + ' ' + styles.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return  <div className={styles.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    <DialogItem name="Jackson" id="1"/>
                    <DialogItem name="Maria" id="2"/>
                    <DialogItem name="Robert" id="3"/>
                </div>
                <div className={styles.messages}>
                    <Message message="Hey brother"/>
                    <Message message="How are you do in man"/>
                    <Message message="See yo"/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;