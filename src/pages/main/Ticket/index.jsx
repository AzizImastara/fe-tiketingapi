import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./index.css";
import Navs from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import logo from "../../../assets/img/ticketwhite.png";

const Ticket = () => {
  let history = useHistory();

  return (
    <>
      <Navs />
      <div className="ticket__bg">
        <div className="container">
          <div className="ticket__header">
            <h2 className="text-center">Proff of Payment</h2>
          </div>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-5">
              <div className="ticket__header--title">
                <img src={logo} />
                <span>Admit One</span>
              </div>
              <div className="ticket__desc">
                <span>Movie</span>
                <h6>Spiderman HomeComing</h6>
              </div>
              <div className="row ticket__desc--schedule">
                <div className="col-4">
                  <div className="ticket__desc--schedule--item">
                    <span>Date</span>
                    <h6>07 July</h6>
                  </div>
                  <div className="ticket__desc--schedule--item">
                    <span>Count</span>
                    <h6>3 pieces</h6>
                  </div>
                </div>
                <div className="col-4">
                  <div className="ticket__desc--schedule--item">
                    <span>Time</span>
                    <h6>02:00 am</h6>
                  </div>
                  <div className="ticket__desc--schedule--item">
                    <span>Seats</span>
                    <h6>C4, C5, C6</h6>
                  </div>
                </div>
                <div className="col-4">
                  <div className="ticket__desc--schedule--item">
                    <span>Category</span>
                    <h6>PG-13</h6>
                  </div>
                  <div className="ticket__desc--schedule--item">
                    <span>Price</span>
                    <h6>$30,00</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="ticket__header--title--right">
                <img src={logo} />
              </div>
              <div className="ticket__desc">
                <span>Movie</span>
                <h6>Spiderman</h6>
              </div>
              <div className="row ticket__desc--schedule">
                <div className="col-5">
                  <div className="ticket__desc--schedule--item">
                    <span>Date</span>
                    <h6>07 Jul</h6>
                  </div>
                  <div className="ticket__desc--schedule--item">
                    <span>Count</span>
                    <h6>3 pcs</h6>
                  </div>
                </div>
                <div className="col-7">
                  <div className="ticket__desc--schedule--item">
                    <span>Time</span>
                    <h6>02:00 am</h6>
                  </div>
                  <div className="ticket__desc--schedule--item">
                    <span>Seats</span>
                    <h6>C6, C7, C8</h6>
                  </div>
                  <div className="ticket__desc--schedule--item">
                    <span>Category</span>
                    <h6>PG-13</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
          <div className="ticket__button">
            <button>Download</button>
            <button>Print</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Ticket;
