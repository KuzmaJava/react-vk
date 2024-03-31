import React from 'react'
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import defaultUserImage from "../../../resources/images/defaultImage.jpg";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        const profileImage = props.profile.photos.large;
        return (
            <div>
                <div className={styles.descriptionBlock}>
                    {profileImage === null ? (
                        <img
                            /* default user photo */
                            src={defaultUserImage}
                            style={{ maxWidth: '100px', maxHeight: '100px' }} /> // Установка максимальной ширины и высоты/>
                    ) : (
                        <img src={profileImage}/>
                    )}
                    <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                    ava + description
                </div>
            </div>
        )
    }
}

export default ProfileInfo;