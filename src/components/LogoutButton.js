import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  
  const logoutBtn = ()=>{
    logout()
  }

  return (
    isAuthenticated && (
      <button onClick={logoutBtn}>
        Log Out
      </button>
    )
  )
}

export default LogoutButton
