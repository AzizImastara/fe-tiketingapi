import React, { Component } from "react";
import "./index.css";
import Navs from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import axios from "../../../utils/axios";
import ebuid from "../../../assets/img/ebuid-mini.png";
import cineone from "../../../assets/img/cineone-mini.png";
import hiflix from "../../../assets/img/hiflix-mini.png";
import blank from "../../../assets/img/blank-profile.png";

const dateNow = new Date().toISOString().split("T")[0];
class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: props.match.params.movieId,
      scheduleId: 1,
      timeSchedule: "",
      dateSchedule: dateNow,
      totalPayment: 20,
      // ==================
      dataSchedule: [],
      dataDetailMovie: []
    };
  }
  handleChangeDate = (event) => {
    // if (condition jika user memilih tanggal hari sebelumnya) {
    //   console.log("tanggal tidak bisa di akses");
    // }
    this.setState(
      {
        dateSchedule: event.target.value
      },
      () => {
        // proses function get schedule
      }
    );
  };

  handleBooking = (data) => {
    this.setState(
      {
        scheduleId: data
      },
      () => {
        // proses pengecekan apakah time schedule berada di dalam list time schedule
        const { movieId, scheduleId, dateSchedule, timeSchedule, totalPayment } = this.state;
        // console.log(this.state.movieId);
        // console.log(this.state.scheduleId);
        // console.log(this.state.dateSchedule);
        // console.log(this.state.timeSchedule);
        this.props.history.push("/Order", {
          movieId,
          scheduleId,
          dateSchedule,
          timeSchedule,
          totalPayment
        });
      }
    );
  };

  handleTimeSchedule = (data) => {
    // console.log(data);
    alert("You Click Time " + data);
    this.setState({
      timeSchedule: data
    });
  };

  getMovieDetail = () => {
    axios
      .get(`movie/${this.state.movieId}`)
      .then((res) => {
        // console.log(res.data.data);
        this.setState({
          dataDetailMovie: res.data.data
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
    // console.log(this.state.movieId);
  };

  getSchedule = () => {
    axios
      .get("schedule?page=1")
      .then((res) => {
        console.log(res, "res");
        this.setState({
          dataSchedule: res.data.data
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  componentDidMount() {
    this.getMovieDetail();
    this.getSchedule();
  }

  render() {
    // console.log(this.state.dataDetailMovie);
    console.log(this.state.dataSchedule);
    return (
      <>
        <Navs />
        <div className="container">
          {this.state.dataDetailMovie.length > 0 && (
            <div className="row hero">
              <div className="col-4 hero__left">
                <div className="hero__left--border">
                  <img
                    src={`http://localhost:3001/uploads/movie/${this.state.dataDetailMovie[0].image}`}
                  />
                </div>
              </div>
              <div className="col-8 hero__right">
                <h1>{this.state.dataDetailMovie[0].name}</h1>
                <h2>{this.state.dataDetailMovie[0].category}</h2>
                <div className="row hero__right--flex">
                  <div className=" col-6 hero__right--desc">
                    <p>Release date</p>
                    <h4>{this.state.dataDetailMovie[0].releaseDate}</h4>
                    <p>Duration</p>
                    <h4>{this.state.dataDetailMovie[0].duration}</h4>
                  </div>
                  <div className="col-6 hero__right--desc">
                    <p>Directed by</p>
                    <h4>{this.state.dataDetailMovie[0].director}</h4>
                    <p>Cast</p>
                    <h4>{this.state.dataDetailMovie[0].cast}</h4>
                  </div>
                </div>
                <div className="hero__right--synopsis">
                  <h4>Synopsis</h4>
                  <p>{this.state.dataDetailMovie[0].synopsis}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="showtimes">
          <h2>Showtimes and Tickets</h2>
          <form className="row">
            <div className="col-6 dropdown">
              <input type="date" value={this.state.dateSchedule} onChange={this.handleChangeDate} />
            </div>
            <div className="col-6 dropdown">
              <select>
                <option>Purwokerto</option>
                <option>Bogor</option>
                <option>Jakarta</option>
              </select>
            </div>
          </form>
        </div>

        <div className="container">
          <div className="schedule">
            <div className="row schedule__row">
              {this.state.dataSchedule.map((item, index) => (
                <>
                  <div className="col schedule__movie">
                    <div className="row">
                      <div className="col-12 col-lg-6 schedule__movie--cinema">
                        <img src={ebuid} alt="mini" />
                      </div>
                      <div className="col-12 col-lg-6 schedule__movie--adress">
                        <h4>{item.premiere}</h4>
                        <p>{item.location}</p>
                      </div>
                    </div>
                    <div className="row">
                      {item.time.map((item, index) => (
                        <div key={index} className="col schedule__movie--time">
                          <p onClick={() => this.handleTimeSchedule(item)}>{item}</p>
                        </div>
                      ))}

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
                    <button className="btn btn-primary" onClick={() => this.handleBooking(1)}>
                      Book now
                    </button>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default MovieDetail;
