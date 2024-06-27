import React from "react";
import "./Home.css";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="admin__home">
      
      <div>{<Outlet />}</div>
    </div>
  );
}

export default Home;
