import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Logo from "./amazonLogo.png";
import { auth } from "../../Firebase";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential)
          //here we used react-router-dom useNavigate instead of usehistory history.push('/')
          navigate("/");

        //Signed In
        //const user = userCredential.user;
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to='/'>
        <img className="loginLogo" src={Logo} alt="" />
      </Link>

      <div className="loginContainer">
        <h1 className="signIn">Sign-In</h1>
        <form>
          <h5 className="inputTxt">E-mail</h5>
          <input
            type="text"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5 className="inputTxt">Password</h5>
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="loginSignInBtn">
            Sign In
          </button>
        </form>
        <p className="termsofUse">
          By signing in you agree to the Amazon-Clone conditions of use & sale.
          Please see our privacy policy, cookies notice and interest based ads
          notice.
        </p>
        <button onClick={register} className="loginRegisterBtn">
          Create your Amazon account
        </button>
      </div>
      <h6 className="bottomText">
        © 1996-2023, AmazonClone.com, Inc. or its affiliates
      </h6>
    </div>
  );
}

export default Login;
