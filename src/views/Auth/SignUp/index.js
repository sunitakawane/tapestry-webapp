import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Button,
  Form,
  Col,
  Row,
  Card,
  Container,
  Image,
  Spinner,
  Navbar,
} from "react-bootstrap";
import { signUpActions } from "../../../redux/actions/authActions/signUpActions";
import mask from "../Mask Group.png";
import "./signUp.scss";

const SignUp = () => {
  let history = useHistory();

  // state variables
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [labName, setLabName] = useState("");
  const [labLocation, setLabLocation] = useState("");
  // const [validated, setValidated] = useState(false);

  // selectors (used inside reducers)
  const isSubmitted = useSelector((state) => state.signUp.isSubmitted);
  const isRegisterd = useSelector((state) => state.signUp.isRegistered);
  const isInvalid = useSelector((state) => state.signUp.isInvalid);

  // dispatch (used to define sign-up function)
  const dispatch = useDispatch();
  const signUpRequested = () => dispatch(signUpActions.signUpRequested());
  const signUp = () =>
    dispatch(
      signUpActions.signUp(email, firstName, lastName, labName, labLocation)
    );

  const handleEmailInput = (e) => {
    const { value } = e.target;
    if (value.length >= 0) {
      setEmail(value);
    }
  };

  const handleFirstNameInput = (e) => {
    const { value } = e.target;
    if (value.length >= 0) {
      setFirstName(value);
    }
  };

  const handleLastNameInput = (e) => {
    const { value } = e.target;
    if (value.length >= 0) {
      setLastName(value);
    }
  };

  const handleLabNameInput = (e) => {
    const { value } = e.target;
    if (value.length >= 0) {
      setLabName(value);
    }
  };

  const handleLabLocationInput = (e) => {
    const { value } = e.target;
    if (value.length >= 0) {
      setLabLocation(value);
    }
  };

  const handleSubmit = (e) => {
    // const form = e.currentTarget;
    // if (form.checkValidity() === false) {}
    e.preventDefault();
    e.stopPropagation();

    signUpRequested();

    if (email && firstName && lastName && labName && labLocation) {
      signUp(email, firstName, lastName, labName, labLocation);
    }
    // setValidated(true);
  };

  if (isRegisterd) {
    history.push("/request-sent");
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
          <div className="sign-up">
            <Card border="light">
              <Card.Title>SIGN UP!</Card.Title>

              <Form onSubmit={handleSubmit}>
                {/* noValidate validated={validated} */}
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
                  <Form.Control.Feedback type="invalid">
                    Email is required.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalText">
                  <Col sm={8}>
                    <Form.Control
                      className="input"
                      type="text"
                      placeholder="First Name"
                      size="lg"
                      value={firstName}
                      onChange={handleFirstNameInput}
                      required
                    />
                  </Col>
                  <Form.Control.Feedback type="invalid">
                    First Name is required.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalText">
                  <Col sm={8}>
                    <Form.Control
                      className="input"
                      type="text"
                      placeholder="Last Name"
                      size="lg"
                      value={lastName}
                      onChange={handleLastNameInput}
                      required
                    />
                  </Col>
                  <Form.Control.Feedback type="invalid">
                    Last Name is required.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalText">
                  <Col sm={8}>
                    <Form.Control
                      className="input"
                      type="text"
                      placeholder="Lab Name"
                      size="lg"
                      value={labName}
                      onChange={handleLabNameInput}
                      required
                    />
                  </Col>
                  <Form.Control.Feedback type="invalid">
                    Lab Name is required.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalText">
                  <Col sm={8}>
                    <Form.Control
                      type="text"
                      as="select"
                      size="lg"
                      value={labLocation.value}
                      onChange={handleLabLocationInput}
                      required
                    >
                      <option value="">Lab Location (Select City)</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Andaman and Nicobar Islands">
                        Andaman and Nicobar Islands
                      </option>
                      <option value="Arunachal Pradesh">
                        Arunachal Pradesh
                      </option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Dadar and Nagar Haveli">
                        Dadar and Nagar Haveli
                      </option>
                      <option value="Daman and Diu">Daman and Diu</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Puducherry">Puducherry</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jammu and Kashmir">
                        Jammu and Kashmir
                      </option>
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
                  <Form.Control.Feedback type="invalid">
                    Location is required.
                  </Form.Control.Feedback>
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
                  Request Sign up
                </Button>
                {isInvalid && (
                  <Card.Text>
                    Sign up failed due to some reason. Please try again!
                  </Card.Text>
                )}
              </Form>

              <Card.Text>
                Already a user? <a href="/login">Sign in</a> here
              </Card.Text>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
