import React, { Component, useState, useEffect } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import logo from "../../assets/img/Vector.png";
import icon from "../../assets/img/search.svg";
import "./index.css";
import { Navbar, Container, NavDropdown, Nav, Form, Button } from "react-bootstrap";
import jwt_decode from "jwt-decode";
import blankProfile from "../../assets/img/blank-profile.png";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../../stores/actions/profile";

const Navs = () => {
  let history = useHistory();

  // const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     const decoded = jwt_decode(token);
  //     setUserData(decoded);
  //   }
  // }, []);

  const user = useSelector((state) => state.auth);
  const profileUser = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profile(user.idUser));
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    alert("Thanks You");
  };

  const handleRouteSwitch = () => {
    history.push("/Login");
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            {profileUser.data.roles === "admin" ? (
              <div className="nav--link">
                <Link to="/ManageMovie">ManageMovie</Link>
              </div>
            ) : (
              <div className="nav--link">
                <Link to="/Home">Home</Link>
              </div>
            )}

            {profileUser.data.roles === "admin" ? (
              <div className="nav--link">
                <Link to="/ManageSchedule">ManageSchedule</Link>
              </div>
            ) : (
              <div className="nav--link">
                <Link to="/User">Profile</Link>
              </div>
            )}

            <Nav className="d-flex justify-content-end w-100 align-items-center">
              <div className="nav--logout">
                <Link to="/Login" onClick={logOut}>
                  Logout
                </Link>
              </div>
              <Form className="d-flex">
                {/* <Nav.Link href="#" className="icon">
                  <img src={icon} alt="" />
                </Nav.Link> */}
                {/* <img
                  className="profile__picture"
                  src={
                    profileUser.data.image
                      ? `${process.env.REACT_APP_URL_LOCAL}uploads/user/${profileUser.data.image}`
                      : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                  }
                /> */}
                {profileUser.data.image ? (
                  <img
                    className="profile__picture"
                    src={
                      profileUser.data.image
                        ? `${process.env.REACT_APP_URL_LOCAL}uploads/user/${profileUser.data.image}`
                        : blankProfile
                    }
                  />
                ) : (
                  <Button onClick={handleRouteSwitch} variant="primary">
                    Sign Up
                  </Button>
                )}
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navs;
