import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom'

function Authrequired({isLoggedIn}) {

  

  // // Update localStorage whenever cartItems change
  // useEffect(() => {
  //   localStorage.setItem("isLoggedIn", isLoggedIn);
  // }, [isLoggedIn]);

  // useEffect(() => {
  //   localStorage.getItem("isLoggedIn");
  // }, [isLoggedIn]);

  if(!isLoggedIn){
    return <Navigate to="signup" state={{message: "Login to access this Page"}}/>
  }
  return <Outlet />
}

export default Authrequired