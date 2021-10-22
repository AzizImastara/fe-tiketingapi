import React, { Component } from "react";
import Navbar from "../../../components/Navbar";
import styles from "./BasicReact.module.css";
import { Button, Modal } from "react-bootstrap";
import CardMovie from "../../../components/Card";

class BasicReact extends Component {
  constructor() {
    super();
    // console.log("CONSTRUCTOR IS RUNNING !");
    this.state = {
      name: "Aziz Imastara",
      data: []
    };
  }

  componentDidMount() {
    // console.log("COMPONENT DID MONTH IS RUNNING !");
    this.setState({
      data: [
        {
          movieId: 1234,
          movieName: "Spiderman"
        },
        {
          movieId: 6789,
          movieName: "Batman"
        }
      ]
    });
  }

  componentDidUpdate() {
    // console.log("COMPONENT DID UPDATE IS RUNNING!");
  }

  componentWillUnmount() {
    // console.log("COMPONENT WILLUNMONTH IS RUNNING !");
  }

  handleClick = () => {
    console.log("click !");
  };
  handleClick2 = (data) => {
    console.log("click with data " + data);
  };

  changeText = (event) => {
    console.log(event.target.value);
    console.log(event);
    this.setState({
      search: event.target.value
    });
  };
  handleSearch = (event) => {
    if (event.key === "Enter") {
      console.log("User Press Enter !");
      this.setState({
        search: event.target.value
      });
      this.props.history.push(`/basic-react?search=${event.target.value}`);
    }
  };

  handleShow = () => {
    this.setState({
      show: true
    });
  };

  handleClose = () => {
    this.setState({
      show: false
    });
  };

  handleUpdateMovie = (data) => {
    console.log("Movie Is Update", data);
  };

  render() {
    // console.log("RENDER JSX IS RUNNING !");
    return (
      <>
        <h1>Basic React Page!</h1>
        <Navbar name="Ohto Yaeger" />
        <h1>{this.state.name}</h1>
        {this.state.data.map((item, index) => (
          <div key={item.movieId}>
            <h2>{item.movieName}</h2>
          </div>
        ))}
        {/* EVENT */}
        <button onClick={this.handleClick}>Click Me 1</button>
        <button onClick={() => this.handleClick2(1)}>Click Me 2</button>

        <hr />
        <input
          type="text"
          placeholder="Search..."
          name="search"
          onChange={(event) => this.changeText(event)}
        />
        <h5>Your keyword seacrh is {this.state.search}</h5>
        {/* SHORT LOGIC */}
        <input type="text" placeholder="Search..." name="search" onKeyPress={this.handleSearch} />
        {this.state.search && <h5>Your keyword seacrh is {this.state.search}</h5>}
        {/* onChange = akan bekerja setiap user memasukan nilai ke dalam form input */}
        {/* onKeyPress = sama seperti onChange tetapi bisa diberikan tambahan kondisi ketika dijalankan */}
        <hr />
        {/* TERNARY */}
        {this.state.data.length > 0 ? (
          this.state.data.map((item, index) => (
            <div key={item.movieId}>
              <h2>{item.movieName}</h2>
            </div>
          ))
        ) : (
          <h5>Data Not Found !</h5>
        )}
        <hr />
        {/* STYLE IN REACT */}
        <h1 className={styles.headerTitle}>Hello World</h1>
        {/* BOOTSTRAP */}
        <button className="btn btn-primary">Primary</button>
        <Button variant="danger">Primary</Button>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <hr />
        {/* COMPONENT COMUNICATION */}
        {/* <CardMovie handleUpdate={this.handleUpdateMovie} /> */}
      </>
    );
  }
}

export default BasicReact;
