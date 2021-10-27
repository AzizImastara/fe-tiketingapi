import React, { Component } from "react";
import Navs from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import "./index.css";
import gpay from "../../../assets/img/GoogleePay.png";
import visa from "../../../assets/img/Visa.png";
import gopay from "../../../assets/img/GoPayy.png";
import paypal from "../../../assets/img/Paypal.png";
import dana from "../../../assets/img/Dana.png";
import bca from "../../../assets/img/BCA.png";
import bri from "../../../assets/img/BRI.png";
import ovo from "../../../assets/img/OVO.png";
import { BsExclamationTriangleFill } from "react-icons/bs";

class Payment extends Component {
  render() {
    return (
      <>
        <Navs />
        <div className="payment__bg">
          <div className="container payment__page">
            <div className="payment__info">
              <h1>Payment Info</h1>
              <div className="payment__info--component">
                <div className="payment__info--component--desc">
                  <p>Date & Time</p>
                  <p>Tuesday, 07 July 2020 at 02:00pm</p>
                </div>
                <div className="payment__info--component--desc">
                  <p>Movie title</p>
                  <p>Spider-Man: Homecoming</p>
                </div>
                <div className="payment__info--component--desc">
                  <p>Cinema name</p>
                  <p>CineOne21 Cinema</p>
                </div>
                <div className="payment__info--component--desc">
                  <p>Number of tickets</p>
                  <p>3 pieces</p>
                </div>
                <div className="payment__info--component--desc">
                  <p>Total Payment</p>
                  <p>$30,00</p>
                </div>
              </div>
              <h1>Choose a Payment Method</h1>
              <div className="payment__info--choose--container">
                <div className="payment__info--choose">
                  <button>
                    <img src={gpay} alt="gpay" />
                  </button>
                  <button>
                    <img src={visa} alt="gpay" />
                  </button>
                  <button>
                    <img src={gopay} alt="gpay" />
                  </button>
                  <button>
                    <img src={paypal} alt="gpay" />
                  </button>
                  <button>
                    <img src={dana} alt="gpay" />
                  </button>
                  <button>
                    <img src={bca} alt="gpay" />
                  </button>
                  <button>
                    <img src={bri} alt="gpay" />
                  </button>
                  <button>
                    <img src={ovo} alt="gpay" />
                  </button>
                </div>
                <div className="sign-or">
                  <span className="sign-or-line"></span>
                  <p>Or</p>
                  <span className="sign-or-line"></span>
                </div>
                <div className="sign--forgot">
                  <p>Pay via cash.</p>
                  <p>See how it work</p>
                </div>
              </div>
              <div className="payment__button">
                <button className="btn btn-light">Prvious step</button>
                <button className="btn btn-primary">Pay your order</button>
              </div>
            </div>
            <div className="personal__info">
              <h1>Personal Info</h1>
              <div className="personal__info--component">
                <p>Full Name</p>
                <input type="text" placeholder="Jonas El Rodriguez" />
                <p>Email</p>
                <input type="email" placeholder="jonasrodri123@gmail.com" />
                <p>Phone Number</p>
                <input type="number" placeholder="+62 | 81445687121" />
                <div className="personal__error">
                  <BsExclamationTriangleFill />
                  <p>Fill your data correctly.</p>
                </div>
              </div>
              <div className="payment__button--mobile">
                <button className="btn btn-primary">Pay your order</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Payment;
