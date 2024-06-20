import React from "react";
import "./ProductDisplay.css";
import SellIcon from "@mui/icons-material/Sell";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import FireTruckOutlinedIcon from "@mui/icons-material/FireTruckOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import WheelchairPickupOutlinedIcon from "@mui/icons-material/WheelchairPickupOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { list } from "../assets/data/list";

function toggleDropdownMenu() {
  const dropdownMenu = document.getElementById("dropdownMenu");
  const searchInput = document.getElementById("searchInput");
  const dropIT = document.getElementById("dropIT");
  dropdownMenu.classList.toggle("show");
  searchInput.classList.toggle("final__");
  dropIT.classList.toggle("drop__");
}

function selectOption(option) {
  var searchInput = document.getElementById("searchInput");
  searchInput.placeholder = option; // Set placeholder to the selected option
  toggleDropdownMenu(); // Hide the dropdown menu after selection
}

function ProductDisplay({ addToCart }) {
  const params = useParams();
  const [displayHere, setDisplayHere] = useState();

  useEffect(() => {
    const foundItem = list.find((item) => item.title === params.productName);
    if (foundItem) {
      setDisplayHere(foundItem);
    } else {
      setDisplayHere(null);
    }
  }, [list, params.productName]);


  return (
    <div className="productDisplay__page">
      <div className="testee">
        <div className="product__info">
          <div className="product__right">
            <img
              className="productInfo__img"
              src={displayHere && displayHere.image}
            />
            <div className="prd__share">SHARE THIS PRODUCT</div>
            <FacebookOutlinedIcon className="facebook" />
          </div>
          <div className="product__left">
            <div className="productDisplay__title">
              {displayHere && displayHere.title}
            </div>
            <div className="brand">
              Brand:
              <span> itel | Similar products from itel</span>
            </div>
            <hr color="lightgray" size="1" />
            <div className="flash__selling">
              <div className="sales">
                <SellIcon className="sellsIcon" /> FlashSales
              </div>
              <div>Starts on:13 Apr, 10:00am</div>
            </div>
            <div className="productDisplay__prices">
              <div className="price">
                &#x20A6; {displayHere && displayHere.price}
              </div>
              <div className="formal__price">
                &#x20A6; {displayHere && displayHere.discount}
              </div>
              <div className="productDisplay__percentage">
                {displayHere && displayHere.percent}
              </div>
            </div>
            <div className="stock">In Stock</div>
            <div className="shipping__details">
              + shipping from ₦ 2,260 to Owerri-Douglas
            </div>
            <div className="rating__details">
              <div className="star">{displayHere && displayHere.rating}</div>
              <div className="display__verified">
                ({displayHere && displayHere.verified})
              </div>
            </div>
            <div className="ptd__quant">
              <button className="subtract__btn">
                <RemoveOutlinedIcon />
              </button>
              <div className="each__quantity">1</div>
              <button className="add__btn">
                <AddOutlinedIcon />
              </button>
              <div className="items__added">(1 item(s) added)</div>
            </div>
            <hr color="lightgray" size="1" />
            <div className="promotion">PROMOTIONS</div>
            <div className="promotion__list">
              <img
                className="display__logo__prd"
                src="https://play-lh.googleusercontent.com/hmYFFt3JfgbJAw92mHNccyS7puIHXDe_8SzPzHzw4pdr4qLYiR3rgEg9dEEs0dZ8vw"
                alt=""
              />
              <div>Call 07006000000 To Order</div>
            </div>
            <div className="promotion__list">
              <img
                className="display__logo__prd"
                src="https://play-lh.googleusercontent.com/hmYFFt3JfgbJAw92mHNccyS7puIHXDe_8SzPzHzw4pdr4qLYiR3rgEg9dEEs0dZ8vw"
                alt=""
              />
              <div>
                Need extra money? loan up to N500,000 on the JumiaPay Android
                app.
              </div>
            </div>
            <div className="promotion__list">
              <img
                className="display__logo__prd"
                src="https://play-lh.googleusercontent.com/hmYFFt3JfgbJAw92mHNccyS7puIHXDe_8SzPzHzw4pdr4qLYiR3rgEg9dEEs0dZ8vw"
                alt=""
              />
              <div>
                Enjoy cheaper shipping fees when you select a PickUp Station at
                checkout.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="left__product__">
        <div className="upper__checkout">
          <div className="delivery__title">DELIVERY & RETURNS</div>
          <hr color="lightgray" size="1" />
          <img
            className="jumia__express__cart"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvOEGmYEqltfYO-lcm5yimMwMJPvhnaW-3aDyVfUxA&s"
            alt=""
          />
          <div>
            Free delivery on thousands of products in Lagos, Ibadan & Abuja
          </div>
          <div className="free__delivery">Details</div>
          <hr color="lightgray" size="1" />
          <div className="location__selection">Choose your location</div>
          <div className="locate__me">
            <input placeholder="Search" className="state" id="searchInput" />
            <div
              className="dropDown"
              id="dropIT"
              onClick={() => {
                toggleDropdownMenu();
              }}
            >
              <ArrowDropDownOutlinedIcon />
            </div>
            <div className="dropdown-menu" id="dropdownMenu">
              <div
                onClick={() => {
                  selectOption("Abia");
                }}
              >
                Abia
              </div>
              <div
                onClick={() => {
                  selectOption("Adamawa");
                }}
              >
                Adamawa
              </div>
              <div
                onClick={() => {
                  selectOption("Akwa Ibom");
                }}
              >
                Akwa Ibom
              </div>
              <div
                onClick={() => {
                  selectOption("Anambra");
                }}
              >
                Anambra
              </div>
              <div
                onClick={() => {
                  selectOption("Bauchi");
                }}
              >
                Bauchi
              </div>
              <div
                onClick={() => {
                  selectOption("Bayelsa");
                }}
              >
                Bayelsa
              </div>
              <div
                onClick={() => {
                  selectOption("Benue");
                }}
              >
                Benue
              </div>
              <div
                onClick={() => {
                  selectOption("Borno");
                }}
              >
                Borno
              </div>
              <div
                onClick={() => {
                  selectOption("Cross River");
                }}
              >
                Cross River
              </div>
              <div
                onClick={() => {
                  selectOption("Delta");
                }}
              >
                Delta
              </div>
              <div
                onClick={() => {
                  selectOption("Ebonyi");
                }}
              >
                Ebonyi
              </div>
              <div
                onClick={() => {
                  selectOption("Edo");
                }}
              >
                Edo
              </div>
              <div
                onClick={() => {
                  selectOption("Ekiti");
                }}
              >
                Ekiti
              </div>
              <div
                onClick={() => {
                  selectOption("Enugu");
                }}
              >
                Enugu
              </div>
              <div
                onClick={() => {
                  selectOption("Gombe");
                }}
              >
                Gombe
              </div>
              <div
                onClick={() => {
                  selectOption("Imo");
                }}
              >
                Imo
              </div>
              <div
                onClick={() => {
                  selectOption("Jigawa");
                }}
              >
                Jigawa
              </div>
              <div
                onClick={() => {
                  selectOption("Kaduna");
                }}
              >
                Kaduna
              </div>
              <div
                onClick={() => {
                  selectOption("Kano");
                }}
              >
                Kano
              </div>
              <div
                onClick={() => {
                  selectOption("Katsina");
                }}
              >
                Katsina
              </div>
              <div
                onClick={() => {
                  selectOption("Kebbi");
                }}
              >
                Kebbi
              </div>
              <div
                onClick={() => {
                  selectOption("Kogi");
                }}
              >
                Kogi
              </div>
              <div
                onClick={() => {
                  selectOption("Kwara");
                }}
              >
                Kwara
              </div>
              <div
                onClick={() => {
                  selectOption("Lagos");
                }}
              >
                Lagos
              </div>
              <div
                onClick={() => {
                  selectOption("Nasarawa");
                }}
              >
                Nasarawa
              </div>
              <div
                onClick={() => {
                  selectOption("Niger");
                }}
              >
                Niger
              </div>
              <div
                onClick={() => {
                  selectOption("Ogun");
                }}
              >
                Ogun
              </div>
              <div
                onClick={() => {
                  selectOption("Ondo");
                }}
              >
                Ondo
              </div>
              <div
                onClick={() => {
                  selectOption("Osun");
                }}
              >
                Osun
              </div>
              <div
                onClick={() => {
                  selectOption("Oyo");
                }}
              >
                Oyo
              </div>
              <div
                onClick={() => {
                  selectOption("Plateau");
                }}
              >
                Plateau
              </div>
              <div
                onClick={() => {
                  selectOption("Rivers");
                }}
              >
                Rivers
              </div>
              <div
                onClick={() => {
                  selectOption("Sokoto");
                }}
              >
                Sokoto
              </div>
              <div
                onClick={() => {
                  selectOption("Taraba");
                }}
              >
                Taraba
              </div>
              <div
                onClick={() => {
                  selectOption("Yobe");
                }}
              >
                Yobe
              </div>
              <div
                onClick={() => {
                  selectOption("Zamfara");
                }}
              >
                Zamfara
              </div>
              <div
                onClick={() => {
                  selectOption("Federal Capital Territory (FCT)");
                }}
              >
                Federal Capital Territory (FCT)
              </div>
            </div>
          </div>

          <input placeholder="Input City" className="state" />
          <div className="each__prices">
            <div>
              <div className="delivery__icons">
                <WheelchairPickupOutlinedIcon />
              </div>
            </div>
            <div>
              <div className="details__design">
                <div>Pickup Station</div>
                <h5>Details</h5>
              </div>
              <div>
                Delivery Fees ₦ 2,260 Arriving at pickup station between 18
                April & 23 April when you order within next 17hrs 2mins
              </div>
            </div>
          </div>
          <div className="each__prices">
            <div>
              <div className="delivery__icons">
                <FireTruckOutlinedIcon />
              </div>
            </div>
            <div className="delivery__info">
              <div className="details__design">
                <div>Door Delivery</div>
                <h5>Details</h5>
              </div>
              <div>
                Delivery Fees ₦ 2,690 Ready for delivery between 18 April & 23
                April when you order within next 17hrs 2mins
              </div>
            </div>
          </div>
          <div className="each__prices">
            <div>
              <div className="delivery__icons">
                <CardGiftcardOutlinedIcon />
              </div>
            </div>
            <div>
              <div className="details__design">
                <div>Return Policy</div>
                <h5>Details</h5>
              </div>
              <div>Free return within 7 days for ALL eligible items</div>
            </div>
          </div>
          <div className="each__prices">
            <div>
              <div className="delivery__icons">
                <VerifiedUserOutlinedIcon />
              </div>
            </div>

            <div>
              <div>Warranty</div>
              <div>1 year</div>
            </div>
          </div>
        </div>
        <div className="upper__checkout">
          <div className="each__product">
            <div className="adding__main">
              <img
                className="cart__product__image"
                src={displayHere && displayHere.image}
              />
              <div className="product__title">
                {displayHere && displayHere.title}
              </div>
            </div>
            <p className="product__price">
              &#x20A6;{displayHere && displayHere.price}
            </p>
            <div className="deduct__percent">
              <div className="initial__price">
                &#x20A6;{displayHere && displayHere.discount}
              </div>
              <div className="percentage">
                {displayHere && displayHere.percent}
              </div>
            </div>
            <button
              className="product__btn"
              onClick={() =>
                addToCart({
                  image: displayHere.image,
                  title: displayHere.title,
                  price: displayHere.price,
                })
              }
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
