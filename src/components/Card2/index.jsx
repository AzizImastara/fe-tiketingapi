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
        <Card className="card__img--size">
          <Card.Img
            variant="top"
            src={
              image
                ? `${process.env.REACT_APP_URL_LOCAL}uploads/movie/${image}`
                : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
            }
          />
          <Card.Body>
            <h2>{name}</h2>
            <h6>{category}</h6>
            <div className="btn__designer">
              <Button onClick={() => this.props.handleDetail(id)}>Details</Button>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default CardMovie2;
