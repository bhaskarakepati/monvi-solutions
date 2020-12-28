import React from "react";
import Carousel from "react-bootstrap/Carousel";

export const Home = () => {
  return (
    <>
      <section id="home">
        <Carousel>
          <Carousel.Item interval={1000} className="carsoul-item">
            <img
              className="d-block w-100 car-slider"
              src="images/image1.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="text-info">
              <h3>Software Testing Solutions</h3>
              <p>We provide all types of testing solutions</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000} className="carsoul-item">
            <img
              className="d-block w-100 car-slider"
              src="images/image2.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className="text-info">
              <h3>E-Commerce Solutions</h3>
              <p>We provide end-to-end solutions for e-commerce solutions</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000} className="carsoul-item">
            <img
              className="d-block w-100 car-slider"
              src="images/image3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className="text-primary">
              <h3>Agile Developement</h3>
              <p>We follow fully agile process to deliver the product</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};
