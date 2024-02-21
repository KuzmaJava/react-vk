import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {

    return (
        <div>
            {props.users.map(user => (
                <div key={user.id}>
                    <img src={user.photoUrl} className={styles.userPhoto} alt={user.fullName}/>
                    <div>
                        <div>{user.fullName}</div>
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
                        <div>{user.location.city}</div>
                        <div>{user.location.country}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Users;
