import React from 'react'
import { useNavigate } from 'react-router'

function UserProfile(props) {
    const navigate = useNavigate();
    const goMyProfile = () => {
        navigate('/profile')
    }

    return (
        <h1>
            this is user prolfile
            with id = {props.id}
            <hr />
            <button onClick={goMyProfile}>go to my profile</button>
        </h1>
    )
}

export default UserProfile