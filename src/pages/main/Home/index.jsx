import React, { Component } from "react";
import Navs from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Card from "../../../components/Card";
import Card2 from "../../../components/Card2";
import "./index.css";
import hero from "../../../assets/img/Group 14.png";
import axios from "../../../utils/axios";
import Pagination from "react-paginate";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      dataUpcoming: [],
      page: 1,
      limit: 4,
      pageInfo: {},
      pageInfoUpcoming: {},
      filter: "",
      pageUpcoming: 1,
      limitUpcoming: 4
    };
  }

  componentDidMount() {
    this.getDataMovie();
    this.getDataUpcoming();
  }

  getDataMovie = () => {
    const dateNow = new Date().toISOString().split("-")[1];
    // console.log(dateNow);
    axios
      .get(`movie?page=${this.state.page}&limit=${this.state.limit}&filter=${dateNow}`)
      .then((res) => {
        // console.log(res.data.data);
        this.setState({
          data: res.data.data,
          pageInfo: res.data.pagination
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  getDataUpcoming = () => {
    axios
      .get(
        `movie?page=${this.state.pageUpcoming}&limit=${this.state.limitUpcoming}&filter=${this.state.filter}`
      )
      .then((res) => {
        // console.log(res.data.data);
        this.setState({
          dataUpcoming: res.data.data,
          pageInfoUpcoming: res.data.pagination
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  handlePagination = (event) => {
    const selectedPage = event.selected + 1;
    this.setState(
      {
        page: selectedPage
      },
      () => {
        this.getDataMovie();
      }
    );
  };

  handlePaginationUpcoming = (event) => {
    const selectedPage = event.selected + 1;
    this.setState(
      {
        pageUpcoming: selectedPage
      },
      () => {
        this.getDataUpcoming();
      }
    );
  };

  handleDetail = (data) => {
    this.props.history.push(`/MovieDetail/${data}`);
  };

  render() {
    const { data, pageInfo, pageInfoUpcoming } = this.state;
    return (
      <>
        <Navs />
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
              <div className="showing__caption">{/* <p>view all</p> */}</div>
            </div>
            <div className="movie">
              <div className="card__item">
                {this.state.data &&
                  this.state.data.map((item) => (
                    <div className="card__item--detail" key={item.id}>
                      <Card data={item} handleDetail={this.handleDetail} />
                    </div>
                  ))}
              </div>
              <Pagination
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={pageInfo.totalPage}
                onPageChange={this.handlePagination}
                containerClassName={"pagination"}
                disabledClassName={"pagination_disabled"}
                activeClassName={"pagination__active"}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="upcoming">
            <div className="upcoming__caption">
              <h3>Upcoming Movies</h3>
            </div>
            <div className="upcoming__caption">{/* <p>view all</p> */}</div>
          </div>
        </div>

        <div className="container">
          <div className="upcoming__month text-center">
            <ul>
              <li className="upcoming__month--list">
                <a
                  onClick={() => {
                    this.setState(
                      {
                        filter: "9"
                      },
                      () => {
                        this.getDataUpcoming();
                      }
                    );
                  }}
                  className="upcoming__month--link"
                >
                  September
                </a>
              </li>
              <li className="upcoming__month--list">
                <a
                  onClick={() => {
                    this.setState(
                      {
                        filter: "10"
                      },
                      () => {
                        this.getDataUpcoming();
                      }
                    );
                  }}
                  className="upcoming__month--link"
                >
                  October
                </a>
              </li>
              <li className="upcoming__month--list">
                <a
                  onClick={() => {
                    this.setState(
                      {
                        filter: "11"
                      },
                      () => {
                        this.getDataUpcoming();
                      }
                    );
                  }}
                  className="upcoming__month--link"
                >
                  November
                </a>
              </li>
              <li className="upcoming__month--list">
                <a
                  onClick={() => {
                    this.setState(
                      {
                        filter: "12"
                      },
                      () => {
                        this.getDataUpcoming();
                      }
                    );
                  }}
                  className="upcoming__month--link"
                >
                  December
                </a>
              </li>
              <li className="upcoming__month--list">
                <a
                  onClick={() => {
                    this.setState(
                      {
                        filter: "1"
                      },
                      () => {
                        this.getDataUpcoming();
                      }
                    );
                  }}
                  className="upcoming__month--link"
                >
                  January
                </a>
              </li>
              <li className="upcoming__month--list">
                <a
                  onClick={() => {
                    this.setState(
                      {
                        filter: "2"
                      },
                      () => {
                        this.getDataUpcoming();
                      }
                    );
                  }}
                  className="upcoming__month--link"
                >
                  February
                </a>
              </li>
              <li className="upcoming__month--list">
                <a
                  onClick={() => {
                    this.setState(
                      {
                        filter: "3"
                      },
                      () => {
                        this.getDataUpcoming();
                      }
                    );
                  }}
                  className="upcoming__month--link"
                >
                  March
                </a>
              </li>
              <li className="upcoming__month--list">
                <a
                  onClick={() => {
                    this.setState(
                      {
                        filter: "4"
                      },
                      () => {
                        this.getDataUpcoming();
                      }
                    );
                  }}
                  className="upcoming__month--link"
                >
                  April
                </a>
              </li>
              <li className="upcoming__month--list">
                <a
                  onClick={() => {
                    this.setState(
                      {
                        filter: "5"
                      },
                      () => {
                        this.getDataUpcoming();
                      }
                    );
                  }}
                  className="upcoming__month--link"
                >
                  May
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="movie__upcoming">
            <div className="card__item">
              {this.state.dataUpcoming &&
                this.state.dataUpcoming.map((item) => (
                  <div className="card__item--detail" key={item.id}>
                    <Card2 data={item} handleDetail={this.handleDetail} />
                  </div>
                ))}
            </div>
            <Pagination
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={pageInfoUpcoming.totalPage}
              onPageChange={this.handlePaginationUpcoming}
              containerClassName={"pagination"}
              disabledClassName={"pagination_disabled"}
              activeClassName={"pagination__active"}
            />
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
        <Footer />
      </>
    );
  }
}

export default Home;
