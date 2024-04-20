import React, {useState} from 'react'
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import defaultUserImage from "../../../resources/images/defaultImage.jpg";
import ProfileStatusFuncComponent from "./ProfileStatusFuncComponent";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    } else {
        const onMainPhotoSelected = (e) => {
            if (e.target.files.length) {
                savePhoto(e.target.files[0]);
            }
        }

        const onSubmit = (formData) => {
            saveProfile(formData).then(
                (errorMessage) => {
                    if (!errorMessage) {
                        setEditMode(false);
                    }
                }
            );
        }

        const profileImage = profile.photos.large;
        return (
            <div>
                <div className={styles.descriptionBlock}>
                    <img src={profileImage || defaultUserImage} style={{maxWidth: '100px', maxHeight: '100px'}}/>
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

                    {editMode ?
                        <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
                        <ProfileData goToEditMode={() => setEditMode(true)} profile={profile} isOwner={isOwner}/>}

                    <ProfileStatusFuncComponent status={status} updateUserStatus={updateUserStatus}/>
                </div>
            </div>
        )
    }
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit</button>
        </div>
        }
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills:</b>: {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={styles.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;