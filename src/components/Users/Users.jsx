import styles from "./Users.module.css";
import defaultUser from "../../resources/images/default_user.png";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {toggleFollowingProgress} from "../../redux/users-reducer";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(page => (
                    <span
                        key={page}
                        className={props.currentPage === page && styles.selectedPage}
                        onClick={() => props.onPageChanged(page)}
                    >
                        {page}
                    </span>
                ))}
            </div>
            {props.users.map(user => (
                <div key={user.id}>
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
                                <button disabled={props.followingInProgress.some(id => id === user.id)}
                                    onClick={() => {
                                        props.toggleFollowingProgress(true, user.id);
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                            withCredentials: true,
                                            "API-KEY": "b5a9ad76-ac08-4adf-bdc7-a48fbd7f43e7"
                                        }).then(response => {
                                            debugger
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(user.id);
                                            }
                                            props.toggleFollowingProgress(false, user.id);
                                        })
                                    }
                                    }
                                >Unfollow</button>
                            ) : (
                                <button disabled={props.followingInProgress.some(id => id === user.id)}
                                    onClick={() => {
                                        props.toggleFollowingProgress(true, user.id);
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                            withCredentials: true,
                                            "API-KEY": "b5a9ad76-ac08-4adf-bdc7-a48fbd7f43e7"
                                        }).then(response => {
                                            debugger
                                            if (response.data.resultCode === 0) {
                                                props.follow(user.id);
                                            }
                                            props.toggleFollowingProgress(false, user.id);
                                        })
                                    }}>Follow</button>
                            )}

                        </div>
                        <div>
                            <div>{user.status}</div>
                        </div>
                        {/*<div>*/}
                        {/*    <div>{user.location.city}</div>*/}
                        {/*    <div>{user.location.country}</div>*/}
                        {/*</div>*/}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
