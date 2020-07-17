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
import "./signUp.scss";
import mask from "./Mask Group.png";

class SignUp extends Component {
  render() {
    return (
      <Container fluid>
        <Row>

          {/* Column for background image*/}
          <Col>
            <div className="sign-up-image">
              <Card>
                <Image src={mask}/>
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
                  <a className="nav-link" href="#">Contact us</a>
                </li>
                <li>
                  <a className="nav-link" href="#">Visit Website</a>
                </li>
              </ul>
            </Navbar>

            <div className="sign-up">
              <Card border="light">
                <Card.Title>SIGN UP!</Card.Title>
                
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

                  <Form.Group as={Row} controlId="formHorizontalText">
                    <Col sm={8}>
                      <Form.Control
                        classname="input"
                        type="text"
                        placeholder="Your Name"
                        size="lg"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalText">
                    <Col sm={8}>
                      <Form.Control
                        classname="input"
                        type="text"
                        placeholder="Lab Name"
                        size="lg"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalText">
                    <Col sm={8}>
                      <Form.Control
                        as="select"
                        value="Lab Location (Select City)"
                        size="lg"
                      >
                        <option>Lab Location (Select City)</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                      </Form.Control>
                    </Col>
                  </Form.Group>
                </Form>

                <Button variant="primary" size="lg">
                  Request Sign up
                </Button>

                <Card.Text>
                  Already a user? <a href="#">Sign in</a> here
                </Card.Text>

              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignUp;
