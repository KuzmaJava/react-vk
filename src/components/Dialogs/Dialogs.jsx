import React from 'react'
import styles from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    <div className={styles.dialog + ' ' + styles.active}>
                        Jackson
                    </div>
                    <div className={styles.dialog}>
                        Masha
                    </div>
                    <div className={styles.dialog}>
                        Robert
                    </div>
                </div>
                <div className={styles.messages}>
                    <div className={styles.message}>Hello bro</div>
                    <div className={styles.message}>How are you do in man</div>
                    <div className={styles.message}>See yo</div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;