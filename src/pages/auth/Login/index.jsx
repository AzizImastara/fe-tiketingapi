import React, { Component } from "react";
import axios from "../../../utils/axios";
import "./index.css";
import logo from "../../../assets/img/tickitz 1.png";
import gIcon from "../../../assets/img/googleIcon.svg";
import fIcon from "../../../assets/img/facebookIcon.svg";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        email: "",
        password: ""
      },
      isError: false,
      msg: ""
    };
  }

  handleChangeForm = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("auth/login", this.state.form)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("id", res.data.data.id);
        this.handleUserData;
        const decoded = jwt_decode(res.data.data.token);
        if (decoded.roles === "admin") {
          this.props.history.push("/ManageMovie");
        } else {
          this.props.history.push("/Home");
        }
      })
      .catch((err) => {
        this.setState({
          isError: true,
          msg: err.response.data.msg
        });
        setTimeout(() => {
          this.setState({
            isError: false,
            msg: ""
          });
        }, 2000);
      });
  };

  // handleUserData = (event) => {
  //   event.preventDefault();
  //   axios
  //     .get(`user/user/${localStorage.getItem("id")}`)
  //     .then((res) => {
  //       console.log(res);
  //       localStorage.setItem("idUser", JSON.stringify(res.data.data));
  //     })
  //     .catch((err) => {
  //       this.setState({
  //         isError: true,
  //         msg: err.response.data.msg
  //       });
  //     });
  // };

  handleReset = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <>
        <div className="row image">
          <div className="col-lg-7 col-sm-0 d-none d-md-inline-block">
            <div className="image__left">
              <div className="image__left--logo">
                <img src={logo} alt="logo" />
                <h3>wait, watch, wow!</h3>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-sm-12 form__right">
            <div className="form__right--detail">
              <h2>Sign In</h2>
              <span>Sign in with your data that you entered during your registration</span>
              {this.state.isError && <div className="alert alert-danger">{this.state.msg}</div>}
              <form onSubmit={this.handleSubmit} className="form__right--input">
                <p>Email</p>
                <input
                  type="email"
                  placeholder="Write your email"
                  name="email"
                  onChange={this.handleChangeForm}
                />
                <p>Password</p>
                <input
                  type="password"
                  placeholder="Write your password"
                  name="password"
                  onChange={this.handleChangeForm}
                />
                <div className="form__right--button">
                  <button type="submit">Sign In</button>
                </div>
              </form>
              <div className="sign--forgot">
                <p>Forgot your password?</p>
                <Link to="/basic-react">Reset now</Link>
              </div>
              <div className="sign-or">
                <span className="sign-or-line"></span>
                <p>Or</p>
                <span className="sign-or-line"></span>
              </div>
              <div className="icon__button">
                <button className="icon__button--content">
                  <img src={gIcon} alt="googleIcon" />
                  <p>Google</p>
                </button>
                <button className="icon__button--content">
                  <img src={fIcon} alt="facebookIcon" />
                  <p>Facebook</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
