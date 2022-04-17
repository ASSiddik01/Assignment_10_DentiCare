import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto">
          <h2 className="text-center my-3">Please Login</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <p>
            If you are new?{" "}
            <span className="text-primary cursor_pointer">
              Create an account
            </span>{" "}
          </p>
          <p>
            Forget Password?{" "}
            <span className="text-primary cursor_pointer">Reset Password</span>{" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
