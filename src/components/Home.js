import React from "react";
import Carousel from "react-bootstrap/Carousel";

export const Home = () => {
  return (
    <>
      <section>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 car-slider"
              src="images/image1.jpg"
              alt="First slide"
            />
            <Carousel.Caption className="text-info text-left d-none d-sm-block">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 car-slider"
              src="images/image2.jpg"
              alt="Third slide"
            />

            <Carousel.Caption className="text-primary">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 car-slider"
              src="images/image3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption className="text-primary">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};
