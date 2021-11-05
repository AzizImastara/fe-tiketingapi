import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./index.css";
import Navs from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Line } from "react-chartjs-2";

const Dashboard = () => {
  let history = useHistory();

  return (
    <>
      <Navs />
      <div className="dashboard__bg">
        <div className="container">
          <div className="row">
            <div className="col-9 dashboard__header">
              <h1>Dashboard</h1>
              <div className="dashboard__grafik"></div>
            </div>
            <div className="col-3 dashboard__header">
              <h1>Filtered</h1>
              <div className="dashboard__filter--edit">
                <div className="dashboard__filter">
                  <select>
                    <option>Select Movie</option>
                  </select>
                  <select>
                    <option>Select Premiere</option>
                  </select>
                  <select>
                    <option>Select Location</option>
                  </select>
                  <div className="dashboard__filter--button">
                    <button className="btn btn-primary">Filter</button>
                    <button className="btn btn-light">Reset</button>
                  </div>
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
export default Dashboard;
