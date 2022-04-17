import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./Services.css";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log("inside services", services);
  return (
    <Container id="services">
      <h2 className="text-center my-5">
        {" "}
        <span className="theme_color">My Awesome</span>{" "}
        <span className="theme_color2">Services</span>
      </h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
