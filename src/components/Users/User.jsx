import styles from "./Users.module.css";
import defaultUser from "../../resources/images/default_user.png";
import React from "react";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, follow, unfollow}) => {
    return (
                <div>
                    <span>
                        <NavLink to={'/profile/' + user.id}>
                            <img
                                src={user.photos.small != null ? user.photos.small : defaultUser}
                                className={styles.userPhoto}
                                alt={user.fullName}
                            />
                        </NavLink>
                        <div>
                            <div>{user.name}</div>
                            {user.followed ? (
                                <button disabled={followingInProgress.some(id => id === user.id)}
                                        onClick={() => {
                                            unfollow(user)
                                        }}
                                >Unfollow</button>
                            ) : (
                                <button disabled={followingInProgress.some(id => id === user.id)}
                                        onClick={() => {
                                            follow(user)
                                        }}>Follow</button>
                            )}
                        </div>
                        <div>
                            <div>{user.status}</div>
                        </div>
                    </span>
        </div>
    );
};

export default User;
