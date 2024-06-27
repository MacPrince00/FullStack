import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom'

function Authrequired() {
  if(!localStorage.getItem("auth-token")){
    return <Navigate to="signup" state={{message: "Login to access this Page"}}/>
  }
  return <Outlet />
}

export default Authrequired