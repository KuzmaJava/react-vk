import React from 'react'
import styles from './Users.module.css';
import axios from 'axios'
import defaultUser from '../../resources/images/default_user.png'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        // round up ( 4.0002 в 5 )
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(page => {
                    return <span className={this.props.currentPage === page && styles.selectedPage}
                                 onClick={(e) => {
                                     this.onPageChanged(page)
                                 }}>{page}</span>
                })}
            </div>
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