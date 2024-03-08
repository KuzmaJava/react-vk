import React, { useEffect } from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';

const ProfileContainer = ({ setUserProfile, profile }) => {
    const { userId } = useParams();

    useEffect(() => {
        if (userId) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
                .then(response => {
                    setUserProfile(response.data);
                })
                .catch(error => {
                    console.error('Error fetching profile:', error);
                });
        }
    }, [userId, setUserProfile]);

    return (
        <Profile profile={profile} />
    );
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
