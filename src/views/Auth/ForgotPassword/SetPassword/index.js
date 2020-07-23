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
import "./setPassword.scss";
import mask from "./Mask Group.png";

class SetPassword extends Component {
  constructor(props) {
    super(props);

    // reset login status
    // this.props.logout();

    this.state = {
      password1: "",
      password2: "",
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { password1, password2 } = this.state;
    if (password1 && password2) {
      this.props.changePassword(password1, password2);
    }
  }

  render() {
    const { password1, password2, submitted } = this.state;

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
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group as={Row} controlId="formBasicPassword">
                    <Col sm={8}>
                      <Form.Control
                        classname="input"
                        type="password"
                        placeholder="New Password"
                        size="lg"
                        value={password1}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Form.Group>
                  {submitted && !password1 && (
                    <Form.Text className="alert">This field is required.</Form.Text>
                  )}

                  <Form.Group as={Row} controlId="formBasicPassword">
                    <Col sm={8}>
                      <Form.Control
                        classname="input"
                        type="password"
                        placeholder="Confirm Password"
                        size="lg"
                        value={password2}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Form.Group>
                  {submitted && !password2 && (
                    <Form.Text className="alert">Name is required.</Form.Text>
                  )}
                </Form>
                <Button variant="primary" size="lg">
                  Create Password
                </Button>
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
  }
}

export default SetPassword;

// const mapStateToProps = state => ({

// });

// const mapDispacthToProps = dispatch => {

// };

// export default connect(mapStateToProps, mapDispacthToProps)(Login);