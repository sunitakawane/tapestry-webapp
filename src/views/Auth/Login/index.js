import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
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
import { loginActions } from "../../../redux/actions/authActions/loginActions";
import "./login.scss";
import "../index.scss";
import mask from "./Mask Group.png";

class Login extends Component {
  constructor(props) {
    super(props);

    // initalizing the state to logout on landing
    // loginActions.logout();

    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, field) {
    console.log("submit pressed");
    const { value } = e.target;
    this.setState({ [field]: value });
  }

  handleSubmit(e) {
    console.log("submit pressed");
    e.preventDefault();
    this.props.loginRequested();
    if (this.state.email && this.state.password) {
      this.props.login(this.state.email, this.state.password);
    }
  }

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

            <div className="login">
              <Card border="light">
                <Card.Title>WELCOME</Card.Title>
                <Card.Subtitle>
                  Login using your registered Email and password.
                </Card.Subtitle>{" "}
                <br />
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                  {/* //{this.handleSubmit}> */}
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
                        value={this.state.email}
                        onChange={(e) => this.handleChange(e, "email")}
                      />
                    </Col>
                  </Form.Group>
                  {this.props.isSubmitted && !this.state.email && (
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
                        value={this.state.password}
                        onChange={(e) => this.handleChange(e, "password")}
                      />
                    </Col>
                  </Form.Group>
                  {this.props.isSubmitted && !this.state.password && (
                    <Form.Text className="alert">
                      Password is required.
                    </Form.Text>
                  )}
                </Form>
                <Card.Text>
                  <a href="/reset-password">Forgot Password?</a>
                </Card.Text>
                <Button variant="primary" size="lg" value="submit">
                  Login
                </Button>
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

Login.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isSubmitted: state.isSubmitted,
  };
}

const mapDispatchToProps = (dispatch) => ({
  loginRequested: () => dispatch(loginActions.loginRequested),
  login: () => dispatch(loginActions.login),
  logout: () => dispatch(loginActions.logout),

  // logout: loginActions.logout,
  // login: loginActions.login,
  // loginRequested: loginActions.loginRequested,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
