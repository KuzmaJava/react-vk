import styles from "./Users.module.css";
import defaultUser from "../../resources/images/default_user.png";
import React from "react";
import {NavLink} from "react-router-dom";

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
                                            props.unfollow(user)
                                        }}
                                >Unfollow</button>
                            ) : (
                                <button disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => {
                                            props.follow(user)
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
