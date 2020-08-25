import React, { Component } from "react";
import { Col, Row, Card, Container, Image, Navbar } from "react-bootstrap";
import mask from "../../Mask Group.png";
import "./passwordLinkSent.scss";

class PasswordLinkSent extends Component {
  render() {
    return (
      <Container fluid>
        <div className="scrolling-wrapper">
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

            {/* Column for the Request-Sent Box */}
            <Col>
              <Navbar>
                <ul className="navbar-nav ml-auto">
                  <li>
                    <a className="nav-link"> Develop using our Algorithm</a>
                  </li>
                  <li>
                    <a className="nav-link" href="./sign-up">
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
              <div className="passwordLinkSent">
                <Card border="light">
                  <Card.Title>Password Reset Link Sent!</Card.Title>

                  <Card.Subtitle>
                    We have sent a password reset link to your email. Follow the
                    link to reset password.
                  </Card.Subtitle>
                  <Card.Text>
                    <a href="#">Visit out website</a> to know more about our
                    product.
                  </Card.Text>
                  <Card.Text>Back to Login</Card.Text>
                  <Card.Text className="new-user">
                    New user? <a href="/sign-up">Contact us</a> to register.
                  </Card.Text>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default PasswordLinkSent;
