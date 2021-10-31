import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./index.css";
import Navs from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Pagination from "react-paginate";
import gambar from "../../../assets/img/Spiderman.png";

const ManageMovie = () => {
  let history = useHistory();

  return (
    <>
      <Navs />
      <div className="profile__bg">
        <div className="container">
          <div className="profile__header">
            <h1>Form Movie</h1>
          </div>
          <div className="profile">
            <div className="row">
              <div className="col-2">
                <div className="profile__border">
                  <img src={gambar} />
                </div>
              </div>
              <div className="col-5">
                <div className="profile__content--desc">
                  <span>Movie Name</span>
                </div>
                <div className="profile__content--input">
                  <input type="text" placeholder="Spiderman Homecoming" />
                </div>
                <div className="profile__content--desc">
                  <span>Director</span>
                </div>
                <div className="profile__content--input">
                  <input type="text" placeholder="Jon watch" />
                </div>
                <div className="profile__content--desc">
                  <span>Release date</span>
                </div>
                <div className="profile__content--input">
                  <input type="text" placeholder="07/05/2020" />
                </div>
              </div>
              <div className="col-5">
                <div className="profile__content--desc">
                  <span>Category</span>
                </div>
                <div className="profile__content--input">
                  <input type="text" placeholder="Action, Adventure, Sci-Fi" />
                </div>
                <div className="profile__content--desc">
                  <span>Director</span>
                </div>
                <div className="profile__content--input">
                  <input type="text" placeholder="Jon watch" />
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="profile__content--desc">
                      <span>Duration Hour</span>
                    </div>
                    <div className="profile__content--input">
                      <input type="text" placeholder="2" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="profile__content--desc">
                      <span>Duration Minute</span>
                    </div>
                    <div className="profile__content--input">
                      <input type="text" placeholder="13" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile__content--synopsis">
              <span>Synopsis</span>
              <textarea
                name="synopsis"
                cols="100"
                rows="1"
                placeholder="Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, | "
              ></textarea>
            </div>
            <div className="profile__content--button">
              <button className="btn btn-light text-primary">Reset</button>
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
          <div className="profile__header">
            <h1>Data Movie</h1>
          </div>
          <div className="profile">
            <div className="row profile__movie">
              <div className="col-3 profile__movie detail">
                <img src={gambar} />
              </div>
              <div className="col-3 profile__movie detail">
                <img src={gambar} />
              </div>
              <div className="col-3 profile__movie detail">
                <img src={gambar} />
              </div>
              <div className="col-3 profile__movie detail">
                <img src={gambar} />
              </div>
            </div>
            <div className="row profile__movie">
              <div className="col-3 profile__movie detail">
                <img src={gambar} />
              </div>
              <div className="col-3 profile__movie detail">
                <img src={gambar} />
              </div>
              <div className="col-3 profile__movie detail">
                <img src={gambar} />
              </div>
              <div className="col-3 profile__movie detail">
                <img src={gambar} />
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
      </div>

      <Footer />
    </>
  );
};
export default ManageMovie;
