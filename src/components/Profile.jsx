import React from 'react'
import styles from './Profile.module.css';

const Profile = () => {
    return <div className={styles.content}>
        <div>
            <img
                src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'/>
        </div>
        <div>
            <img src='https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg'/>
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className='posts'>
                <div className={styles.item}>
                    post 1
                </div>
                <div className={styles.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>
}

export default Profile;