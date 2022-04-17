import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import banner1 from '../../../images/banner/banner_1.jpg';
import banner2 from '../../../images/banner/banner_2.jpg';
import banner3 from '../../../images/banner/banner_3.jpg';

const Banner = () => {
  return (
    <Carousel fade >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="theme_color">Let Us Brighten Your Smile</h1>
          <p>Care For Lifetime</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 className="theme_color">Committed To Excellence</h1>
          <p>Care For Your Smile</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className="theme_color">Personalized &amp; Comfortable</h1>
          <p>
          Committed To Excellence
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
