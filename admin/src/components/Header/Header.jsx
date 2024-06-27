import React from "react";
import "./Header.css";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { Outlet, NavLink, Link } from "react-router-dom";

function Header() {
  function showMenu() {
    const helpdropdown = document.getElementById("menu__display");

    if (
      helpdropdown.style.display === "none" ||
      helpdropdown.style.display === ""
    ) {
      helpdropdown.style.display = "block";
    } else {
      helpdropdown.style.display = "none";
    }
  }
  return (
    <div className="header">
      <div
        className="menu__btn"
        onClick={() => {
          showMenu();
        }}
      >
        <MenuTwoToneIcon />
        <div className="home__navigation" id="menu__display">
          <NavLink to="/addproduct" className="NavLink">
            <div>Add Product</div>
          </NavLink>
          <NavLink to="/" className="NavLink">
            <div>Edit Products</div>
          </NavLink>
          <NavLink to="/orders" className="NavLink">
            <div>View Orders</div>
          </NavLink>
        </div>
      </div>
      <div className="logo">JUMIA ADMIN</div>
      <AccountCircleTwoToneIcon className="profile__icon" />
    </div>
  );
}

export default Header;
