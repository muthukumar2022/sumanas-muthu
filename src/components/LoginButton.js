import React from 'react';
import './login.css';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div className="Login">
      <h1>Sumanas Technologies</h1>
      <button className="loginBtn" onClick={() => loginWithRedirect()}>
        Log In
      </button>
      </div>
    )
  )
}

export default LoginButton
