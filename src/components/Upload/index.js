import React from 'react';
import {Container,Row,Col,Spinner} from 'react-bootstrap';
import axios from 'axios';

import './style.css'
import ProgressBar from './progressbar'
import url from "../../constants/url";
import Dropzone from "../Dropzone"


export default class Upload extends React.Component{

constructor(props){
    super(props)
    this.state = {
        download :props.download,
        completed:props.completed,
        fileselected:false,
    }
    this.handleClose = props.handleClose;
    this.fileInputRef = React.createRef()

    this.openFileDialog =   this.openFileDialog.bind(this)
    this.onFileAdded = this.onFileAdded.bind(this)
    // this.onDragOver = this.onDragOver.bind(this
    // this.uploadFiles = this.uploadFiles.bind(this);
    // this.sendRequest = this.sendRequest.bind(this);
    // this.renderActions = this.renderActions.bind(this);
}
openFileDialog() {
    // if (this.props.disabled) return
    this.fileInputRef.current.click()
  }

onFileAdded(evt) {
    const file = evt.target.files[0]
    this.setState({fileselected:true})
    // if (this.props.onFilesAdded) {
    //   const array = this.fileListToArray(files)
    //   this.props.onFilesAdded(array)
    // }
    axios.post(url["BASE_API_URL"]+'upload/',{
        "test_id": 7,
        "file_name": file.name
    },{
    headers:{
        "Authorization":'Bearer '+ JSON.parse(localStorage.getItem("user"))['token'],
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',

    }})
    .then(res=>{ 
        const upload_url = res.data['upload_url']
        console.log(upload_url)
        let config = {
            onUploadProgress: function(progressEvent){
                // setcompleted(Math.round((progressEvent.loaded * 100) / progressEvent.total));
                console.log(Math.round((progressEvent.loaded * 100) / progressEvent.total))
            }
        }

        const formData = new FormData();
        formData.append("file",file,file.name);

        axios.put(upload_url,formData,config)
        .then("load", event => {
            // setdownload(true)
            console.log("Successful")
        })
        .catch(error=>{
            console.log(error.message)
        })
    })
    .catch(err=>console.log(err))
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
            {(this.state.fileseleted)?
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
            </Container>:
            <Container>
                <Row className="justify-content-md-right">
                    <div className="Dropzone" onClick={this.openFileDialog} style={{ cursor: this.props.disabled ? 'default' : 'pointer' }}>
                        <input ref={this.fileInputRef} className="FileInput" type="file" onChange={this.onFileAdded}/>
                        <img alt="upload" className="Icon" src="baseline-cloud_upload-24px.svg"/>
                        <span>Upload Files</span>
                    </div>
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
                </Row>
            </Container>
            }
        </div>
    </div>
    )
}
}