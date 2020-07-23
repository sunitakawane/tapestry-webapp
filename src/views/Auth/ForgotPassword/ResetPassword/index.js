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
import { passwordActions } from "../../../../redux/actions/authActions/passwordActions";
import "./resetPassword.scss";
import mask from "./Mask Group.png";

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }

  handleChange(e, field) {
    const { value } = e.target;
    this.setState({ [field]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.resetPasswordRequested();
    if (this.state.email) {
      this.props.resetPassword(this.state.email);
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

            <div className="resetPassword">
              <Card border="light">
                <Card.Title>RESET PASSWORD</Card.Title>
                <Card.Subtitle>
                  Enter your registered mail ID to reset password
                </Card.Subtitle>{" "}
                <br />
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Col sm={8}>
                      <Form.Control
                        classname="input"
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
                  {this.props.isInValid && (
                    <Form.Text className="alert">Incorrect Email.</Form.Text>
                  )}
                </Form>
                <Button variant="primary" size="lg">
                  Reset Password
                </Button>
                <Card.Text>Back to Login?</Card.Text>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

ResetPassword.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isSubmitted: state.isSubmitted,
});

const mapDispatchToProps = (dispatch) => ({
  resetPasswordRequested: () =>
    dispatch(passwordActions.resetPasswordRequested),
  resetPassword: () => dispatch(passwordActions.resetPassword),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
