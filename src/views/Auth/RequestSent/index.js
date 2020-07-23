import React, { Component } from "react";
import {
  Col,
  Row,
  Card,
  Container,
  Image,
  Navbar,
} from "react-bootstrap";
import "./requestSent.scss";
import mask from "./Mask Group.png";

class RequestSent extends Component {
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

          {/* Column for the Request-Sent Box */}
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
            <div className="requestSent">
              <Card border="light">
                <Card.Title>REQUEST SENT!</Card.Title>

                <Card.Text>
                  We have received your request, our team will get back to you
                  shortly on your email {this.props.email}
                </Card.Text>
                <Card.Text>
                  <a href="#">Visit out website</a> to know more about our
                  product.
                </Card.Text>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RequestSent;
