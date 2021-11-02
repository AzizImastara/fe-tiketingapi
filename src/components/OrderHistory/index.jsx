import React, { Component } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import "./index.css";
import cineone from "../../assets/img/cineone.png";

const OrderHistory = () => {
  let history = useHistory();

  return (
    <>
      <div className="history">
        <div className="history__name">
          <div className="history__name--desc">
            <span>Tuesday, 07 July 2020 - 04:30pm</span>
            <h2>Spider-Man: Homecoming</h2>
          </div>
          <div className="history__name--premiere">
            <img src={cineone} alt="premiere" />
          </div>
        </div>
        <div className="history__button">
          <div className="history__button--ticket">
            <button>Ticket in active</button>
          </div>
          <div className="history__button--detail">
            <select>
              <option>Show Details</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
