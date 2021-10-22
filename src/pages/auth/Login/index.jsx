import React, { Component } from "react";
import "./index.css";
import logo from "../../../assets/img/tickitz 1.png";
import gIcon from "../../../assets/img/googleIcon.svg";
import fIcon from "../../../assets/img/facebookIcon.svg";

class Login extends Component {
  render() {
    return (
      <>
        <div className="row image">
          <div className="col-lg-7 col-sm-0 d-none d-md-inline-block">
            <div className="image__left">
              <div className="image__left--logo">
                <img src={logo} alt="logo" />
                <h3>wait, watch, wow!</h3>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-sm-12 form__right">
            <div className="form__right--detail">
              <h2>Sign In</h2>
              <span>Sign in with your data that you entered during your registration</span>
              <div className="form__right--input">
                <p>Email</p>
                <input type="email" placeholder="Write your email" />
                <p>Password</p>
                <input type="password" placeholder="Write your password" />
                <div className="form__right--button">
                  <button>Sign In</button>
                </div>
              </div>
              <div className="sign--forgot">
                <p>Forgot your password?</p>
              </div>
              <div className="sign-or">
                <span className="sign-or-line"></span>
                <p>Or</p>
                <span className="sign-or-line"></span>
              </div>
              <div className="icon__button">
                <button className="icon__button--content">
                  <img src={gIcon} alt="googleIcon" />
                  <p>Google</p>
                </button>
                <button className="icon__button--content">
                  <img src={fIcon} alt="facebookIcon" />
                  <p>Facebook</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
