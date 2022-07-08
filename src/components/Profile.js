import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';
import {logginedUser} from "../slice/UserSlice"
import { useSelector, useDispatch } from "react-redux";
const Profile = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();
  const userDetails = useSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(
      logginedUser(user)
    );
  }, []);

  return (
    isAuthenticated && userDetails != null && ( 
     <div>
        <img src={userDetails.picture} alt={userDetails.name} />
        <h2>{userDetails.name}</h2>
        <p>{userDetails.email}</p>
        <JSONPretty data={userDetails} />
      </div>
    )
  )
}

export default Profile
