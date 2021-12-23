import React, { Component } from "react";
import Navs from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import "./index.css";
import gpay from "../../../assets/img/GoogleePay.png";
import visa from "../../../assets/img/Visa.png";
import gopay from "../../../assets/img/GoPayy.png";
import paypal from "../../../assets/img/Paypal.png";
import dana from "../../../assets/img/Dana.png";
import bca from "../../../assets/img/BCA.png";
import bri from "../../../assets/img/BRI.png";
import ovo from "../../../assets/img/OVO.png";
import { BsExclamationTriangleFill } from "react-icons/bs";
import moment from "moment";
import axios from "../../../utils/axios";
import { toast, ToastContainer } from "react-toastify";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSeat: this.props.location.state ? this.props.location.state.setData.seat : [],
      reservedSeat: [],
      movieId: this.props.location.state ? this.props.location.state.setData.movieId : "",
      scheduleId: this.props.location.state ? this.props.location.state.setData.scheduleId : "",
      timeSchedule: this.props.location.state ? this.props.location.state.setData.timeSchedule : "",
      dateSchedule: this.props.location.state ? this.props.location.state.setData.dateSchedule : "",
      dataDetailMovie: this.props.location.state ? this.props.location.state.dataDetailMovie : [],
      price: this.props.location.state ? this.props.location.state.price : "",
      premiere: this.props.location.state ? this.props.location.state.cinemaName : "",
      userData: {},
      paymentChoose: ""
    };
  }

  handleUserData = () => {
    axios
      .get(`user/user/${localStorage.getItem("id")}`)
      .then((res) => {
        this.setState({
          userData: res.data.data[0]
        });
      })
      .catch((err) => {
        this.setState({
          isError: true,
          msg: err.response.data.msg
        });
      });
  };

  setDB = () => {
    // alert("sjkadhsah");
    const booking = {
      userId: this.state.userData?.id,
      scheduleId: this.state.scheduleId,
      movieId: this.state.movieId,
      dateBooking: this.state.dateSchedule,
      timeBooking: this.state.timeSchedule,
      totalPayment: this.state.price,
      paymentMethod: this.state.paymentMethod,
      statusPayment: "success",
      seat: this.state.selectedSeat
    };
    axios
      .post("booking", booking)
      .then((res) => {
        console.log(res, "resssjhasjfhj");
        toast.success("Success Booking Movie");
      })
      .catch((err) => {
        toast.error(err.response.data.msg);
      });
    console.log(booking, "sb");
  };

  componentDidMount() {
    // console.log(this.props.location.state, "sadgh");
    // this.setDB();
    this.handleUserData();
  }

  payment = (paymentMethod) => {
    // console.log(paymentMethod);
    this.setState(
      {
        paymentMethod,
        paymentChoose: paymentMethod
      },
      () => console.log(this.state)
    );
  };

  render() {
    console.log(this.state.paymentChoose);
    // console.log(this.state.userData.id, "user");
    return (
      <>
        <Navs />
        <div className="payment__bg">
          <div className="container payment__page">
            <div className="payment__info">
              <h1>Payment Info</h1>
              <div className="payment__info--component">
                <div className="payment__info--component--desc">
                  <p>Date & Time</p>
                  <p>{moment(this.state.dateSchedule).format("dddd MMM YYYY")}</p>
                </div>
                <div className="payment__info--component--desc">
                  <p>Movie title</p>
                  <p>{this.props.location.state.movieName[0].name}</p>
                </div>
                <div className="payment__info--component--desc">
                  <p>Cinema name</p>
                  <p>{this.props.location.state.cinemaName}</p>
                </div>
                <div className="payment__info--component--desc">
                  <p>Number of tickets</p>
                  <p>{this.props.location.state.tiket}</p>
                </div>
                <div className="payment__info--component--desc">
                  <p>Total Payment</p>
                  <p>{this.props.location.state.price}</p>
                </div>
              </div>
              <h1>Choose a Payment Method</h1>
              <div className="payment__info--choose--container">
                <div className="payment__info--choose">
                  <button
                    className={`${this.state.paymentChoose === "gpay" ? "payment__choose" : null}`}
                    onClick={() => this.payment("gpay")}
                  >
                    <img src={gpay} />
                  </button>
                  <button
                    className={`${this.state.paymentChoose === "visa" ? "payment__choose" : null}`}
                    onClick={() => this.payment("visa")}
                  >
                    <img src={visa} />
                  </button>
                  <button
                    className={`${this.state.paymentChoose === "gopay" ? "payment__choose" : null}`}
                    onClick={() => this.payment("gopay")}
                  >
                    <img src={gopay} />
                  </button>
                  <button
                    className={`${
                      this.state.paymentChoose === "paypal" ? "payment__choose" : null
                    }`}
                    onClick={() => this.payment("paypal")}
                  >
                    <img src={paypal} />
                  </button>
                  <button
                    className={`${this.state.paymentChoose === "dana" ? "payment__choose" : null}`}
                    onClick={() => this.payment("dana")}
                  >
                    <img src={dana} />
                  </button>
                  <button
                    className={`${this.state.paymentChoose === "bca" ? "payment__choose" : null}`}
                    onClick={() => this.payment("bca")}
                  >
                    <img src={bca} />
                  </button>
                  <button
                    className={`${this.state.paymentChoose === "bri" ? "payment__choose" : null}`}
                    onClick={() => this.payment("bri")}
                  >
                    <img src={bri} />
                  </button>
                  <button
                    className={`${this.state.paymentChoose === "ovo" ? "payment__choose" : null}`}
                    onClick={() => this.payment("ovo")}
                  >
                    <img src={ovo} />
                  </button>
                </div>
                <div className="sign-or">
                  <span className="sign-or-line"></span>
                  <p>Or</p>
                  <span className="sign-or-line"></span>
                </div>
                <div className="sign--forgot">
                  <p>Pay via cash.</p>
                  <p>See how it work</p>
                </div>
              </div>
              <div className="payment__button">
                <button onClick={() => this.setDB()}>Pay your order</button>
              </div>
            </div>
            <div className="personal__info">
              <h1>Personal Info</h1>
              <div className="personal__info--component">
                <p>Full Name</p>
                <input
                  type="text"
                  value={this.state.userData.firstName + this.state.userData.lastName}
                />
                <p>Email</p>
                <input type="text" value={this.state.userData.email} />
                <p>Phone Number</p>
                <input type="number" value={this.state.userData.phoneNumber} />
                <div className="personal__error">
                  <BsExclamationTriangleFill />
                  <p>Fill your data correctly.</p>
                </div>
              </div>
              <div className="payment__button--mobile">
                <button onClick={() => this.setDB()} className="btn btn-primary">
                  Pay your order
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Payment;
