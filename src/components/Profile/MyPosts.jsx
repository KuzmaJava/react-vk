import React from 'react'
import styles from './MyPosts.module.css';
import Post from "./MyPosts/Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'I am going to the sea', likesCount: "2"},
        {id: 2, message: 'I\'ve bought the car', likesCount: "5"},
        {id: 3, message: 'That\'s my first post', likesCount: "3"},
    ]

    return <div className={styles.postsBlock}>
        <h3>My posts</h3>
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button>Add post</button>
        </div>
        <div className={styles.posts}>
            <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
            <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            <Post message={postData[2].message} likesCount={postData[2].likesCount}/>
        </div>
    </div>
}

export default MyPosts;