import React from 'react';
import {Container,Row,Col,Spinner} from 'react-bootstrap';

import './style.css'
import ProgressBar from './progressbar'

export default class Upload extends React.Component{

constructor(props){
    super(props)
    this.state = {
        download : true,
        completed:40,
        files:props.files
    }
    this.handleClose = props.handleClose;
    this.uploadFiles = this.uploadFiles.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    // this.renderActions = this.renderActions.bind(this);
}

async uploadFiles() {
    this.setState({ uploadProgress: {}});
    const promises = [];
    promises.push(this.sendRequest(this.state.files));
    try {
      await Promise.all(promises);
  
      this.setState({ download:true });
    } catch (e) {
      // Not Production ready! Do some error handling here instead...
      this.setState({ download: false });
    }
}

sendRequest(file) {
 return new Promise((resolve, reject) => {
  const req = new XMLHttpRequest();

  req.upload.addEventListener("progress", event => {
   if (event.lengthComputable) {
    // const copy = { ...this.state.completed };
    // copy[file.name] = {
    //  state: "pending",
    //  percentage: (event.loaded / event.total) * 100
    // };
    this.setState({ completed: (event.loaded / event.total) * 100});
   }
  });
   
  req.upload.addEventListener("load", event => {
//    const copy = { ...this.state.uploadProgress };
//    copy[file.name] = { state: "done", percentage: 100 };
   this.setState({ download:true,completed:100});
   resolve(req.response);
  });
   
  req.upload.addEventListener("error", event => {
//    const copy = { ...this.state.uploadProgress };
//    copy[file.name] = { state: "error", percentage: 0 };
   this.setState({download:false,completed:0});
   reject(req.response);
  });

  const formData = new FormData();
  formData.append("file", this.state.file, this.state.file.filename);

  req.open("POST", "http://localhost:8000/upload");
  req.send(formData);
 });
}

render(){
    return (
    <div>
        {
        this.state.download?
        <ProgressBar value={"File uploaded successfully"} completed={100} bgcolor={ '#1ec491'}  />:
        <ProgressBar value={"Uploading File"} completed={this.state.completed} bgcolor={'#33B6FF'} handleClose={this.props.handleClose}  />
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