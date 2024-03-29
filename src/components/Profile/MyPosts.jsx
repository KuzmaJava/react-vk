import React from 'react'
import styles from './MyPosts.module.css';
import Post from "./MyPosts/Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators";
import {Textarea} from "../common/FormControl/FormControl";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {

    let postsElements =
        props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return <div className={styles.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostReduxForm onSubmit={onAddPost}/>
        <div className={styles.posts}>
            {postsElements}
        </div>
    </div>
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostText"} placeholder={"Post a message"}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({form: 'addNewPost'}) (AddNewPostForm)

export default MyPosts;