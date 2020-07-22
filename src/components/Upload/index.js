import React from 'react';
import {Container,Row,Col,InputGroup,FormControl} from 'react-bootstrap';

import './style.css'

export default function uploadsuccessful(){
    return (
    <div>
        <div class="Upload">
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="4">
                        Upload Successful
                    </Col>
                    <Col xs lg="4">
                        <button type="button" class="close" aria-label="Close"><span class="spantimes" aria-hidden="true">&times;</span></button>
                    </Col>
                </Row>
            </Container>
        </div>
        <div class="Content">
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="4">
                        <br/>
                        <br/>
                        152PoolingMatrix.xls
                    </Col>
                </Row>
                <Row className="justify-content-md-right">
                    <Col xs lg="6">
                        <br/>
                        <br/>
                        File uploaded successfully
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs lg="4">
                        <br/>
                        <button class="endbuttons">Done</button>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
    )
}