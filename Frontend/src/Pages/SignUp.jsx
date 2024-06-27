import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./login.css";

function SignUp({ savedName, setSavedName }) {
  const [accExist, setAccExist] = useState(false);
  const [status, setStatus] = useState("idle");
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const message =
    location.state && location.state.message ? location.state.message : "";

  const login = async () => {
    let responseData;
    await fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signup = async () => {
    let responseData;
    await fetch("http://localhost:3000/api/v1/adduser", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className="loginHere">
      <div className="loginInner">
        <img
          className="login__logo"
          src="https://play-lh.googleusercontent.com/hmYFFt3JfgbJAw92mHNccyS7puIHXDe_8SzPzHzw4pdr4qLYiR3rgEg9dEEs0dZ8vw"
          alt="Jumia Logo"
        />
        <h3>Welcome to Jumia!</h3>
        <div className="signUP">
          {accExist
            ? "Sign in to your Jumia account"
            : "Sign up for a Jumia account"}
        </div>
        {message && <div className="message">{message}</div>}

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="loginHereInput"
        >
          {!accExist && (
            <input
              className="inputHere"
              name="username"
              type="text"
              onChange={changeHandler}
              placeholder="Username"
              value={formData.username}
              required
            />
          )}
          <input
            className="inputHere"
            name="email"
            type="email"
            onChange={changeHandler}
            placeholder="Email"
            value={formData.email}
            required
          />
          <input
            className="inputHere"
            name="password"
            type="password"
            onChange={changeHandler}
            placeholder="Password"
            value={formData.password}
            required
          />
          <button
            className="login__btn"
            disabled={status === "submitting"}
            onClick={() => {
              !accExist ? signup() : login();
            }}
          >
            {status === "submitting"
              ? accExist
                ? "Signing In..."
                : "Signing Up..."
              : accExist
              ? "Sign In"
              : "Sign Up"}
          </button>
        </form>

        <div className="acc__existence">
          {accExist ? (
            <div>
              Don't have an Account?{" "}
              <span onClick={() => setAccExist(false)}>Sign up</span>
            </div>
          ) : (
            <div>
              Already have an account?{" "}
              <span onClick={() => setAccExist(true)}>Sign in</span>
            </div>
          )}
        </div>

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
