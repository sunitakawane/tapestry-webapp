import React from 'react';
import {Container,Row,Col,Spinner} from 'react-bootstrap';

import './style.css'

export default class Upload extends React.Component{

constructor(props){
    super(props)
    this.state = {
        download : true
    }
}

render(){
    return (
    <div>
        <div class="Upload">
            <Container>
                <Row className="justify-content-md-center">
                    {
                    this.state.download?
                    <Col xs lg="4">
                        Upload Successful
                    </Col>:
                    <Col xs lg="4">
                        Uploading Files
                    </Col>
                    }
                    <Col xs lg="4">
                        <button type="button" class="close" aria-label="Close"><span class="spantimes" aria-hidden="true">&times;</span></button>
                    </Col>
                </Row>
            </Container>
        </div>
        <div class="Content">
            <Container>
                {   
                this.state.download?
                <Row className="justify-content-md-center">
                    <Col xs lg="10">
                        <br/>
                        <br/>
                        &#10004;152PoolingMatrix.xls<br/>
                        <i>View test details in "Completed test section"</i>
                    </Col>
                </Row>:
                <Row className="justify-content-md-center">
                <Col xs lg="8">
                    <br/>
                    <br/>
                    <Spinner animation="border" variant="primary" />152PoolingMatrix.xls
                </Col>
                </Row>
                }
                {
                this.state.download?
                <Row>
                    <Col xs lg="6">
                        <br/>
                        <br/>
                        Files being uploaded
                    </Col>
                    <Col xs lg="2">
                        <br/>
                        <br/>
                        <button class="endbuttons">Close</button>
                    </Col>
                    <Col xs lg="4">
                        <br/>
                        <br/>
                        <button class="endbuttons">View Results</button>
                    </Col>                    
                </Row>:
                <Row className="justify-content-md-right">
                    <Col xs lg="6">
                        <br/>
                        <br/>
                        File uploading
                    </Col>
                    <Col xs lg="2">
                        <br/>
                        <br/>
                    </Col>
                    <Col xs lg="4">
                        <br/>
                        <br/>
                        <button class="endbuttons">Cancel</button>
                    </Col>
                </Row>}
            </Container>
        </div>
    </div>
    )
}
}