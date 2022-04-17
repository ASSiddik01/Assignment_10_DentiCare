import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";
import auth from "../../../../firebase.config";
import Loading from "../../Loading/Loading";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const navigateRegister = (event) => {
    navigate("/register");
  };
  const navigateResetPassword = (event) => {
    navigate("/reset");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  if (loading) {
    return <Loading></Loading>;
  }
  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message} </p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto">
          <h2 className="text-center my-3">Please Login</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Button variant="outline-primary" type="submit">
              Login
            </Button>
          </Form>
          {errorElement}
          <p className="mt-2">
            If you are new?{" "}
            <span
              onClick={navigateRegister}
              className="text-primary cursor_pointer"
            >
              Create an account
            </span>{" "}
          </p>
          <p>
            Forget Password?{" "}
            <span
              onClick={navigateResetPassword}
              className="text-primary cursor_pointer"
            >
              Reset Password
            </span>{" "}
          </p>
          <SocialLogin></SocialLogin>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
