import React, { Component } from "react";
import {
  Button,
  Form,
  Col,
  Row,
  Card,
  Container,
  Image,
  Navbar,
} from "react-bootstrap";
import "./login.scss";
import mask from "./Mask Group.png";

class Login extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          {/* Column for background image*/}
          <Col>
            <div className="sign-up-image">
              <Card>
                <Image src={mask} />
                <Card.ImgOverlay>
                  <Card.Text>Tapestry Pooling</Card.Text>
                  <Card.Title>
                    Towards faster <br /> testing
                  </Card.Title>
                  <Card.Subtitle>
                    Tapestry, a novel quantitative nonadaptive pooling <br />
                    scheme to test many samples using only a few tests.
                  </Card.Subtitle>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Col>

          {/* Column for the Sign-up Box */}
          <Col>
            <Navbar>
              <ul className="navbar-nav ml-auto">
                <li>
                  <a className="nav-link"> Develop using our Algorithm</a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    Contact us
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    Visit Website
                  </a>
                </li>
              </ul>
            </Navbar>

            <div className="login">
              <Card border="light">
                <Card.Title>WELCOME</Card.Title>
                <Card.Subtitle>
                  Login using your registered Email and password.
                </Card.Subtitle>{" "}
                <br />
                <Form>
                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Col sm={8}>
                      <Form.Control
                        classname="input"
                        type="email"
                        placeholder="Email Address"
                        size="lg"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formBasicPassword">
                    <Col sm={8}>
                      <Form.Control
                        classname="input"
                        type="password"
                        placeholder="Password"
                        size="lg"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Card.Text>
                  <a href="#">Forgot Password?</a>
                </Card.Text>
                <Button variant="primary" size="lg">
                  Login
                </Button>
                <Card.Text className="new-user">
                  New user? <a href="#">Contact us</a> to register.
                </Card.Text>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
