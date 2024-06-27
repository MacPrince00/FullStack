import React from "react";
import { useEffect } from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Outlet, NavLink, Link } from "react-router-dom";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import RadioOutlinedIcon from "@mui/icons-material/RadioOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import ChildCareOutlinedIcon from "@mui/icons-material/ChildCareOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header({ cart, savedName }) {
  function toggleDropdownMenu() {
    const dropdownMenu = document.getElementById("header__dropdownMenu");
    const helpdropdown = document.getElementById("helpList");
    if (dropdownMenu.classList.contains("showIT")) {
      dropdownMenu.classList.remove("showIT");
      dropdownMenu.classList.add("hide");
    } else {
      dropdownMenu.classList.remove("hide");
      dropdownMenu.classList.add("showIT");
      helpdropdown.classList.replace("showIT", "hide");
    }
  }

  function helpDropdownMenu() {
    const dropdownMenu = document.getElementById("header__dropdownMenu");
    const helpdropdown = document.getElementById("helpList");
    if (helpdropdown.classList.contains("showIT")) {
      helpdropdown.classList.remove("showIT");
      helpdropdown.classList.add("hide");
    } else {
      helpdropdown.classList.remove("hide");
      helpdropdown.classList.add("showIT");
      dropdownMenu.classList.replace("showIT", "hide");
    }
  }

  function showMenu() {
    const menus = document.getElementById("menu__select");
    if (menus.classList.contains("showIT")) {
      menus.classList.remove("showIT");
      menus.classList.add("hide");
    } else {
      menus.classList.remove("hide");
      menus.classList.add("showIT");
    }
  }

  return (
    <div className="general">
      <div className="cover__cover">
        <div className="cover">
          <div className="header">
            <div className="header__logo__menu">
              <MenuIcon
                onClick={() => {
                  showMenu();
                }}
              />
              <div>
                <div className="shift" id="menu__select">
                  <div>
                    <StoreOutlinedIcon />
                    <div>Supermarket</div>
                  </div>
                  <div>
                    <RestaurantOutlinedIcon />
                    <div>Health & Beauty</div>
                  </div>
                  <div>
                    <HouseOutlinedIcon />
                    <div>Home & Office</div>
                  </div>
                  <div>
                    <HandymanOutlinedIcon />
                    <div>Appliances</div>
                  </div>
                  <div>
                    <PhoneIphoneOutlinedIcon />
                    <div>Phones & Tablets</div>
                  </div>
                  <div>
                    <ComputerOutlinedIcon />
                    <div>Computing</div>
                  </div>
                  <div>
                    <RadioOutlinedIcon />
                    <div>Electronics</div>
                  </div>
                  <div>
                    <CheckroomOutlinedIcon />
                    <div>Fashion</div>
                  </div>
                  <div>
                    <ChildCareOutlinedIcon />
                    <div>Baby Products</div>
                  </div>
                  <div>
                    <SportsEsportsOutlinedIcon />
                    <div>Gaming</div>
                  </div>
                  <div>
                    <FitnessCenterOutlinedIcon />
                    <div>Sporting Goods</div>
                  </div>
                  <div>
                    <MoreHorizOutlinedIcon />
                    <div>Other Categories</div>
                  </div>
                </div>
              </div>
            </div>
            <NavLink to="/">
              <img
                className="header__logo"
                src="https://logos-world.net/wp-content/uploads/2022/12/Jumia-Logo.jpg"
              />
              <img
                className="header__logo__phone"
                src="https://play-lh.googleusercontent.com/hmYFFt3JfgbJAw92mHNccyS7puIHXDe_8SzPzHzw4pdr4qLYiR3rgEg9dEEs0dZ8vw"
              />
            </NavLink>
            <div className="header__search">
              <input
                type="text"
                className="header__searchInput"
                placeholder="Search products, brands and categories"
              />
              {<SearchIcon className="header__searchIcon" />}
              <button className="search__btn">SEARCH</button>
            </div>
            <div className="header__nav">
              <div
                className="acc"
                onClick={() => {
                  toggleDropdownMenu();
                }}
              >
                {<PermIdentityOutlinedIcon />}
                <div className="hide__menu">Account</div>
                <div className="hide__menu">
                  {<KeyboardArrowDownOutlinedIcon />}
                </div>
                <div className="acc__dropDown" id="header__dropdownMenu">
                  <div>
                    <PersonOutlinedIcon className="dropDown__icon" />
                    My Account
                  </div>
                  <div>
                    <HomeRepairServiceOutlinedIcon className="dropDown__icon" />
                    Orders
                  </div>
                  <div>
                    <MailOutlinedIcon className="dropDown__icon" />
                    Inbox
                  </div>
                  <div>
                    <FavoriteBorderOutlinedIcon className="dropDown__icon" />
                    Saved Items
                  </div>
                  <div>
                    <CreditCardOutlinedIcon className="dropDown__icon" />
                    Voucher
                  </div>
                  <hr color="lightgray" size="1" />
                  <div className="login__Link">
                    {localStorage.getItem("auth-token") ? (
                      <div
                        onClick={() => {
                          localStorage.removeItem("auth-token");
                          window.location.replace("/");
                        }}
                      >
                        LOGOUT
                      </div>
                    ) : (
                      <Link className="login__Link" to="/signup">
                        <div>LOGIN</div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div
                className="acc"
                onClick={() => {
                  helpDropdownMenu();
                }}
              >
                {<HelpOutlineOutlinedIcon />}
                <div className="hide__menu">Help</div>
                <div className="hide__menu">
                  {<KeyboardArrowDownOutlinedIcon />}
                </div>
                <div className="acc__dropDown" id="helpList">
                  <div>Help Center</div>
                  <div>Place an order</div>
                  <div>Payment Options</div>
                  <div>Track an Order</div>
                  <div>Cancel an Order</div>
                  <div>Returns & Refunds</div>
                  <hr color="lightgray" size="1" />
                  <div className="btn__div">
                    <button className="liveChat__btn">
                      <TextsmsOutlinedIcon /> LIVE CHAT
                    </button>
                  </div>
                </div>
              </div>
              <NavLink to="cart" className="now">
                <div className="acc">
                  <div className="cartLength">
                    {cart.reduce((total, cart) => total + cart.count, 0)}
                  </div>
                  {<ShoppingCartOutlinedIcon />}
                  <div className="hide__menu">Cart</div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
