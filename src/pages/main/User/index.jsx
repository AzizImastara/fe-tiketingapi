import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./index.css";
import Navs from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import profile from "../../../assets/img/Ellipse 11.png";
import Account from "../../../components/AccountSettings";
import OrderHistory from "../../../components/OrderHistory";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
// import { Tabs, Tab } from "react-bootstrap";

const User = () => {
  let history = useHistory();

  return (
    <>
      <Navs />
      <div className="user__bg">
        <div className="container">
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
                  <Tabs defaultActiveKey="Account" id="uncontrolled-tab-example" className="mb-3">
                    {/* <div className="col-4"> */}
                    <Tab eventKey="Account" title="Account Settings">
                      <Account />
                    </Tab>
                    {/* </div> */}
                    {/* <div className="col-8"> */}
                    <Tab eventKey="Order" title="Order History">
                      <OrderHistory />
                    </Tab>
                    {/* </div> */}
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default User;
