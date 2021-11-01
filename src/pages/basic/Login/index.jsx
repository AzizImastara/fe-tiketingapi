import React, { Component } from "react";
import axios from "../../../utils/axios";
import { Toast } from "react-bootstrap";
import { connect } from "react-redux";
import { login } from "../../../stores/actions/auth";

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
    this.props.login(this.state.form).then((res) => {
      // console.log(this.props.auth)
      localStorage.setItem("token", res.value.data.data.token);
      this.props.history.push("/basic-home");
    });
    // axios
    //   .post("auth/login", this.state.form)
    //   .then((res) => {
    //     // console.log(res.data.data.token);
    //     localStorage.setItem("token", res.data.data.token);
    //     this.props.history.push("/basic-react");
    //   })
    //   .catch((err) => {
    //     // console.log(err.response);
    //     this.setState({
    //       isError: true,
    //       msg: err.response.data.msg
    //     });
    //     setTimeout(() => {
    //       this.setState({
    //         isError: false,
    //         msg: ""
    //       });
    //     }, 2000);
    //   });
  };

  handleReset = (event) => {
    event.preventDefault();
    // console.log("Submit Reset");
  };

  render() {
    // console.log(this.state);
    return (
      <>
        <div className="container text-center">
          <h1>Login</h1>
          <hr />
          {this.state.isError && <div className="alert alert-danger">{this.state.msg}</div>}
          <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
            <input
              type="email"
              placeholder="input email"
              name="email"
              onChange={this.handleChangeForm}
            />
            <br />
            <input
              type="password"
              placeholder="input password"
              name="password"
              onChange={this.handleChangeForm}
            />
            <br />
            <button className="btn btn-outline-primary" type="reset">
              Reset
            </button>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
          <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
            <Toast show={this.state.isError}>
              <Toast.Header closeButton={false}>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>{this.state.msg}</Toast.Body>
            </Toast>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
