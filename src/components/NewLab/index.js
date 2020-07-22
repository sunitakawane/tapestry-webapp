import React from 'react';
import {Container,Row,Col,InputGroup,FormControl} from 'react-bootstrap';

import './styles.css'
import City from './dropdown/Dropdown';

export default function NewLab(){
    return (
    <div>
        <div class="Parent">
            <Container>
                <Row className="justify-content-md-center"> 
                <Col xs lg="2"></Col>
                <Col xs lg="4" className="justify-content-md-center">NewLab</Col>
                <Col xs lg="4"></Col>
                <Col xs lg="2">         
                    <button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </Col>
                </Row>
            </Container>
        </div>
        <div class="Content">
            <Container> 
                <Row className="justify-content-md-center">
                <Col xs lg="4">
                    LAB Name
                </Col>
                <Col xs lg="4">
                    <InputGroup className="mb-2">
                    <FormControl
                        placeholder="TEST ID"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    </InputGroup>
                </Col>
                </Row>
                <Row className="justify-content-md-center">
                <Col xs lg="4">
                    City
                </Col>
                <Col xs lg="4">
                    <City/>
                </Col>
                </Row>
                <Row className="justify-content-md-right">
                <Col xs lg="4">
                    <br/>
                    Add Lab Members
                </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="4">
                        NAME
                    </Col>
                    <Col xs lg="4">
                        <InputGroup className="mb-2">
                        <FormControl
                            placeholder="TEST ID"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        </InputGroup>
                    </Col>
                    <Col xs lg="2">
                    <button className="normalbuttons">+ADD</button>
                    </Col>
                </Row>
                <Row className="justify-content-md-right">
                    <Col xs lg="1"></Col>
                    <Col xs lg="4">
                        Designation
                    </Col>
                    <Col xs lg="4">
                        <InputGroup className="mb-2">
                        <FormControl
                            placeholder="TEST ID"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="4">
                        Contact
                    </Col>
                    <Col xs lg="4">
                        <InputGroup className="mb-2">
                        <FormControl
                            placeholder="Address"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        </InputGroup>
                    </Col>
                    <Col xs lg="2">
                        <InputGroup className="mb-2">
                        <FormControl
                            placeholder="Mobile"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        </InputGroup>
                    </Col>
                </Row>                
            </Container>  
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                    <button className="Success">Close</button>
                    </Col>
                    <Col xs lg="7"></Col>
                    <Col xs lg="2">
                    <button className="Success">Done</button>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
    )
}