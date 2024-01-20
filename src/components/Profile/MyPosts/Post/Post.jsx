import React from 'react'
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img src='https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg'/>
            {props.message}
            <div>
                <span>likes {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;