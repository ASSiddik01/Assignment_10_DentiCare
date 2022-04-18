import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  // Decler state
  const [services, setServices] = useState([]);
  // Fetch services data from json file
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
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
