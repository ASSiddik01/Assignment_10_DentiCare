import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {

  const navigate = useNavigate();

  const navigateRegister = (event) => {
    navigate("/register");
  };
  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto">
          <h2 className="text-center my-3">Please Login</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="outline-themeButton" type="submit">
              Login
            </Button>
          </Form>
          <p className="mt-2">
            If you are new?{" "}
            <span onClick={navigateRegister} className="text-primary cursor_pointer">
              Create an account
            </span>{" "}
          </p>
          <p>
            Forget Password?{" "}
            <span className="text-primary cursor_pointer">Reset Password</span>{" "}
          </p>
          <SocialLogin></SocialLogin>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
