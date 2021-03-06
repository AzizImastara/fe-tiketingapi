import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./index.css";

const CardUpdate = ({ name, category, image, handleUpdate, handleDelete }) => {
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
          <Card.Title>{name}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <div className="btn__update">
            <Button variant="light" onClick={handleUpdate}>
              Update
            </Button>
            <Button variant="light" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardUpdate;
