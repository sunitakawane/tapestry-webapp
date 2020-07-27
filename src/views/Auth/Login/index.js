import React, { Component } from "react";
import { Button, Form, Col, Row, Card } from "react-bootstrap";
import "./login.scss";

class Login extends Component {
  render() {
    return (
      <Card className="login-page" border="light">
        <Card.Title className="login-page-title">WELCOME BACK!</Card.Title>
        <Card.Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Card.Subtitle> <br />
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

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Col sm={8}>
              <Form.Control
                classname="input"
                type="password"
                placeholder="Password"
              />
            </Col>
          </Form.Group>
        </Form>
        <Card.Text>
          <a href="/login#">Forgot Password?</a>
        </Card.Text>
        <Button variant="primary" size="xl">
          Login
        </Button>
        <Card.Text  className = "new-user">
          New user? <a href="/login#">Contact us</a> to register.
        </Card.Text>
      </Card>
    );
  }
}

export default Login;
