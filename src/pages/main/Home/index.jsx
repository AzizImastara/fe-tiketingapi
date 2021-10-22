import React, { Component } from "react";
import "./index.css";
import hero from "../../../assets/img/Group 14.png";

class Home extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row hero">
            <div className="col-6 hero--caption">
              <h2>Nearest Cinema, Newest Movie,</h2>
              <h1>Find out now!</h1>
            </div>
            <div className="col-6 hero--img">
              <img src={hero} alt="hero image" />
            </div>
          </div>
        </div>

        <div className="hero__bg">
          <div className="container">
            <div className="showing">
              <div className="showing__caption">
                <h3>Now Showing</h3>
              </div>
              <div className="showing__caption">
                <p>view all</p>
              </div>
            </div>
            <div className="movie">
              <div className="movie__show">
                {/* <img src="assets/img/Spiderman.png" alt="movie__show" /> */}
                <div className="movie__show--content">
                  <h6>Spider-Man: Homecoming</h6>
                  <p>Action, Adventure, Sci-FI</p>
                  <button className="movie__show--content--btn">Details</button>
                  <button className="movie__show--content--btn">Book now</button>
                </div>
              </div>
              <div className="movie__show">
                {/* <img src="assets/img/Lionking.png" alt="movie__show" /> */}
                <div className="movie__show--content">
                  <h6>Spider-Man: Homecoming</h6>
                  <p>Action, Adventure, Sci-FI</p>
                  <button>Details</button>
                  <button>Book now</button>
                </div>
              </div>
              <div className="movie__show">
                {/* <img src="assets/img/Johnwick.png" alt="movie__show" /> */}
                <div className="movie__show--content">
                  <h6>Spider-Man: Homecoming</h6>
                  <p>Action, Adventure, Sci-FI</p>
                  <button>Details</button>
                  <button>Book now</button>
                </div>
              </div>
              <div className="movie__show">
                {/* <img src="assets/img/Spiderman.png" alt="movie__show" /> */}
                <div className="movie__show--content">
                  <h6>Spider-Man: Homecoming</h6>
                  <p>Action, Adventure, Sci-FI</p>
                  <button>Details</button>
                  <button>Book now</button>
                </div>
              </div>
              <div className="movie__show">
                {/* <img src="assets/img/Lionking.png" alt="movie__show" /> */}
                <div className="movie__show--content">
                  <h6>Spider-Man: Homecoming</h6>
                  <p>Action, Adventure, Sci-FI</p>
                  <button>Details</button>
                  <button>Book now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="upcoming">
            <div className="upcoming__caption">
              <h3>Upcoming Movies</h3>
            </div>
            <div className="upcoming__caption">
              <p>view all</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="upcoming__month text-center">
            <ul>
              <li className="upcoming__month--list">
                <a href="#" className="upcoming__month--link">
                  September
                </a>
              </li>
              <li className="upcoming__month--list">
                <a href="#" className="upcoming__month--link">
                  October
                </a>
              </li>
              <li className="upcoming__month--list">
                <a href="#" className="upcoming__month--link">
                  November
                </a>
              </li>
              <li className="upcoming__month--list">
                <a href="#" className="upcoming__month--link">
                  December
                </a>
              </li>
              <li className="upcoming__month--list">
                <a href="#" className="upcoming__month--link">
                  January
                </a>
              </li>
              <li className="upcoming__month--list">
                <a href="#" className="upcoming__month--link">
                  February
                </a>
              </li>
              <li className="upcoming__month--list">
                <a href="#" className="upcoming__month--link">
                  March
                </a>
              </li>
              <li className="upcoming__month--list">
                <a href="#" className="upcoming__month--link">
                  April
                </a>
              </li>
              <li className="upcoming__month--list">
                <a href="#" className="upcoming__month--link">
                  May
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="movie__upcoming">
            <div className="movie__upcoming--detail">
              {/* <img src="assets/img/Blackwidow.png" alt="movie__upcoming" /> */}
              <h4>Black Widow</h4>
              <p>Action, Adventure, Sci-Fi</p>
              <button>Details</button>
            </div>
            <div className="movie__upcoming--detail">
              {/* <img src="assets/img/Witches.png" alt="movie__upcoming" /> */}
              <h4>The Witches</h4>
              <p>Action, Comedy, Family</p>
              <button>Details</button>
            </div>
            <div className="movie__upcoming--detail">
              {/* <img src="assets/img/Tenet.png" alt="movie__upcoming" /> */}
              <h4>Tenet</h4>
              <p>Action, Sci-Fi</p>
              <button>Details</button>
            </div>
            <div className="movie__upcoming--detail">
              {/* <img src="assets/img/Blackwidow.png" alt="movie__upcoming" /> */}
              <h4>Black Widow</h4>
              <p>Action, Adventure, Sci-Fi</p>
              <button>Details</button>
            </div>
            <div className="movie__upcoming--detail">
              {/* <img src="assets/img/Witches.png" alt="movie__upcoming" /> */}
              <h4>The Witches</h4>
              <p>Action, Comedy, Family</p>
              <button>Details</button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="join text-center">
            <div className="join__desc">
              <h2>Be the vanguard of the</h2>
              <h1>Moviegoers</h1>
            </div>
            <div className="join__input">
              <input type="email" placeholder="Type your email" />
              <button className="btn btn-primary">Join now</button>
            </div>
            <div className="join__caption">
              <p>
                By joining you as a Tickitz member, <br />
                we will always send you the latest updates via email .
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
