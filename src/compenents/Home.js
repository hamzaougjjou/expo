import React from 'react';
import { useNavigate } from 'react-router';

function Home() {

  const navigate = useNavigate();
  const goUserProfile = () => {
      navigate('/profile/190400')
  }
  return (

    <div>
        <h1>hello from Home page</h1>
        <br />
        <br />
        <hr/>

        <button onClick={ goUserProfile }>go to user profile</button>
    </div>

  );
}

export default Home;