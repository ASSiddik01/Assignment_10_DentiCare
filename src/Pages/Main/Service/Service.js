import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import './Service.css'

const Service = ({ service }) => {
  const { name, price, img, description } = service;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name} </Card.Title>
          <p>
            <b>
              Fee: <span className="theme_color">${price} </span>
            </b>
          </p>
          <Card.Text title={description} className="text_justify">
            {description.length > 20
              ? description.slice(0, 150) + "..."
              : description}
          </Card.Text>
          <Button variant="outline-themeButton">Checkout Now</Button>{' '}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
