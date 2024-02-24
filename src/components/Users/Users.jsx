import React from 'react';
import styles from './Users.module.css';
import axios from 'axios'
import defaultUser from '../../resources/images/default_user.png'

let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items);
                });
        }
    }
    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.users.map(user => (
                <div key={user.id}>
                    <span>
                    <img src={user.photos.small != null ? user.photos.small : defaultUser} className={styles.userPhoto}
                         alt={user.fullName}/>
                    <div>
                        <div>{user.name}</div>
                        {user.isFollowed ? (
                            <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                        ) : (
                            <button onClick={() => props.follow(user.id)}>Follow</button>
                        )}
                    </div>
                    <div>
                        <div>{user.status}</div>
                    </div>
                    <div>
                        <div>{"user.location.city"}</div>
                        <div>{"user.location.country"}</div>
                    </div>
                        </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
