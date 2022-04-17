import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import appoinment from "../../../images/appoinment.jpg";

const Appionment = () => {
  return (
    <Container className="my-5 pt-5">
      <Row className="align-items-center">
        <Col sm={12} md={5}>
          <img className="img-fluid" src={appoinment} alt="" />
        </Col>
        <Col sm={12} md={7}>
          <Form>
            <div>
              <h1 className="mt-3">Get Your Appointment</h1>
              <p>
                Let us know your problem, make an appointment and receive the
                best advice from specialists in the field.
              </p>
            </div>
            <Row>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Your name" />
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3" controlId="formBasicProblem">
                  <Form.Label>Your problem</Form.Label>
                  <Form.Control type="text" placeholder="Your problem" />
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group className="mb-3" controlId="formBasicDate">
                  <Form.Label>Select date</Form.Label>
                  <Form.Control type="date" placeholder="Pick a date" />
                </Form.Group>
              </Col>
            </Row>
            <Button
              className="d-block mx-auto"
              variant="outline-themeButton"
              type="submit"
            >
              Book Appoinment Now
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Appionment;
