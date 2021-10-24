import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../../assets/img/Vector.png";
import icon from "../../assets/img/search.svg";
import "./index.css";
import { Navbar, Container, NavDropdown, Nav, Form, Button } from "react-bootstrap";

class Navs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: props.name
    };
  }

  handleLogout = () => {
    // console.log("Logout");
    this.props.history.push("/login");
  };

  render() {
    // console.log(this.props);
    // console.log(this.state);
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#">
              <img src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Payment</Nav.Link>
              <Nav.Link href="#action2">Profile</Nav.Link>
              {/* </Navbar.Collapse> */}
              {/* <NavBar.Collapse> */}
              <Nav className="d-flex justify-content-end w-100 order-md-1">
                <NavDropdown title="Location">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
                <Form className="d-flex">
                  <Nav.Link href="#" className="icon">
                    {" "}
                    <img src={icon} alt="" />
                  </Nav.Link>
                  <Button variant="primary">Sign Up</Button>
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <h1>{this.props.name}</h1> */}
        {/* <Link to="/basic-detail">Detail</Link> | <Link to="basic-home">Home</Link> |{" "}
        <button onClick={this.handleLogout}>Logout</button> */}
      </>
    );
  }
}

export default withRouter(Navs);