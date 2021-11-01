import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./index.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/ticketwhite.png";
import gIcon from "../../../assets/img/googleIcon.svg";
import fIcon from "../../../assets/img/facebookIcon.svg";

const ManageSchedule = () => {
  let history = useHistory();

  return (
    <>
      <div className="row register">
        <div className="col-lg-7 col-sm-0 d-none d-md-inline-block register__cover">
          <div className="register__cover--screen">
            <div className="register__cover--logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="register__cover--desc">
              <h3>Lets build your account</h3>
              <p>To be a loyal moviegoer and access all of features, your details are required.</p>
            </div>
            <div className="steper">
              <div className="steper__list steper__list--active">Fill your complete email</div>
              <div className="steper__list--line"></div>
              <div className="steper__list">Active your account</div>
              <div className="steper__list--line"></div>
              <div className="steper__list">Done</div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-sm-12 form__register">
          <div className="form__register--detail">
            <h2>Fill your additional details</h2>
            <form className="form__register--input">
              <p>Email</p>
              <input
                type="email"
                placeholder="Write your email"
                name="email"
                // onChange={this.handleChangeForm}
              />
              <p>Password</p>
              <input
                type="password"
                placeholder="Write your password"
                name="password"
                // onChange={this.handleChangeForm}
              />
              <div className="form__register--button">
                <button>Join for free now</button>
              </div>
            </form>
            <div className="sign--register">
              <p>Do you already have an account? </p>
              <Link to="/Login">Log in</Link>
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
};
export default ManageSchedule;
