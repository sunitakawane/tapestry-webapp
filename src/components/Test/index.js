import React from 'react';
import {Container,Row,Col,InputGroup,FormControl,Overlay} from 'react-bootstrap';
import Tooltip from 'react-bootstrap/Tooltip';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';

import './styles.scss'
import DropdownContent from './dropdown/Dropdown';
import url from "../../constants/url";
// import {testdataApi} from "../../api/testApi/testdata";

import {testActions} from '../../redux/actions/testActions/testActions'

export default class Test extends React.Component{

constructor(props){
  super(props)
  this.handleClose = props.handleClose;
  console.log(props.testConductedList)
  console.log(props.remarks)
  this.state ={
    machine:props.machine,
    kit:props.kit,
    testConductedList:props.testConductedList,
    testconductedby:JSON.parse(localStorage.getItem("user"))['user']['pk'],
    remarks:props.remarks,
    testId:props.testId,    
    totalSamples:props.totalSamples,
    prevalanceRate:props.prevalanceRate,
    selectedKit:props.selectedKit,
    selectedMachine:props.selectedMachine,
    showtriggerprevalanceRate:false,
    showtriggersamples:false,
    triggerprevalanceRate:React.createRef(),
    triggersamples:React.createRef(),
    labId :null,
    showspinner:false
  }
  
  this.handleInput = this.handleInput.bind(this)
  this.download = this.download.bind(this)
  this.downloadpoolingmatrixcolor = this.downloadpoolingmatrixcolor.bind(this)
  this.handleFocus = this.handleFocus.bind(this)
  this.handleClose = this.handleClose.bind(this)  
  this.evil = this.evil.bind(this)
}
evil(fn)
{
  return new Function('return ' + fn)();
}

download()
{
  console.log(this.state.selectedKit)
  console.log(this.state.selectedMachine)
  console.log(this.state.totalSamples)
  console.log(this.state.prevalanceRate)
  console.log(this.state.testconductedby)
  this.setState({showspinner:true})
  if (this.props.modalType === 'new') {
    axios.post(url["BASE_API_URL"]+ 'lab/' + this.state.labId + '/test/',{
      "data":{
                  "type": "test",
                  "attributes": {
                      "labId": 1,
                      "nsamples": this.evil(this.state.totalSamples),
                      "prevalence": this.evil(this.state.prevalanceRate),
                      "remark": this.state.remarks
                  },
                  "relationships": {
                      "assignedTo": {
                          "data": {
                              "type": "user",
                              "id": ""+this.state.testconductedby
                          }
                      },
                      "status": {
                          "data": {
                              "type": "status",
                              "id": "3"
                          }
                      },
                      "testKit": {
                          "data": {
                              "type": "testKit",
                              "id": this.state.selectedKit
                          }
                      },
                      "machineType": {
                          "data": {
                              "type": "machineType",
                              "id": this.state.selectedMachine,
                          }
                      }
                  }
              }
    },{
    headers:{
      "Authorization":'Bearer '+ JSON.parse(localStorage.getItem("user"))['token'],
      'Content-Type': 'application/vnd.api+json'
    }})
    .then(response => {
      const link = document.createElement('a');
      link.href = response.data["pooling_matrix_download_url"];
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      this.handleClose()
    }).then(
      )
      .catch(function (error) {
      console.log(error);
    });
  } else {
    
    axios.put(url["BASE_API_URL"]+ 'lab/' + this.state.labId + '/test/' + this.state.testId + '/', {
      "data":{
                  "type": "test",
                  "id": this.state.testId,
                  "attributes": {
                      "labId": 1,
                      "nsamples": this.evil(this.state.totalSamples),
                      "prevalence": this.evil(this.state.prevalanceRate),
                      "remark": this.state.remarks
                  },
                  "relationships": {
                      "assignedTo": {
                          "data": {
                              "type": "user",
                              "id": ""+this.state.testconductedby
                          }
                      },
                      "status": {
                          "data": {
                              "type": "status",
                              "id": "3"
                          }
                      },
                      "testKit": {
                          "data": {
                              "type": "testKit",
                              "id": this.state.selectedKit
                          }
                      },
                      "machineType": {
                          "data": {
                              "type": "machineType",
                              "id": this.state.selectedMachine,
                          }
                      }
                  }
              }
    },{
    headers:{
      "Authorization":'Bearer '+ JSON.parse(localStorage.getItem("user"))['token'],
      'Content-Type': 'application/vnd.api+json'
    }})
    .then(response => {
      const link = document.createElement('a');
      link.href = response.data["pooling_matrix_download_url"];
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      this.handleClose()
    }).then(
      )
      .catch(function (error) {
      console.log(error);
    });
  }
}
downloadpoolingmatrixcolor()
{
  return ((this.evil(this.state.totalSamples) > 0) && (this.evil(this.state.prevalanceRate) > 0) && (this.evil(this.state.prevalanceRate)<100) && (Number.isInteger(this.evil(this.state.totalSamples))))
}
handleInput(event)
{
  this.setState({
    [event.target.name]:event.target.value
  })
}

handleFocus(event)
{
  if(event.target.name==="prevalanceRate")
  {
    this.setState({showtriggerprevalanceRate:true})
  }
  else
  {
    this.setState({showtriggerprevalanceRate:false})
  }
  if(event.target.name==="totalSamples")
  {
    this.setState({showtriggersamples:true})
  }
  else
  {
    this.setState({showtriggersamples:false})
  }
}

componentDidMount()
{
  
  axios.get(url["BASE_API_URL"]+'user/'+this.state.testconductedby+'/',{headers:{
    'Authorization':'Bearer '+ JSON.parse(localStorage.getItem("user"))['token']
  }
  }).then(res => {
    console.log(res.data)
    this.setState({labId:res.data['id']})
  }).catch(function(error){
    console.log(error)
  })
  // this.setState({machine:testdataApi.machine()})
  // this.setState({kit:testdataApi.kit()})
  // this.setState({testConductedList:testdataApi.userlist()})
}

render()
{
  return (
    <div>
      <div className="RectangleParent">
        <Container>
          <Row> 
            <Col xs lg="6" className="justify-content-md-center">New Pool Test</Col>
            <Col xs lg="4"></Col>
            <Col xs lg="2">         
              <button type="button" className="close" aria-label="Close" onClick={this.handleClose}><span aria-hidden="true">&times;</span></button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="Rectangle1">
        <Container>
          <Row>
            <Col xs lg="4">KIT TYPE</Col>           
          </Row>
          <Row>
            <Col xs lg="4">
              <DropdownContent name="selectedKit" list={this.state.kit} onChange={this.handleInput} onFocus={this.handleFocus} currentvalue={this.state.selectedKit}/>      
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs lg="4">MACHINE TYPE</Col>           
          </Row>
          <Row>
            <Col xs lg="4">
              <DropdownContent name="selectedMachine" list={this.state.machine} onChange={this.handleInput} onFocus={this.handleFocus} currentvalue={this.state.selectedMachine}/>      
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs lg="2">Total Samples</Col> 
            <Col xs lg="3">Prevalance Rate</Col>           
          </Row>
          <Row>
            <Col xs lg="2">
              <InputGroup className="mb-2">
                <FormControl
                  type="number"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  step="1"
                  min="0"
                  name="totalSamples"   
                  onChange={this.handleInput}  
                  ref={this.state.triggersamples}
                  onFocus={this.handleFocus}
                  value={(this.state.totalSamples === 0)?null:this.state.totalSamples}
                />
              </InputGroup>
              <Overlay target={this.state.triggersamples.current} show={this.state.showtriggersamples} placement="left">
                {(props) => (
                  <Tooltip id="trigger samples" {...props}>
                    Only the number of samples to be tested against the positive controls.
                  </Tooltip>
                )}
              </Overlay>
            </Col>
            <Col xs lg="3">
              <InputGroup className="mb-2">
                <FormControl
                  type="number"
                  placeholder="Percentage"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  max="100"
                  min="0"
                  name="prevalanceRate"
                  onChange={this.handleInput}
                  ref={this.state.triggerprevalanceRate}
                  onFocus={this.handleFocus}
                  value={(this.state.prevalanceRate === 0)?null:this.state.prevalanceRate}
                />
              </InputGroup>
              <Overlay target={this.state.triggerprevalanceRate.current} show={this.state.showtriggerprevalanceRate} placement="right">
                {(props) => (
                  <Tooltip id="trigger prevalance rate" {...props}>
                    Prevalance Rate should be less than 20% <a href="mailto:algorithmicbiologics@gmail.com">Contact Us</a>
                  </Tooltip>
                )}
              </Overlay>
            </Col>
          </Row>
          <br/>
        </Container>        
      </div>
      <div className="Rectangle2">
        <Container> 
          <Row>
            <Col xs lg="3">
              Test ID
            </Col>
            <Col xs lg="4">
              {this.state.testId}
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs lg="3">
              Test Conducted By
            </Col>
            <Col xs lg="3">
              <DropdownContent name="testconductedby" list={this.state.testConductedList} onChange={this.handleInput} onFocus={this.handleFocus} currentvalue={this.state.testconductedby}/>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs lg="3">
              Test Remarks
            </Col>
            <Col xs lg="9">
              {/* <div style={{float: "left",width: "100%;"}}>
                <textarea style={{width:"100%",maxwidth:"100%"}} name="remarks" placeholder="Write your remarks here" onChange={this.handleInput} rows="4" onFocus={this.handleFocus}></textarea>
              </div> */}
              <textarea id="remarks" name="remarks" placeholder="Write your remarks here" value={(this.state.remarks === '') ? null : this.state.remarks} onChange={this.handleInput} rows={5} cols={window.innerWidth/30} onFocus={this.handleFocus}></textarea>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="Rectangle2">
        <Container>
          <Row>
            <br/>
            <Col xs lg="3">
              <button className="endbuttons" onClick={this.handleClose}>Close</button>
            </Col>
            <Col xs lg="5"></Col>
            <Col xs lg="4">
              {(this.state.showspinner)?
              <button className="downloadpoolingmatrix" type="button">
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Download will start soon...
              </button>:
              <button className="downloadpoolingmatrix" onFocus={this.handleFocus} onClick={this.download} disabled={!this.downloadpoolingmatrixcolor()}>Save Test and Download Matrix</button>
              }
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    );
}
}
