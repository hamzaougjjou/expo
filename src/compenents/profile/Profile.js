import React from 'react'
import { useParams } from 'react-router'
import MyProfile from './MyProfile';
import UserProfile from './UserProfile';

function Profile() {

    let { id } = useParams();

    if (id === undefined ) {
        return (
            <MyProfile />
        )
    } else {
        return (
            <UserProfile id= { id } />
        )
    }
}

export default Profile;