import React from "react";
import "./home.css";
import "../components/screenSizes/phones.css";
import "../components/screenSizes/tablets.css";
import "../components/screenSizes/computer.css";
import { list } from "../assets/data/list";
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
import { NavLink } from "react-router-dom";

function Home({ addToCart }) {
  return (
    <>
      <div className="home__background">
        <div className="first__home">
          <div className="home__selection">
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
          <img
            className="slide__img"
            src="https://ng.jumia.is/cms/0-5-TechWeek/2024/Brand-days/TECNO/Desktop_Homepage_Slider__712x384_copy.png"
          />
          <div className="last__header">
            <div className="last__slider__div">
              <div>
                <img src="https://ng.jumia.is/cms/0-1-homepage/bsb/phone-icon-1.png" />
                CALL TO ORDER
              </div>
              <div>
                <img src="https://ng.jumia.is/cms/0-1-homepage/bsb/icone-seller-1.png" />
                Sell on Jumia
              </div>
              <div>
                <img src="	https://ng.jumia.is/cms/0-1-homepage/bsb/icone-2-return.png" />
                Best Deals
              </div>
            </div>
            <div>
              <img
                className="last__header__img"
                src="https://ng.jumia.is/cms/0-1-initiatives/jforce/2024/shop_earn.png"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="home__products">
            {list.map(
              ({
                image,
                title,
                price,
                discount,
                percent,
                rating,
                verified,
                id,
                count,
              }) => (
                <div className="each__product" key={id}>
                  <NavLink to={title} className="clicks">
                    <img className="product__img" src={image} />
                    <p className="product__title">{title}</p>
                    <p className="product__price">&#x20A6;{(price).toLocaleString()}</p>
                    <div className="deduct__percent">
                      <div className="initial__price">&#x20A6;{discount}</div>
                      <div className="percentage">{percent}</div>
                    </div>
                    <div>
                      {rating} ({verified})
                    </div>
                    <img
                      className="jumia__express"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvOEGmYEqltfYO-lcm5yimMwMJPvhnaW-3aDyVfUxA&s"
                    />
                  </NavLink>
                  <button
                    className="product__btn"
                    onClick={() => {
                      addToCart({ image, title, price, count, id });
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
