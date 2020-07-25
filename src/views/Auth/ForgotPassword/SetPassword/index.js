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
import "./setPassword.scss";
import mask from "./Mask Group.png";

const SetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();
  const setPasswordRequested = () =>
    dispatch(passwordActions.setPasswordRequested);
  const setPassword = () => dispatch(passwordActions.setPassword);

  const handleNewPasswordInput = (e) => {
    const { value } = e.target;

    if (value.length > 0) {
      setNewPassword(value);
    }
  };

  const handleConfirmPasswordInput = (e) => {
    const { value } = e.target;

    if (value.length > 0) {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setPasswordRequested();
    if (newPassword && confirmPassword && newPassword === confirmPassword) {
      setPassword(newPassword, confirmPassword);
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

          <div className="login">
            <Card border="light">
              <Card.Title>Set Password</Card.Title>
              <Card.Subtitle>Create a new Password.</Card.Subtitle> <br />
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="formBasicPassword">
                  <Col sm={8}>
                    <Form.Control
                      classname="input"
                      type="password"
                      placeholder="New Password"
                      size="lg"
                      value={newPassword}
                      onChange={handleNewPasswordInput}
                      required
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formBasicPassword">
                  <Col sm={8}>
                    <Form.Control
                      classname="input"
                      type="password"
                      placeholder="Confirm Password"
                      size="lg"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordInput}
                      required
                    />
                  </Col>
                </Form.Group>
                <Button variant="primary" size="lg" type="submit">
                  Create Password
                </Button>
              </Form>
              <Card.Text>Back to Login?</Card.Text>
              <Card.Text className="new-user">
                New user? <a href="/sign-up">Contact us</a> to register.
              </Card.Text>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SetPassword;
