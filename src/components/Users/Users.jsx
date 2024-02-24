import React from 'react'
import styles from './Users.module.css';
import axios from 'axios'
import defaultUser from '../../resources/images/default_user.png'

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <div>
            {this.props.users.map(user => (
                <div key={user.id}>
                    <span>
                    <img src={user.photos.small != null ? user.photos.small : defaultUser} className={styles.userPhoto}
                         alt={user.fullName}/>
                    <div>
                        <div>{user.name}</div>
                        {user.isFollowed ? (
                            <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                        ) : (
                            <button onClick={() => this.props.follow(user.id)}>Follow</button>
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
    }
}

export default Users;