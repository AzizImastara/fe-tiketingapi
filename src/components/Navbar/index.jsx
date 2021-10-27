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

// class Navs extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       newName: props.name
//     };
//   }
//   handleLogout = () => {
//     // console.log("Logout");
//     this.props.history.push("/login");
//   };

//   render() {
//     // console.log(this.props);
//     // console.log(this.state);
//     return (
//       <>
//         <Navbar bg="light" expand="lg">
//           <Container>
//             <Navbar.Brand href="#">
//               <img src={logo} alt="logo" />
//             </Navbar.Brand>
//             <Navbar.Toggle />
//             <Navbar.Collapse>
//               <Nav.Link href="#action1">Home</Nav.Link>
//               <Nav.Link href="#action2">Payment</Nav.Link>
//               <Nav.Link href="#action2">Profile</Nav.Link>
//               {/* </Navbar.Collapse> */}
//               {/* <NavBar.Collapse> */}
//               <Nav className="d-flex justify-content-end w-100 order-md-1">
//                 <NavDropdown title="Location">
//                   <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                   <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
//                   <NavDropdown.Divider />
//                   <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
//                 </NavDropdown>
//                 <Form className="d-flex">
//                   <Nav.Link href="#" className="icon">
//                     {" "}
//                     <img src={icon} alt="" />
//                   </Nav.Link>
//                   <Button variant="primary">Sign Up</Button>
//                 </Form>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//         {/* <h1>{this.props.name}</h1> */}
//         {/* <Link to="/basic-detail">Detail</Link> | <Link to="basic-home">Home</Link> |{" "}
//         <button onClick={this.handleLogout}>Logout</button> */}
//       </>
//     );
//   }
// }

// export default withRouter(Navs);
