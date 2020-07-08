import React, { Component } from "react";
import { Button, Form, Col, Row, Card } from "react-bootstrap";
import "./login.css";

class Login extends Component {
  render() {
    return (
      <Card border="light">
        <Card.Title>WELCOME BACK!</Card.Title>
        <Card.Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Card.Subtitle>
        <br />

        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Col sm={8}>
              <Form.Control classname="input" type="email" placeholder="Email" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Col sm={8}>
              <Form.Control classname="input" type="password" placeholder="Password" />
            </Col>
          </Form.Group>
        </Form>
        <Card.Text>
          <a href="#">Forgot Password?</a>
        </Card.Text>

        <Button variant="primary" size="xl">
          Login
        </Button>
        <br/> <br/> <br/>

        <Card.Text>
        New user? <a href="#">Contact us</a> to register.
        </Card.Text>
      </Card>

    );
  }
}

export default Login;
