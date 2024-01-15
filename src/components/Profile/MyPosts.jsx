import React from 'react'
import styles from './MyPosts.module.css';
import Post from "./MyPosts/Post/Post";

const MyPosts = () => {
    return <div>
        My posts
        <div>
            <textarea>Write</textarea>
            <button>Button</button>
            <button>Remove</button>
        </div>
        <div className={styles.posts}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    </div>
}

export default MyPosts;