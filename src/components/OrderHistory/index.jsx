import React, { useEffect, useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import "./index.css";
import cineone from "../../assets/img/cineone.png";
import hiflix from "../../assets/img/hiflix.png";
import ebuid from "../../assets/img/ebuid.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../utils/axios";
import moment from "moment";

const OrderHistory = () => {
  const user = useSelector((state) => state.auth);
  let history = useHistory();
  const dispatch = useDispatch();

  const [dataBooking, setDataBooking] = useState([]);
  console.log(dataBooking, "dataa");

  const getBooking = () => {
    axios
      .get(`booking/user/${user.idUser}`)
      .then((res) => {
        console.log(res.data.data, "booking");
        // dispatch(profile(user.idUser));
        setDataBooking(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getBooking();
  }, []);

  const handleRouteSwitch = (id) => {
    history.push(`/Ticket/${id}`);
  };

  return (
    <>
      {dataBooking.map((item) => (
        <div key={item.id} className="history">
          <div className="history__name">
            <div className="history__name--desc">
              <span>
                {moment(item.dateBooking).format("dddd MMM YYYY")} - {item.timeBooking}
              </span>
              <h2>{item.name}</h2>
            </div>
            <div className="history__name--premiere">
              <img
                src={
                  item.premiere === "hiflix" ? hiflix : item.premiere === "ebu.id" ? ebuid : cineone
                }
                alt="mini"
              />
            </div>
          </div>
          <div className="history__button">
            <div className="history__button--ticket">
              <button
                onClick={() => handleRouteSwitch(item.id)}
                className={`${
                  item.statusUse === "active" ? "bg-primary text-white" : "bg-success text-white"
                }`}
              >
                {item.statusUse === "active" ? "Ticket in active" : "Ticket used"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OrderHistory;
