import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="upper__footer__cover">
        <div className="upper__footer">
          <div>
            <p>
              <strong>NEW TO JUMIA?</strong>
            </p>
            <p>
              Subscribe to our newsletter to get updates on our latest offers!
            </p>
            <div className="form">
              <input
                type="text"
                className="footer__input"
                placeholder="mrsolusion@419.com"
              />
              {/* <MailIcon className="mail" /> */}
              <button className="footer__btn">MALE</button>
              <button className="footer__btn">FEMALE</button>
            </div>
            <p className="agreement">
              <input type="checkbox" className="footer__checkbox" />I agree to
              Jumia's Privacy and Cookie Policy. you can unsubscribe from
              newsletters at any time.
            </p>
            <p className="accept">I accept the Legal Terms</p>
          </div>
          <div>
            <div className="download__bar">
              <img
                className="jumia__star"
                src="https://play-lh.googleusercontent.com/hmYFFt3JfgbJAw92mHNccyS7puIHXDe_8SzPzHzw4pdr4qLYiR3rgEg9dEEs0dZ8vw"
              />
              <div>
                <strong>DOWNLOAD JUMIA FREE APP</strong>
                <div>Get access to exclusive offers!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lower__footer">
        <div>
          <p className="footer__title">NEED HELP?</p>
          <p>Chat with us</p>
          <p>Help Center</p>
          <p>Contact Us</p>
        </div>
        <div>
          <p className="footer__title">ABOUT JUMIA</p>
          <p>About us</p>
          <p>Jumia careers</p>
          <p>Jumia Express</p>
          <p>Terms and Conditions</p>
          <p>Privacy Notice</p>
          <p>Jumia Store Credit Terms and Conditions</p>
          <p>Jumia Payment Information Guidelines</p>
          <p>Cookie Notice</p>
          <p>Jumia Gobal</p>
          <p>Official Stores</p>
          <p>Flash Sales</p>
          <p>Tech Week 2024</p>
        </div>
        <div>
          <p className="footer__title">MAKE MONEY WITH JUMIA</p>
          <p>Sell on Jumia</p>
          <p>Vendor hub</p>
          <p>Become a Sales Consultant</p>
          <p>Become a Logistics Service Partner</p>
          <p>Join the jumia DA Academy</p>
          <p>Join the Jumia KDL Program</p>
        </div>
        <div>
          <p className="footer__title">JUMIA INTERNATIONAL</p>
          <p>Algeria</p>
          <p>Egypt</p>
          <p>Ghana</p>
          <p>Ivory Coast</p>
          <p>Kenya</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
