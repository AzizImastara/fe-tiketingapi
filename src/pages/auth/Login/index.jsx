import React, { Component } from "react";
import axios from "../../../utils/axios";
import "./index.css";
import logo from "../../../assets/img/tickitz 1.png";
import gIcon from "../../../assets/img/googleIcon.svg";
import fIcon from "../../../assets/img/facebookIcon.svg";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import { login } from "../../../stores/actions/auth";
import { profile } from "../../../stores/actions/profile";
import { toast, ToastContainer } from "react-toastify";

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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props
      .login(this.state.form)
      .then((res) => {
        localStorage.setItem("token", res.value.data.data.token);
        localStorage.setItem("id", res.value.data.data.id);
        // this.props.history.push("/home");
        toast.success("Success Login !");
        this.props.profile(res.value.data.data.id).then((res) => {
          const role = res.value.data.data[0].roles;
          if (role === "admin") {
            this.props.history.push("/ManageMovie");
          } else {
            this.props.history.push("/Home");
          }
        });
      })
      .catch((err) => {
        console.log(err.response.data.msg, "err");
        // console.log(err.response);
        toast.warn(err.response.data.msg);
      });
  };

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
                <p>Dont have an account? Register</p>
                <Link to="/Register">here</Link>
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

const mapDispatchToProps = {
  login,
  profile
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
