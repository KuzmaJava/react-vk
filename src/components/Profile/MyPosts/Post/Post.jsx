import React from 'react'
import styles from './Post.module.css';

const Post = () => {
    return (
        <div className={styles.item}>
            <img src='https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg'/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;