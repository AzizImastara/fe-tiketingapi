import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./index.css";

class CardMovie2 extends Component {
  handleSetUpdate = () => {
    this.props.handleUpdate(1);
  };
  render() {
    const { id, name, category, image } = this.props.data;
    return (
      <>
        <Card style={{ width: "10rem" }}>
          <Card.Img
            variant="top"
            src={
              image
                ? `http://localhost:3001/uploads/movie/${image}`
                : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
            }
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{category}</Card.Text>
            <div className="btn__designer">
              <Button variant="light" onClick={() => this.props.handleDetail(id)}>
                Details
              </Button>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default CardMovie2;
