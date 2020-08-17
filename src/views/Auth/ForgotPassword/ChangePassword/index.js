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
  Spinner
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { passwordActions } from "../../../../redux/actions/authActions/passwordActions";
import "./changePassword.scss";
import mask from "../../Mask Group.png";

const ChangePassword = () => {
  let history = useHistory();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  // const [validated, setValidated] = useState(false);

  const isSubmitted = useSelector((state) => state.password.isSubmitted);
  const isChangePasswordSuccess = useSelector(
    (state) => state.password.isChangePasswordSuccess
  );
  const isChangePasswordFailure = useSelector(
    (state) => state.password.isChangePasswordFailure
  );

  const dispatch = useDispatch();
  const changePasswordRequested = () =>
    dispatch(passwordActions.changePasswordRequested());
  const changePassword = () =>
    dispatch(
      passwordActions.changePassword(oldPassword, newPassword, confirmPassword)
    );

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

  const handleOldPasswordInput = (e) => {
    const { value } = e.target;

    if (value.length > 0) {
      setOldPassword(value);
    }
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    // if (form.checkValidity() === false) {
    e.preventDefault();
    e.stopPropagation();
    // }

    changePasswordRequested();
    if (
      oldPassword &&
      newPassword &&
      confirmPassword &&
      newPassword === confirmPassword
    ) {
      changePassword(oldPassword, newPassword, confirmPassword);
    }

    // setValidated(true);
  };

  if (isChangePasswordSuccess) {
    history.push("/ongointests");
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
              <Card.Title>Change Password</Card.Title>
              <Card.Subtitle>
                Change your password here and new one.
              </Card.Subtitle>{" "}
              <br />
              <Form onSubmit={handleSubmit}>
                {/* noValidate validated={validated} */}
                <Form.Group as={Row} controlId="formBasicPassword">
                  <Col sm={8}>
                    <Form.Control
                      className="input"
                      type="password"
                      placeholder="Old Password"
                      size="lg"
                      value={oldPassword}
                      onChange={handleOldPasswordInput}
                      required
                    />
                  </Col>
                </Form.Group>

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
                  Change Password
                </Button>
                {newPassword !== confirmPassword && (
                  <Card.Text>Passwords dont match. Please try again!</Card.Text>
                )}
                {isChangePasswordFailure && (
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

export default ChangePassword;
