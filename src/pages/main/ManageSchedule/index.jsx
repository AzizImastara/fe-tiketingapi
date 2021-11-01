import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./index.css";
import Navs from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import gambar from "../../../assets/img/Spiderman.png";
import ebuid from "../../../assets/img/ebuid-mini.png";
import cineone from "../../../assets/img/cineone-mini.png";
import hiflix from "../../../assets/img/hiflix-mini.png";

const ManageSchedule = () => {
  let history = useHistory();

  return (
    <>
      <Navs />
      <div className="schedule__bg">
        <div className="container">
          <div className="schedule__header">
            <h1>Form Schedule</h1>
          </div>
          <div className="schedule">
            <div className="row">
              <div className="col-2">
                <div className="schedule__border">
                  <img src={gambar} />
                </div>
              </div>
              <div className="col-5">
                <div className="schedule__content--desc">
                  <span>Movie</span>
                </div>
                <div className="schedule__content--input">
                  <input type="text" placeholder="Select Movie" />
                </div>
                <div className="schedule__content--desc">
                  <span>Price</span>
                </div>
                <div className="schedule__content--input">
                  <input type="number" placeholder="10" />
                </div>
                <div className="schedule__content--desc">
                  <span>Premiere</span>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="schedule__premiere">
                      <img src={ebuid} />
                      <img src={hiflix} />
                      <img src={cineone} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="schedule__content--desc">
                  <span>Location</span>
                </div>
                <div className="schedule__content--input">
                  <input type="text" placeholder="Select Location" />
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="schedule__content--desc">
                      <span>Date Start</span>
                    </div>
                    <div className="schedule__content--input">
                      <input type="text" placeholder="07/05/2020" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="schedule__content--desc">
                      <span>Date End</span>
                    </div>
                    <div className="schedule__content--input">
                      <input type="text" placeholder="07/07/2020" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="schedule__content--desc">
                    <span>Time</span>
                  </div>
                  <div className="col-3 schedule__content--time--">
                    <button>+</button>
                  </div>
                  <div className="col-3 schedule__content--time">
                    <button>08:30 am</button>
                  </div>
                  <div className="col-3 schedule__content--time">
                    <button>10:30 am</button>
                  </div>
                  <div className="col-3 schedule__content--time">
                    <button>12:00 pm</button>
                  </div>
                  <div className="col-3 schedule__content--time">
                    <button>04:30 pm</button>
                  </div>
                  <div className="col-3 schedule__content--time">
                    <button>07:30 pm</button>
                  </div>
                  <div className="col-3 schedule__content--time">
                    <button>10:30 am</button>
                  </div>
                  <div className="col-3 schedule__content--time">
                    <button>12:00 pm</button>
                  </div>
                </div>
                <div className="schedule__content--button">
                  <button className="btn btn-light text-primary">Reset</button>
                  <button className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>
          <div className="schedule__data">
            <div className="data--schedule">
              <h1>Data Schedule</h1>
            </div>
            <div className="data--dropdown">
              <select>
                <option>Sort</option>
              </select>
              <select>
                <option>Location</option>
              </select>
              <select>
                <option>Movie</option>
              </select>
            </div>
          </div>
          <div className="schedule">
            <div className="schedule__layout">
              <div className="schedule__booking">
                <div className="row">
                  <div className="col-12 col-lg-6 schedule__content--cinema">
                    <img src={ebuid} />
                  </div>
                  <div className="col-12 col-lg-6 schedule__content--adress">
                    <h4>ebv.id</h4>
                    <span>Whatever street No.12, South Purwokerto</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                </div>
              </div>
              <div className="schedule__booking">
                <div className="row">
                  <div className="col-6 schedule__content--cinema">
                    <img src={cineone} />
                  </div>
                  <div className="col-6 schedule__content--adress">
                    <h4>ebv.id</h4>
                    <span>Whatever street No.12, South Purwokerto</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                </div>
              </div>
              <div className="schedule__booking">
                <div className="row">
                  <div className="col-6 schedule__content--cinema">
                    <img src={hiflix} />
                  </div>
                  <div className="col-6 schedule__content--adress">
                    <h4>ebv.id</h4>
                    <span>Whatever street No.12, South Purwokerto</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                  <div className="col schedule__content--date">
                    <button>08:30pm</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pagination">
          <button className="btn btn-primary">1</button>
          <button className="btn btn-primary">2</button>
          <button className="btn btn-primary">3</button>
          <button className="btn btn-primary">4</button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ManageSchedule;
