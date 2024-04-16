import React from 'react'
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import defaultUserImage from "../../../resources/images/defaultImage.jpg";
import ProfileStatusFuncComponent from "./ProfileStatusFuncComponent";

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    } else {
        const onMainPhotoSelected = (e) => {
            if (e.target.files.length) {
                savePhoto(e.target.files[0]);
            }
        }
        const profileImage = profile.photos.large;
        return (
            <div>
                <div className={styles.descriptionBlock}>
                    <img src={profileImage || defaultUserImage} style={{maxWidth: '100px', maxHeight: '100px'}}/>
                    { isOwner && <input type={"file"} onChange={onMainPhotoSelected}/> }
                    <ProfileStatusFuncComponent status={status} updateUserStatus={updateUserStatus}/>
                    ava + description
                </div>
            </div>
        )
    }
}

export default ProfileInfo;