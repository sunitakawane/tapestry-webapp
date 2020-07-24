import React, { Component } from "react";
import {
  Card,
  OverlayTrigger,
  Image,
  Container,
  Row,
  Col,
  ListGroup,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import "./onboarding.scss";
import machine1 from "./machine1.png";
import machine2 from "./machine2.png";
import machine3 from "./machine3.png";
import machine4 from "./machine4.png";

class Onboarding extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="onboarding">
          <Card border="light">
            <Card.Body>
              <Card.Title>Welcome Anirudha!</Card.Title>
              <Card.Subtitle>
                Vevanta Memorial Hospitals, Biogen Labs
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>

        <Container>
          <Row>
            <Col>
              <div className="test-kit">Test Kit Type</div>
            </Col>
          </Row>

          <Row md={4}>
            <Col>
              <OverlayTrigger
                trigger="hover"
                overlay={
                  <ListGroup variant="flush">
                    <ListGroupItem>E gene</ListGroupItem>
                    <ListGroupItem>RdRP gene</ListGroupItem>
                  </ListGroup>
                }
                placement="bottom-end"
              >
                <span>
                  <Button variant="">
                    <div className="button-main-heading">
                      PathoDetect COVID-19 qPCR
                    </div>
                    <div className="button-sub-heading"> MyLab Discovery</div>
                  </Button>
                </span>
              </OverlayTrigger>
            </Col>
            <Col>
              <OverlayTrigger
                trigger="hover"
                overlay={
                  <ListGroup variant="flush">
                    <ListGroupItem>E gene</ListGroupItem>
                    <ListGroupItem>RdRP gene</ListGroupItem>
                  </ListGroup>
                }
                placement="bottom-end"
              >
                <span>
                  <Button variant="">
                    <div className="button-main-heading">
                      AbGun COVID-19 RT-PCR
                    </div>

                    <div className="button-sub-heading">Lab Genomics</div>
                  </Button>
                </span>
              </OverlayTrigger>
            </Col>
            <Col>
              <OverlayTrigger
                trigger="hover"
                overlay={
                  <ListGroup variant="flush">
                    <ListGroupItem>E gene</ListGroupItem>
                    <ListGroupItem>RdRP gene</ListGroupItem>
                    <ListGroupItem>ORF gene</ListGroupItem>
                  </ListGroup>
                }
                placement="bottom-end"
              >
                <span>
                  <Button variant="">
                    <div className="button-main-heading">
                      Invitrogen SuperScrip III qPCR
                    </div>
                    <div className="button-sub-heading">
                      ThermoFisher Scientific
                    </div>
                  </Button>
                </span>
              </OverlayTrigger>
            </Col>
            <Col>
              <OverlayTrigger
                trigger="hover"
                overlay={
                  <ListGroup variant="flush">
                    <ListGroupItem>E gene</ListGroupItem>
                    <ListGroupItem>RdRP gene</ListGroupItem>
                  </ListGroup>
                }
                placement="bottom-end"
              >
                <span>
                  <Button variant="">
                    <div className="button-main-heading">
                      Quantiplus Multiplex RT-qPCR
                    </div>
                    <div className="button-sub-heading">HUWEL Life Science</div>
                  </Button>
                </span>
              </OverlayTrigger>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <div className="test-kit">Machine Type</div>
            </Col>
          </Row>

          <Row md={4}>
            <Col>
              <Button variant="">
                <Container>
                  <Row>
                    <Col>
                      <Image src={machine1} rounded thumbnail />
                    </Col>
                    <Col>QuantStudio™ 12K Flex Real-Time PCR</Col>
                  </Row>
                </Container>
              </Button>
            </Col>
            <Col>
              <Button variant="">
                <Container>
                  <Row>
                    <Col>
                      <Image src={machine2} rounded thumbnail />
                    </Col>
                    <Col>BioRad qPCR</Col>
                  </Row>
                </Container>
              </Button>
            </Col>
            <Col>
              <Button variant="">
                <Container>
                  <Row>
                    <Col>
                      <Image src={machine3} rounded thumbnail />
                    </Col>
                    <Col> Eco Real-Time PCR</Col>
                  </Row>
                </Container>
              </Button>
            </Col>
            <Col>
              <Button variant="">
                <Container>
                  <Row>
                    <Col>
                      <Image src={machine4} rounded thumbnail />
                    </Col>
                    <Col> PCR System MSLPCR20</Col>
                  </Row>
                </Container>
              </Button>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Onboarding;
