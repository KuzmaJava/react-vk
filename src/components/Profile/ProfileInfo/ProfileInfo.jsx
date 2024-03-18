import React from 'react'
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        const profileImage = props.profile.photos.large;
        return (
            <div>
                <div>
                    <img
                        src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'/>
                    {/*style={{maxWidth: '100px', maxHeight: '100px'}}*/}

                </div>
                <div className={styles.descriptionBlock}>
                    {profileImage === null ? (
                        <img
                            /* default user photo */
                            src='https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?cs=srgb&dl=pexels-frank-cone-2235130.jpg&fm=jpg'
                            style={{ maxWidth: '100px', maxHeight: '100px' }} /> // Установка максимальной ширины и высоты/>
                    ) : (
                        <img src={profileImage}/>
                    )}
                    ava + description
                </div>
            </div>
        )
    }
}

export default ProfileInfo;