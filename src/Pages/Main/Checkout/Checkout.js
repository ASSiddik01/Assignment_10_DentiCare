import React from "react";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const handleOrder = (event) => {
    event.preventDefault();
    toast("Thank you for the booking.");
  };

  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto">
          <h2 className="text-center my-3">Give your infromation</h2>
          <Form onSubmit={handleOrder}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Your address</Form.Label>
              <Form.Control type="text" placeholder="Enter address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Phone Number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="I am responsible for this information"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Place Booking
            </Button>
            <ToastContainer />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
