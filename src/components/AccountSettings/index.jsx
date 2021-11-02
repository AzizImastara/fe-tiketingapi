import React, { Component } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import "./index.css";

const Account = () => {
  let history = useHistory();

  return (
    <>
      <h2>Details Information</h2>
      <div className="line"></div>
      <div className="row">
        <div className="col-6">
          <div className="user__content--desc">
            <span>First Name</span>
          </div>
          <div className="user__content--input">
            <input type="text" placeholder="jonas" />
          </div>
          <div className="user__content--desc">
            <span>E-mail</span>
          </div>
          <div className="user__content--input">
            <input type="email" placeholder="jonasrodrigu123@gmail.com" />
          </div>
          <button className="btn btn-primary">Update changes</button>
        </div>
        <div className="col-6">
          <div className="user__content--desc">
            <span>Last Name</span>
          </div>
          <div className="user__content--input">
            <input type="text" placeholder="El Rodriguez" />
          </div>
          <div className="user__content--desc">
            <span>Phone Number</span>
          </div>
          <div className="user__content--input">
            <input type="number" placeholder="+62 | 81445687121" />
          </div>
        </div>
      </div>
      <h2>Account and Privacy</h2>
      <div className="line"></div>
      <div className="row">
        <div className="col-6">
          <div className="user__content--desc">
            <span>New Password</span>
          </div>
          <div className="user__content--input">
            <input type="password" placeholder="Write your password" />
          </div>
          <button className="btn btn-primary">Update changes</button>
        </div>
        <div className="col-6">
          <div className="user__content--desc">
            <span>Confirm Password</span>
          </div>
          <div className="user__content--input">
            <input type="password" placeholder="Confirm your password" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
