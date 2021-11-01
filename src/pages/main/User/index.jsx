import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./index.css";
import Navs from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import profile from "../../../assets/img/Ellipse 11.png";

const User = () => {
  let history = useHistory();

  return (
    <>
      <Navs />
      <div className="user__bg">
        <div className="container">
          {/* <div className="user"> */}
          <div className="row user__layout">
            <div className="col-4 user__profile">
              <div className="user__header">
                <h4>INFO</h4>
              </div>
              <div className="user__header--image">
                <img src={profile} />
                <h2>Jonas El Rodriguez</h2>
                <p>Moviegoers</p>
              </div>
              <hr />
              <div className="user__loyalty">
                <p>Loyalty Points</p>
                <div className="loyalty">
                  <h2>Moviegoers</h2>
                  <div className="point">
                    <h5>320</h5>
                    <p>points</p>
                  </div>
                </div>
                <h6>180 point become a master</h6>
              </div>
            </div>
            <div className="col-7 user__account">
              <div className="account__settings">
                <div className="row">
                  <div className="col-4">
                    <h2>Account Settings</h2>
                  </div>
                  <div className="col-8">
                    <h2>Order History</h2>
                  </div>
                </div>
              </div>
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
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default User;
