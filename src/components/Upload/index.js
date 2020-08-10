import React from 'react';
import {Container,Row,Col,Spinner} from 'react-bootstrap';
import axios from 'axios';

import './style.css'
import ProgressBar from './progressbar'
import url from "../../constants/url";


export default class Upload extends React.Component{

constructor(props){
    super(props)
    this.state = {
        download :props.download,
        completed:props.completed,
        files:props.files
    }
    this.handleClose = props.handleClose;
    // this.uploadFiles = this.uploadFiles.bind(this);
    // this.sendRequest = this.sendRequest.bind(this);
    // this.renderActions = this.renderActions.bind(this);
}



render(){
    return (
    <div>
        {
        this.state.download?
        <ProgressBar value={"File uploaded successfully"} completed={100} bgcolor={ '#1ec491'} handleClose={this.handleClose} />:
        <ProgressBar value={"Uploading File"} completed={this.state.completed} bgcolor={'#33B6FF'} handleClose={this.handleClose}  />
        }
        <div class="Content">
            <Container>
                {   
                this.state.download?
                <Row className="justify-content-md-center">
                    <Col xs lg="2"></Col>
                    <Col xs lg="8">
                        <br/>
                        <span style={{color : "#1EC491"}}>&#10003;</span>152PoolingMatrix.xls<br/>
                        <span style={{color : "#828282"}}>An email will be sent to you once the results are ready. You can chack the results in the completed test section.</span>
                    </Col>
                    <Col xs lg="2"></Col>
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
                        <button class="endbuttons" onClick={this.handleClose}>Done</button>
                        <br/>
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
                        <button class="endbuttons" onClick={this.handleClose}>Cancel</button>
                    </Col>
                </Row>}
            </Container>
        </div>
    </div>
    )
}
}