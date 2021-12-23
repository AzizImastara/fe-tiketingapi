import React, { Component } from "react";
import "./index.css";
import Navs from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import axios from "../../../utils/axios";
import ebuid from "../../../assets/img/ebuid-mini.png";
import cineone from "../../../assets/img/cineone-mini.png";
import hiflix from "../../../assets/img/hiflix-mini.png";
import blank from "../../../assets/img/blank-profile.png";
import moment from "moment";
import Pagination from "react-paginate";

const dateNow = new Date().toISOString().split("T")[0];
class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: props.match.params.movieId,
      scheduleId: "",
      timeSchedule: "",
      dateSchedule: dateNow,
      totalPayment: "",
      limit: 2,
      page: 1,
      price: 0,
      pageInfo: {},
      premiere: "",
      // ==================
      dataSchedule: [],
      dataDetailMovie: []
    };
  }
  handleChangeDate = (event) => {
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
        const {
          movieId,
          scheduleId,
          dateSchedule,
          timeSchedule,
          totalPayment,
          dataDetailMovie,
          price,
          premiere
        } = this.state;
        this.props.history.push("/Order", {
          dataDetailMovie,
          movieId,
          scheduleId,
          dateSchedule,
          timeSchedule,
          totalPayment,
          price,
          premiere
        });
      }
    );
  };

  handleTimeSchedule = (data, price, premiere) => {
    alert("You Click Time" + data);
    this.setState({
      timeSchedule: data,
      price: price,
      premiere: premiere
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
        // console.log(err.response);
      });
    // console.log(this.state.movieId);
  };

  getSchedule = () => {
    axios
      .get(
        `schedule?page=${this.state.page}&dblimit=10&searchBy=movieId&search=${this.state.movieId}`
      )
      .then((res) => {
        // console.log(res, "res");
        this.setState({
          dataSchedule: res.data.data
        });
      })
      .catch((err) => {
        // console.log(err.response);
      });
  };

  // handlePagination = (event) => {
  //   const selectedPage = event.selected + 1;
  //   this.setState(
  //     {
  //       page: selectedPage
  //     },
  //     () => {
  //       this.getSchedule();
  //     }
  //   );
  // };

  componentDidMount() {
    this.getMovieDetail();
    this.getSchedule();
  }

  render() {
    // const { dataSchedule, pageInfo } = this.state;
    // console.log(this.state.movieId, "sadh");

    // console.log(this.state.dataDetailMovie);
    // console.log(this.state.dataSchedule);
    return (
      <>
        <Navs />
        <div className="container">
          {this.state.dataDetailMovie.length > 0 && (
            <div className="row hero">
              <div className="col-lg-4 hero__left">
                <div className="hero__left--border">
                  <img
                    src={
                      this.state.dataDetailMovie[0].image
                        ? `${process.env.REACT_APP_URL_LOCAL}uploads/movie/${this.state.dataDetailMovie[0].image}`
                        : blank
                    }
                  />
                </div>
              </div>
              <div className="col-lg-8 col-md-12 hero__right">
                <h1>{this.state.dataDetailMovie[0].name}</h1>
                <h2>{this.state.dataDetailMovie[0].category}</h2>
                <div className="row hero__right--flex">
                  <div className=" col-6 hero__right--desc">
                    <p>Release date</p>
                    <h4>
                      {moment(this.state.dataDetailMovie[0].releaseDate).format("dddd MMM YYYY")}
                    </h4>
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
            <div className="dropdown">
              <input type="date" value={this.state.dateSchedule} onChange={this.handleChangeDate} />
            </div>
            {/* <div className="col-6 dropdown">
              <select>
                <option>Location</option>
              </select>
            </div> */}
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
                        <img
                          src={
                            item.premiere === "hiflix"
                              ? hiflix
                              : item.premiere === "ebuid"
                              ? ebuid
                              : cineone
                          }
                          alt="mini"
                        />
                      </div>
                      <div className="col-12 col-lg-6 schedule__movie--adress">
                        <h4>{item.premiere}</h4>
                        <p>{item.location}</p>
                      </div>
                    </div>
                    <div className="row">
                      {item.time.map((time, index) => (
                        <div key={index} className="col schedule__movie--time">
                          <p
                            onClick={() => this.handleTimeSchedule(time, item.price, item.premiere)}
                          >
                            {time}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="row">
                      <div className="col schedule__movie--price">
                        <p>Price</p>
                      </div>
                      <div className="col schedule__movie--price">
                        <h6>Rp.{item.price}/seat</h6>
                      </div>
                    </div>
                    <button className="btn btn-primary" onClick={() => this.handleBooking(item.id)}>
                      Book now
                    </button>
                  </div>
                </>
              ))}
              {/* <Pagination
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={pageInfo.totalPage}
                onPageChange={this.handlePagination}
                containerClassName={"pagination"}
                disabledClassName={"pagination_disabled"}
                activeClassName={"pagination__active"}
              /> */}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default MovieDetail;
