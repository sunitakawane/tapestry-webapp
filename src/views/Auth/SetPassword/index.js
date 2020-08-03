import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import {
  Button,
  Form,
  Col,
  Row,
  Card,
  Container,
  Image,
  Navbar,
  Spinner,
} from "react-bootstrap";
import { passwordActions } from "../../../redux/actions/authActions/passwordActions";
import mask from "../Mask Group.png";
import "./setPassword.scss";

const SetPassword = () => {
  let history = useHistory();
  let match = useRouteMatch();

  // state variables
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [validated, setValidated] = useState(false);

  const uid = match.params.uid;
  const token = match.params.token;

  // selectors (used in password reducer)
  const isInvalid = useSelector((state) => state.password.isInvalid);
  const isSetPasswordSuccess = useSelector(
    (state) => state.password.isSetPasswordSuccess
  );
  const isSubmitted = useSelector((state) => state.password.isSubmitted);

  // dispatch (used for defining set password function)
  const dispatch = useDispatch();
  const setPasswordRequested = () =>
    dispatch(passwordActions.setPasswordRequested());
  const setPassword = () =>
    dispatch(
      passwordActions.setPassword(newPassword, confirmPassword, uid, token)
    );

  const handleNewPasswordInput = (e) => {
    const { value } = e.target;

    if (value.length >= 0) {
      setNewPassword(value);
    }
  };

  const handleConfirmPasswordInput = (e) => {
    const { value } = e.target;

    if (value.length >= 0) {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (e) => {
    // const form = e.currentTarget;
    // if (form.checkValidity() === false) {}

    e.preventDefault();
    e.stopPropagation();

    setPasswordRequested();
    if (newPassword && confirmPassword && newPassword === confirmPassword) {
      setPassword(newPassword, confirmPassword, uid, token);
    }
    // setValidated(true);
  };

  if (isSetPasswordSuccess) {
    history.push("/onboarding");
  }

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
              <Form onSubmit={handleSubmit}>
                {/* noValidate validated={validated} */}
                <Form.Group as={Row} controlId="formBasicPassword">
                  <Col sm={8}>
                    <Form.Control
                      className="input"
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
                      className="input"
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
                  {isSubmitted && (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  )}
                  Create Password
                </Button>
                {newPassword !== confirmPassword && (
                  <Card.Text>Passwords dont match. Please try again!</Card.Text>
                )}
                {isInvalid && (
                  <Card.Text>Request failed. Please try again!</Card.Text>
                )}
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
