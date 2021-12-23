import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./index.css";
import Navs from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import logo from "../../../assets/img/ticketwhite.png";
import axios from "../../../utils/axios";
import QRCode from "react-qr-code";
import moment from "moment";

const Ticket = (props) => {
  const [dataTicket, setDataTicket] = useState({});
  const [dataBooking, setDataBooking] = useState({});

  console.log(dataBooking, "data");
  const getBookingById = () => {
    axios
      .get(`booking/get_booking/${props.match.params.id}`)
      .then((res) => {
        setDataBooking(res.data.data[0]);
        // console.log(res, "booking");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    console.log(props.match.params.id, "tikec");
    getBookingById();
  }, []);

  return (
    <>
      <Navs />
      <div className="ticket__bg">
        <div className="container">
          <div className="ticket__background">
            <div className="ticket__header">
              <h2>Proff of Payment</h2>
            </div>
            <div className="row ticket__content">
              <div className="col-lg-7 ticket__content--1">
                <div className="ticket__header--title">
                  <img src={logo} />
                  <span>Admit One</span>
                </div>
                <div className="ticket__desc">
                  <span>Movie</span>
                  <h6>{dataBooking.name}</h6>
                </div>
                <div className="row ticket__desc--schedule">
                  <div className="col-4">
                    <div className="ticket__desc--schedule--item">
                      <span>Date</span>
                      <h6>{moment(dataBooking.dateBooking).format("dddd MMM YYYY")}</h6>
                    </div>
                    <div className="ticket__desc--schedule--item">
                      <span>Count</span>
                      <h6>{dataBooking.totalTicket} pieces</h6>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="ticket__desc--schedule--item">
                      <span>Time</span>
                      <h6>{dataBooking.timeBooking}</h6>
                    </div>
                    <div className="ticket__desc--schedule--item">
                      <span>Seats</span>
                      <h6>{(dataBooking.seat || []).map((item) => `${item}, `)}</h6>
                      {/* <h6>{dataBooking.seat.join(", ")}</h6> */}
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="ticket__desc--schedule--item">
                      <span>Price</span>
                      <h6>Rp.{dataBooking.totalPayment}</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 ticket__content--2">
                <div className="ticket__header--title--right">
                  <img src={logo} />
                </div>
                <div className="qr">
                  <QRCode
                    value={`${process.env.REACT_APP_URL_LOCAL}booking/qr/${props.match.params.id}`}
                  />
                </div>
              </div>
            </div>
            {/* <div className="ticket__button">
              <button>Download</button>
              <button>Print</button>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Ticket;
