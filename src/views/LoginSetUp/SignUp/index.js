import React, { Component } from "react";
import { Button, Form, Col, Row, Card } from "react-bootstrap";
import "./signUp.scss";

class SignUp extends Component {
  render() {
    return (
      <Card border="light">
        <Card.Title>SIGN UP!</Card.Title>
        <Card.Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Card.Subtitle>{" "}
        <br />
        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Col sm={8}>
              <Form.Control
                classname="input"
                type="email"
                placeholder="Email"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalText">
            <Col sm={8}>
              <Form.Control
                classname="input"
                type="text"
                placeholder="Your Name"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalText">
            <Col sm={8}>
              <Form.Control
                classname="input"
                type="text"
                placeholder="Laboratory Name and location"
              />
            </Col>
          </Form.Group>
        </Form>
        <Card.Text>
          <a href="#">Forgot Password?</a>
        </Card.Text>
        <Button variant="primary" size="xl">
          Request Sign up
        </Button>
        <Card.Text>
          Already a user? <a href="#">Sign in</a> here
        </Card.Text>
      </Card>
    );
  }
}

export default SignUp;
