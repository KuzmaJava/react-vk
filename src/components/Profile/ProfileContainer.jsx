import React, {useEffect} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile} from '../../redux/profile-reducer';
import {useParams} from 'react-router-dom';

const ProfileContainer = ({ getUserProfile, profile, isAuth }) => {
    const { userId } = useParams();

    useEffect(() => {
        if (userId) {
            getUserProfile(userId)
        }
    }, [userId, getUserProfile]);

    return (
        <Profile profile={profile} isAuth={isAuth} />
    );
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { getUserProfile })(ProfileContainer);
