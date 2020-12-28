import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const Contact = () => {
  return (
    <>
      <section id="contact">
        <Container>
          <Row>
            <Col>
              <h3 className="text-center my-4">Contact</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Address</h3>
              <p> 3 North Cheam, London, KT4 8RD</p>
            </Col>
            <Col>
              <Form>
                <Form.Group controlId="formGroupName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="full name" />
                </Form.Group>
                <Form.Group controlId="formGroupmobile">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="text" placeholder="mobile number" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="email" />
                </Form.Group>
                <Form.Group controlId="formGroupMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control type="textbox" placeholder="message" />
                </Form.Group>
                <Form.Group>
                  <Form.File id="resume" label="Uplaod resume" />
                </Form.Group>
                <Form.Group as={Row}>
                  <Col>
                    <Button>Submit</Button>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
