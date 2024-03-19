import React, {useEffect} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus, updateUserStatus} from '../../redux/profile-reducer';
import {useParams} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const ProfileContainer = ({getUserProfile, profile, isAuth, status, getUserStatus, updateUserStatus}) => {
    const {userId} = useParams();

    useEffect(() => {
        if (userId) {
            getUserProfile(userId)
            getUserStatus(userId)
        }
    }, [getUserProfile, getUserStatus, userId]);

    return (
        <Profile profile={profile} isAuth={isAuth} status={status} updateUserStatus={updateUserStatus}/>
    );
};

const mapStateToProps = (state) => {
    console.log('Status from mapStateToProps:', state.profilePage.status);
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    };
};

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    // withAuthRedirect
)(ProfileContainer);