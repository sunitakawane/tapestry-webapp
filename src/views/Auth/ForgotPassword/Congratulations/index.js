import React, { Component } from "react";
import { Col, Row, Card, Container, Image, Navbar } from "react-bootstrap";
import mask from "../../Mask Group.png";
import "./congratulations.scss";

class Congratulations extends Component {
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

            <div className="congratulations">
              <Card border="light">
                <Card.Title>Congratulations!</Card.Title>
                <Card.Subtitle>
                  We have created a new password for you. Please login using
                  your new password.
                </Card.Subtitle>

                <Card.Text>
                  <a href="/login">Login</a> to your profile.
                </Card.Text>
                <Card.Text className="new-user">
                  New user? <a href="/sign-up">Contact us</a> to register.
                </Card.Text>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Congratulations;
