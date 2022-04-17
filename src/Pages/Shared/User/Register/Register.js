import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const navigateLogin = (event) => {
    navigate("/login");
  };
  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto">
          <h2 className="text-center my-3">Please Register</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control name="name" type="email" placeholder="Enter name" />
            </Form.Group>
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                className={agree ? "text-primary" : "theme_color"}
                onClick={() => setAgree(!agree)}
                type="checkbox"
                label="Agree to our terms &amp; condition"
              />
            </Form.Group>
            <Button
              disabled={!agree}
              variant={agree ? "outline-primary" : "outline-themeButton"}
              type="submit"
            >
              Register
            </Button>
          </Form>
          <p className="mt-2">
            Already have an account{" "}
            <span
              onClick={navigateLogin}
              className="text-primary cursor_pointer"
            >
              Please login
            </span>{" "}
          </p>
          <SocialLogin></SocialLogin>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
