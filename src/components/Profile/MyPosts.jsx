import React from 'react'
import styles from './MyPosts.module.css';
import Post from "./MyPosts/Post/Post";

const MyPosts = () => {
    return <div className={styles.postsBlock}>
        <h3>My posts</h3>
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button>Add post</button>
        </div>
        <div className={styles.posts}>
            <Post message="I am going to the sea"/>
            <Post message="I've bought the car"/>
            <Post message="That's my first post"/>
            <Post message="One more post" />
        </div>
    </div>
}

export default MyPosts;