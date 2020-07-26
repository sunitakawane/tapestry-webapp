import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { passwordActions } from "../../../../redux/actions/authActions/passwordActions";
import "./resetPassword.scss";
import mask from "./Mask Group.png";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();
  const resetPasswordRequested = () =>
    dispatch(passwordActions.resetPasswordRequested());
  const resetPassword = () => dispatch(passwordActions.resetPassword());

  const handleEmailInput = (e) => {
    const { value } = e.target;

    if (value.length > 0) {
      setEmail(value);
    }
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    resetPasswordRequested();
    if (email) {
      resetPassword(email);
    }

    setValidated(true);
  };

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

          <div className="resetPassword">
            <Card border="light">
              <Card.Title>RESET PASSWORD</Card.Title>
              <Card.Subtitle>
                Enter your registered mail ID to reset password
              </Card.Subtitle>{" "}
              <br />
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Col sm={8}>
                    <Form.Control
                      className="input"
                      type="email"
                      placeholder="Email Address"
                      size="lg"
                      value={email}
                      onChange={handleEmailInput}
                      required
                    />
                  </Col>
                </Form.Group>
                <Button variant="primary" size="lg" type="submit">
                  Reset Password
                </Button>
              </Form>
              <Card.Text>Back to Login?</Card.Text>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;
