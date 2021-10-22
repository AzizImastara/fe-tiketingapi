import React, { Component } from "react";
import "./index.css";

class MovieDetail extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row hero">
            <div className="col-4 hero__left">
              <div className="hero__left--border">
                <img src="assets/img/Spiderman.png" alt="spiderman" />
              </div>
            </div>
            <div className="col-8 hero__right">
              <h1>Spider-Man: Homecoming</h1>
              <h2>Adventure, Action, Sci-Fi</h2>
              <div className="row hero__right--flex">
                <div className=" col-6 hero__right--desc">
                  <p>Release date</p>
                  <h4>June 28, 2017</h4>
                  <p>Duration</p>
                  <h4>2 hours 13 minutes</h4>
                </div>
                <div className="col-6 hero__right--desc">
                  <p>Directed by</p>
                  <h4>Jon Watss</h4>
                  <p>Cast</p>
                  <h4>Tom Holland, Michael Keaton, Robert Downey Jr., ...</h4>
                </div>
              </div>
              <div className="hero__right--synopsis">
                <h4>Synopsis</h4>
                <p>
                  Thrilled by his experience with the Avengers, Peter returns home, where he lives
                  with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter
                  tries to fall back into his normal daily routine - distracted by thoughts of
                  proving himself to be more than just your friendly neighborhood Spider-Man - but
                  when the Vulture emerges as a new villain, everything that Peter holds most
                  important will be threatened.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="schedule">
            <div className="row schedule__row">
              <div className="col schedule__movie">
                <div className="row">
                  <div className="col-12 col-lg-6 schedule__movie--cinema">
                    <img src="assets/img/ebuid-mini.png" alt="mini" />
                  </div>
                  <div className="col-12 col-lg-6 schedule__movie--adress">
                    <h4>ebv.id</h4>
                    <p>Whatever street No.12, South Purwokerto</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col schedule__movie--time">
                    <p>08:30am</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>10:30pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>12:00pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>02:00pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>04:30pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>07:00pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>08:30pm</p>
                  </div>
                  <div className="col schedule__movie--time"></div>
                </div>
                <div className="row">
                  <div className="col schedule__movie--price">
                    <p>Price</p>
                  </div>
                  <div className="col schedule__movie--price">
                    <h6>$10.00/seat</h6>
                  </div>
                </div>
                <button className="btn btn-primary">Book now</button>
              </div>
              <div className="col schedule__movie">
                <div className="row">
                  <div className="col-12 col-lg-6 schedule__movie--cinema">
                    <img src="assets/img/cineone-mini.png" alt="mini" />
                  </div>
                  <div className="col-12 col-lg-6 schedule__movie--adress">
                    <h4>CineOne21</h4>
                    <p>Downcare street No. 21, East Purwokerto</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col schedule__movie--time">
                    <p>08:30am</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>10:30pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>12:00pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>02:00pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>04:30pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>07:00pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>08:30pm</p>
                  </div>
                  <div className="col schedule__movie--time"></div>
                </div>
                <div className="row">
                  <div className="col schedule__movie--price">
                    <p>Price</p>
                  </div>
                  <div className="col schedule__movie--price">
                    <h6>$10.00/seat</h6>
                  </div>
                </div>
                <button className="btn btn-primary">Book now</button>
              </div>
              <div className="col schedule__movie">
                <div className="row">
                  <div className="col-12 col-lg-6 schedule__movie--cinema">
                    <img src="assets/img/hiflix-mini.png" alt="mini" />
                  </div>
                  <div className="col-12 col-lg-6 schedule__movie--adress">
                    <h4>hiflix Cinema</h4>
                    <p>Colonel street No. 2, East Purwokerto</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col schedule__movie--time">
                    <p>08:30am</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>10:30pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>12:00pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>02:00pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>04:30pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>07:00pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>08:30pm</p>
                  </div>
                  <div className="col schedule__movie--time"></div>
                </div>
                <div className="row">
                  <div className="col schedule__movie--price">
                    <p>Price</p>
                  </div>
                  <div className="col schedule__movie--price">
                    <h6>$10.00/seat</h6>
                  </div>
                </div>
                <button className="btn btn-primary">Book now</button>
              </div>
            </div>
          </div>
          <div className="schedule">
            <div className="row schedule__row">
              <div className="col schedule__movie">
                <div className="row">
                  <div className="col-12 col-lg-6 schedule__movie--cinema">
                    <img src="assets/img/ebuid-mini.png" alt="mini" />
                  </div>
                  <div className="col-12 col-lg-6 schedule__movie--adress">
                    <h4>ebv.id</h4>
                    <p>Whatever street No.12, South Purwokerto</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col schedule__movie--time">
                    <p>08:30am</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>10:30pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>12:00pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>02:00pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>04:30pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>07:00pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>08:30pm</p>
                  </div>
                  <div className="col schedule__movie--time"></div>
                </div>
                <div className="row">
                  <div className="col schedule__movie--price">
                    <p>Price</p>
                  </div>
                  <div className="col schedule__movie--price">
                    <h6>$10.00/seat</h6>
                  </div>
                </div>
                <button className="btn btn-primary">Book now</button>
              </div>
              <div className="col schedule__movie">
                <div className="row">
                  <div className="col-12 col-lg-6 schedule__movie--cinema">
                    <img src="assets/img/cineone-mini.png" alt="mini" />
                  </div>
                  <div className="col-12 col-lg-6 schedule__movie--adress">
                    <h4>CineOne21</h4>
                    <p>Downcare street No. 21, East Purwokerto</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col schedule__movie--time">
                    <p>08:30am</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>10:30pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>12:00pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>02:00pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>04:30pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>07:00pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>08:30pm</p>
                  </div>
                  <div className="col schedule__movie--time"></div>
                </div>
                <div className="row">
                  <div className="col schedule__movie--price">
                    <p>Price</p>
                  </div>
                  <div className="col schedule__movie--price">
                    <h6>$10.00/seat</h6>
                  </div>
                </div>
                <button className="btn btn-primary">Book now</button>
              </div>
              <div className="col schedule__movie">
                <div className="row">
                  <div className="col-12 col-lg-6 schedule__movie--cinema">
                    <img src="assets/img/hiflix-mini.png" alt="mini" />
                  </div>
                  <div className="col-12 col-lg-6 schedule__movie--adress">
                    <h4>hiflix Cinema</h4>
                    <p>Colonel street No. 2, East Purwokerto</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col schedule__movie--time">
                    <p>08:30am</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>10:30pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>12:00pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>02:00pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>04:30pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>07:00pm</p>
                  </div>
                  <div className="col schedule__movie--time">
                    <p>08:30pm</p>
                  </div>
                  <div className="col schedule__movie--time"></div>
                </div>
                <div className="row">
                  <div className="col schedule__movie--price">
                    <p>Price</p>
                  </div>
                  <div className="col schedule__movie--price">
                    <h6>$10.00/seat</h6>
                  </div>
                </div>
                <button className="btn btn-primary">Book now</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MovieDetail;
