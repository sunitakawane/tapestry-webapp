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
                    <Col xs lg="2">
                        Uploading Files
                    </Col>
                    }
                    <Col xs lg="6"></Col>
                    <Col xs lg="2">
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
                    <Col xs lg="12">
                        <br/>
                        <span style={{color : "#1EC491"}}>&#10003;</span>152PoolingMatrix.xls<br/>
                        <span style={{color : "#828282"}}>An email will be sent to you once the results are ready. You can chack the results in the completed test section.</span>
                    </Col>
                </Row>:
                <Row className="justify-content-md-center">
                <Col xs lg="8">
                    <br/>
                    <Spinner animation="border" variant="primary" />152PoolingMatrix.xls
                </Col>
                </Row>
                }
                {
                this.state.download?
                <Row>
                    <Col xs lg="10">
                        <br/>
                        <br/>
                    </Col>
                    <Col xs lg="2">
                        <br/>
                        <button class="endbuttons">Done</button>
                        <br/>
                    </Col>                    
                </Row>:
                <Row className="justify-content-md-right">
                    <Col xs lg="6">
                        <br/>
                        <br/>
                        File uploading
                    </Col>
                    <Col xs lg="3">
                        <br/>
                        <br/>
                    </Col>
                    <Col xs lg="3">
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