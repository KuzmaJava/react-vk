import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile, getUserStatus, savePhoto, updateUserStatus} from '../../redux/profile-reducer';
import { Navigate, useParams } from 'react-router-dom';
import { compose } from "redux";

const ProfileContainer = ({ getUserProfile, profile, isAuth, status, getUserStatus, updateUserStatus, authorizedUserId, savePhoto }) => {
    const { userId } = useParams();
    const [redirect, setRedirect] = useState(false); // State for redirecting

    useEffect(() => {
        if (userId) {
            getUserProfile(userId);
            getUserStatus(userId);
        } else {
            if (!isAuth) {
                setRedirect(true); // Set redirect to true if not authenticated
            } else {
                getUserProfile(authorizedUserId);
                getUserStatus(authorizedUserId);
            }
        }
    }, [getUserProfile, getUserStatus, userId, authorizedUserId, isAuth]);

    if (redirect) {
        return <Navigate to={"/login"} />; // Render Navigate component here
    }

    return (
        <Profile profile={profile}
                 isAuth={isAuth}
                 status={status}
                 updateUserStatus={updateUserStatus}
                 isOwner={!userId}
                 savePhoto={savePhoto}/>
    );
};

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    };
};

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto })
)(ProfileContainer);
