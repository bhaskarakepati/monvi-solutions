import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export const WhoWeAre = () => {
  return (
    <>
      <section id="whoweare">
        <Container>
          <Row>
            <Col>
              <h3 classname="text-center ml-20">Who we are</h3>
            </Col>
          </Row>
          <Row className="col-sm-12 mt-50 text-center">
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body className="bg-secondary">
                  <Card.Title className="text-info">
                    Functional testing
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body className="bg-info">
                  <Card.Title>Performance testing</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Read more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body className="bg-warning">
                  <Card.Title>Security testing</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
