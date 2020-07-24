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
import { getIsSubmitted } from '../../../redux/selectors/auth/login';
import { loginActions } from "../../../redux/actions/authActions/loginActions";
import "./login.scss";
import "../index.scss";
import mask from "./Mask Group.png";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const loginRequested = () => dispatch(loginActions.loginRequested);
  const login = () => dispatch(loginActions.login);
  const logout = () => dispatch(loginActions.logout);
  const isSubmitted = useSelector(getIsSubmitted);


  const handleEmailInput = (e) => {
    const { value } = e.target;

    if (value.length > 0) {
      setEmail(value);
    }
  }

  const handlePasswordInput = (e) => {
    const { value } = e.target;

    if (value.length > 0) {
      setPassword(value);
    }
  }

  const handleSubmit = e => {
    console.log("submit pressed");
    e.preventDefault();
    loginRequested();
    if (email && password) {
      login(email, password);
    }
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
              <Card.Title>WELCOME</Card.Title>
              <Card.Subtitle>
                Login using your registered Email and password.
              </Card.Subtitle>{" "}
              <br />
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  as={Row}
                  controlId="formHorizontalEmail"
                  role="form"
                >
                  <Col sm={8}>
                    <Form.Control
                      className="input"
                      type="email"
                      placeholder="Email Address"
                      size="lg"
                      value={email}
                      onChange={handleEmailInput}
                    />
                  </Col>
                </Form.Group>
                {isSubmitted && !email && (
                  <Form.Text className="alert">Email is required.</Form.Text>
                )}
                <Form.Group
                  as={Row}
                  controlId="formBasicPassword"
                  role="form"
                >
                  <Col sm={8}>
                    <Form.Control
                      classname="input"
                      type="password"
                      placeholder="Password"
                      size="lg"
                      value={password}
                      onChange={handlePasswordInput}
                    />
                  </Col>
                </Form.Group>
                {isSubmitted && !password && (
                  <Form.Text className="alert">
                    Password is required.
                  </Form.Text>
                )}
                <Card.Text>
                  <a href="/reset-password">Forgot Password?</a>
                </Card.Text>
                <Button variant="primary" size="lg" type="submit">
                  Login
                </Button>
              </Form>
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

export default Login;
