import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import "./login.css";

function SignUp({
  signupForm,
  setSignupForm,
  setIsLoggedIn,
  saveLogIN,
  saveEmail,
  isLoggedIn,
}) {
  const [status, setStatus] = useState("idle");
  const location = useLocation();
  const navigate = useNavigate();

  const message =
    location.state && location.state.message ? location.state.message : "";

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("idle");
      setIsLoggedIn(true);
      navigate("/", { replace: true });
      localStorage.setItem("logIN", JSON.stringify(isLoggedIn));
      saveEmail();
    }, 1000);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setSignupForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="loginHere">
      <div className="loginInner">
        <img
          className="login__logo"
          src="https://play-lh.googleusercontent.com/hmYFFt3JfgbJAw92mHNccyS7puIHXDe_8SzPzHzw4pdr4qLYiR3rgEg9dEEs0dZ8vw"
        />
        <h3>Welcome to Jumia!</h3>
        <div className="signUP">Sign up for a Jumia account</div>
        {message && <div className="message">{message}</div>}

        <form onSubmit={handleSubmit} className="loginHereInput">
          <input
            className="inputHere"
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="Email or Mobile Number*"
            value={signupForm.email}
          />
          <input
            className="inputHere"
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
            value={signupForm.password}
          />
          <button className="login__btn" disabled={status === "submitting"}>
            {status === "submitting" ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        {/* <div className="signing">
          Already have an account?
          <Link to="/login" className="sign">
            Login
          </Link>
        </div> */}

        <div className="text">
          For further support, you may visit the Help Center or contact our
          customer service team.
        </div>
        <img
          className="login__"
          src="https://my.jumia.com.ng/pictures/myjumia/myjumia-bottom-logo.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default SignUp;
