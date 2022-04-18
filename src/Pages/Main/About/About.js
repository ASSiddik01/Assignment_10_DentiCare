import React from "react";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import me from "../../../images/me.jpeg";

const About = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col md={5}>
          <img className="img-fluid rounded border p-2" src={me} alt="" />
        </Col>
        <Col md={7}>
          <h1>I'm Abu Shama</h1>
          <br />
          <h6>About myself</h6>
          <p>
            My home district Chuadanga. Now I study in Finance and Banking
            department at Begum Rokeya University, Rangpur.
          </p>
          <br />
          <h6>About my goal</h6>
          <p>
            Now my one and only goal is complate my web developer journey with
            programming-hero and become a web developer. Because, it is my dream.
            I am also student of programming-hero batch-4 but not to complate
            for some problem. That's why I restart my journey with batch-5.
          </p>
          <br />
          <p>If the question arises about my hard work then I will say - try my best effort. For a wrong decision I loss my family. That's why I do a partime job to cover my daily expenses. I wake up at 6:00 am from sleep then I want to do small chores and sit down to practice daily module till 9 am. Then go to university and come back room at 2 pm. And again practice untill 6 pm. Then go to tution 7:00pm - 9:00 pm. After complate my supper join my remote office work 9:30pm - 02:00 am. Then go to sleep, that's all. And this assignement is done with 100 degree fever and with semester final exam.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
