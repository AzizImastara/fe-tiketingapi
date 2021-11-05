import React, { Component, useState, useEffect } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import logo from "../../assets/img/Vector.png";
import icon from "../../assets/img/search.svg";
import "./index.css";
import { Navbar, Container, NavDropdown, Nav, Form, Button } from "react-bootstrap";
import jwt_decode from "jwt-decode";
import blankProfile from "../../assets/img/blank-profile.png";

const Navs = () => {
  let history = useHistory();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);
      setUserData(decoded);
    }
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
          <Navbar.Brand href="#">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Payment">Payment</Nav.Link>
            <Nav.Link href="#action2">Profile</Nav.Link>
            <Nav className="d-flex justify-content-end w-100 order-md-1">
              <NavDropdown title="Location">
                <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
              <Form className="d-flex">
                <Nav.Link href="#" className="icon">
                  {" "}
                  <img src={icon} alt="" />
                </Nav.Link>
                {userData ? (
                  <img
                    className="profile__picture"
                    src={
                      userData.image
                        ? `http://localhost:3001/uploads/user/${userData.image}`
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
