import React from 'react'
import styles from './Profile.module.css';
import MyPosts from "./MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'/>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;