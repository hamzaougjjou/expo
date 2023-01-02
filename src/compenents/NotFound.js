import React from 'react';
import { useNavigate } from 'react-router';
// import { useHistory } from "react-router-dom";

function NotFound(props) {

  const navigate = useNavigate();

  let goHome = () => {
    navigate('/');
  }

  return (

    <div>
      <center>
        <h1 style={{ color: 'red', padding: '20px', display: 'inline-block' }} >404 !</h1>
        <h2>
          page not found
        </h2>

        <button onClick={goHome} style={{ color: 'blue', cursor: 'pointer' }} >
          go to home page
        </button>

      </center>
    </div>
  );
}

export default NotFound;