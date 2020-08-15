import React, { useState, useEffect } from "react";
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
import Autocomplete from "react-autocomplete";
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
  const [country, setCountry] = useState("");
  const [labLocation, setLabLocation] = useState("");
  // const [validated, setValidated] = useState(false);

  // selectors (used inside reducers)
  const isSubmitted = useSelector((state) => state.signUp.isSubmitted);
  const isRegisterd = useSelector((state) => state.signUp.isRegistered);
  const isInvalid = useSelector((state) => state.signUp.isInvalid);
  const countrylist = useSelector((state) => state.signUp.countrylist);
  const cities = useSelector((state) => state.signUp.cities);
  // dispatch (used to define sign-up function)
  const dispatch = useDispatch();
  const signUpRequested = () => dispatch(signUpActions.signUpRequested());
  const signUp = () =>
    dispatch(
      signUpActions.signUp(email, firstName, lastName, labName, labLocation)
    );

  const countryList = () => dispatch(signUpActions.countryList());
  const cityList = () => dispatch(signUpActions.cityList());

  useEffect(() => {
    console.log("useEffect has been called!");
    // countryList();
    cityList();
  }, []);

  console.log(cities);
  // const countries = JSON.parse(localStorage.getItem("countries"));

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

  const handleCountryInput = (e) => {
    const { value } = e.target;
    if (value.length >= 0) {
      setCountry(value);
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
      signUp(email, firstName, lastName, labName);
    }
    // setValidated(true);
  };

  if (isRegisterd) {
    history.push("/request-sent");
  }

  const stateList = [
    "Andaman and Nicobar Islands",
    "Arunachal Pradesh",
    "Mumbai",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadar and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];

  const getEventTarget = e => e && e.target && e.target.value;

  const handleUpdateFieldFunctionMap = {
    'email': (e) => setEmail(getEventTarget(e)),
    'firstName': (e) => setFirstName(getEventTarget(e)),
    'lastName': (e) => setLastName(getEventTarget(e)),
    'labName': (e) => setLabName(getEventTarget(e)),
  }

  const FormFields = [
    {
      id: email,
      type: 'email',
      className: 'input',
      placeholder: 'Email Address',
      value: email,
      required: true,
      controlId: 'formHorizontalEmail',
    },
    {
      id: 'firstName',
      type: 'text',
      className: 'input',
      placeholder: 'First Name',
      value: firstName,
      required: true,
      controlId: 'formHorizontalText',
    },
    {
      id: 'lastName',
      type: 'text',
      className: 'input',
      placeholder: 'Last Name',
      value: lastName,
      required: true,
      controlId: 'formHorizontalText',
    },
    {
      id: 'labName',
      type: 'text',
      className: 'input',
      placeholder: 'Lab Name',
      value: labName,
      required: true,
      controlId: 'formHorizontalText',
    },
  ]

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
                {
                  FormFields.map(f => {
                    const { id, className, controlId, placeholder, required, type, value} = f;
                    return (
                      <Form.Group as={Row} controlId={controlId}>
                        <Col sm={8}>
                          <Form.Control
                            className={className}
                            type={type}
                            placeholder={placeholder}
                            size="lg"
                            value={value}
                            onChange={handleUpdateFieldFunctionMap[id]}
                            required={required}
                          />
                        </Col>
                        <Form.Control.Feedback type="invalid">
                          {`${placeholder} is required.`}
                        </Form.Control.Feedback>
                      </Form.Group>
                    )
                  })
                }
                <Form.Group as={Row} controlId="formHorizontalText">
                  <Col sm={8}>
                    {console.log(typeof countrylist)}
                    {/* <Autocomplete
                      getItemValue={(item) => item.label}
                      items={countrylist}
                      value={country}
                      onChange={handleCountryInput}
                      onSelect={(val) => (country = val)}
                      required
                      renderItem={(item, isHighlighted) => (
                        <div
                          style={{
                            background: isHighlighted ? "lightgray" : "white",
                          }}
                        >
                          {item.label}
                        </div>
                      )}
                    /> */}
                  </Col>
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
                      {stateList.map(state => <option value={state}>{state}</option>)}
                    </Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I agree to the terms and conditions."
                    required
                  />
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
