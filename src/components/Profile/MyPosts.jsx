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
            <Post message="I am going to the sea"/>
            <Post message="I've bought the car"/>
            <Post message="That's my first post"/>
        </div>
    </div>
}

export default MyPosts;