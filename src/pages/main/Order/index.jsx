import React, { Component } from "react";
import "./index.css";
import Seat from "../../../components/Seat";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSeat: ["A", "B", "C"],
      selectedSeat: [],
      reservedSeat: ["A1", "C7"],
      movieId: props.location.state ? props.location.state.movieId : "",
      scheduleId: props.location.state ? props.location.state.scheduleId : "",
      timeSchedule: props.location.state ? props.location.state.timeSchedule : "",
      dateSchedule: props.location.state ? props.location.state.dateSchedule : ""
    };
  }
  componentDidMount() {
    console.log(this.state);
    this.checkingData();
  }

  checkingData = () => {
    const { movieId, scheduleId, timeSchedule, dateSchedule } = this.state;
    if (!movieId || !scheduleId || !timeSchedule || !dateSchedule) {
      alert("Select Movie !");
      this.props.history.push("/Home");
    }
  };
  selectedSeat = (data) => {
    // console.log("user select seat");
    // console.log(data);
    if (this.state.selectedSeat.includes(data)) {
      const deleteSeat = this.state.selectedSeat.filter((el) => {
        return el !== data;
      });
      this.setState({
        selectedSeat: deleteSeat
      });
    } else {
      this.setState({
        selectedSeat: [...this.state.selectedSeat, data]
      });
    }
  };

  handleBooking = () => {
    if (this.state.selectedSeat.length < 1) {
      alert("Please Select Seat !");
    } else {
      const { movieId, scheduleId, dateSchedule, timeSchedule, selectedSeat } = this.state;
      const setData = {
        movieId,
        scheduleId,
        dateSchedule,
        timeSchedule,
        seat: selectedSeat
      };
      this.props.history.push("/Payment", setData);
    }
  };

  handleResetBooking = () => {
    this.setState({
      selectedSeat: []
    });
  };
  render() {
    return (
      <>
        <div className="detail__bg">
          <div className="container">
            <div className="row detail">
              <div className="col-lg-7 col-sm-6 moviee">
                <h4 className="movie__none">Movie Selected</h4>
                <div className="movie__selected">
                  <h5>Spider-Man: Homecoming</h5>
                  <button>Change movie</button>
                </div>
                <div className="movie__seat">
                  <h4>Choose Your Seat</h4>
                </div>
                <div className="seat">
                  {" "}
                  {this.state.listSeat.map((item, index) => (
                    <div key={index}>
                      <Seat
                        seatAlphabhet={item}
                        selectedSeat={this.selectedSeat}
                        reserved={this.state.reservedSeat}
                        selected={this.state.selectedSeat}
                      />
                    </div>
                  ))}
                </div>
                <div className="seat__button">
                  <button className="btn btn-light" onClick={this.handleResetBooking}>
                    Reset Seat
                  </button>
                  <button className="btn btn-primary" onClick={this.handleBooking}>
                    Checkout now
                  </button>
                </div>
              </div>
              <div className="col-lg-5 col-sm-6 order">
                <h4>Order Info</h4>
                <div className="order__background">
                  <div className="order__header">
                    <img src="assets/img/cineone-mini.png" alt="cineone-mini" />
                    <h5>CineOne21 Cinema</h5>
                  </div>
                  <div className="order__detail--title">
                    <p>Spider-Man: Homecoming</p>
                  </div>
                  <div className="row order__detail">
                    <div className="col order__detail--info">
                      <p>Movie selected</p>
                      <p>Tuesday, 07 July 2020</p>
                      <p>One ticket price</p>
                      <p>Seat choosed</p>
                    </div>
                    <div className="col order__detail--desc">
                      <p>Spider-Man: Homecoming</p>
                      <p>02:00pm</p>
                      <p>$10</p>
                      <p>C4, C5, C6</p>
                    </div>
                  </div>
                  <div className="row order__payment">
                    <div className="col order__payment--total">
                      <p>Total Payment</p>
                    </div>
                    <div className="col order__payment--price">
                      <p>$30</p>
                    </div>
                  </div>
                </div>
                <div className="seat__button--mobile">
                  <button className="btn btn-primary">Checkout now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Order;
