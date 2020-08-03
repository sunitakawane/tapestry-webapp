import React from 'react';
import {Container,Row,Col,InputGroup,FormControl,Overlay} from 'react-bootstrap';
import Tooltip from 'react-bootstrap/Tooltip';
import axios from 'axios';

import './styles.scss'
import DropdownContent from './dropdown/Dropdown';


export default class Test extends React.Component{

constructor(props){
  super(props)
  this.handleClose = props.handleClose;
  console.log(localStorage.getItem("user"))
  console.log(localStorage.getItem("labid"))
  this.state ={
    wells:props.wells,
    machine:props.machine,
    kit:props.kit,
    testconductedlist:props.testconductedlist,
    remarks:props.remarks,
    testid:props.testid,    
    totalsamples:props.totalsamples,
    prevalancerate:props.prevalancerate,
    testconductedby:props.userName,
    selectedkit:props.selectedkit,
    selectedmachine:props.selectedmachine,
    showtriggerprevalancerate:false,
    showtriggersamples:false,
    triggerprevalancerate:React.createRef(),
    triggersamples:React.createRef(),
  }
  this.handleInput = this.handleInput.bind(this)
  this.download = this.download.bind(this)
  this.downloadpoolingmatrixcolor = this.downloadpoolingmatrixcolor.bind(this)
  this.handleFocus = this.handleFocus.bind(this)
  this.evil = this.evil.bind(this)
}
evil(fn)
{
  return new Function('return ' + fn)();
}

download()
{
  axios.post('https://us-central1-tapestry-pooling-284109.cloudfunctions.net/tapestry-matrix-generation',{
    nsamples: this.evil(this.state.totalsamples),
    prevalance: this.evil(this.state.prevalancerate),
    genes: "orf, rdrp",
    // testid: this.testid,
    lab_name: "1234"
  },{
    "Authorization":'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJ1c2VybmFtZSI6ImFkbWluQHRlc3QuY29tIiwiZXhwIjoxNTk2NDQzODQwLCJlbWFpbCI6ImFkbWluQHRlc3QuY29tIiwib3JpZ19pYXQiOjE1OTY0NDAyNDB9.rJAGREe2PnTMWf2ldiSgtyYjE9WoA0Zr1C-WO7rXz38'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
downloadpoolingmatrixcolor()
{
  return ((this.evil(this.state.totalsamples) > 0) && (this.evil(this.state.prevalancerate) > 0) && (this.evil(this.state.prevalancerate)<100) && (Number.isInteger(this.evil(this.state.totalsamples))))
}
handleInput(event)
{
  this.setState({
    [event.target.name]:event.target.value
  })
}

handleFocus(event)
{
  if(event.target.name==="prevalancerate")
  {
    this.setState({showtriggerprevalancerate:true})
  }
  else
  {
    this.setState({showtriggerprevalancerate:false})
  }
  if(event.target.name==="totalsamples")
  {
    this.setState({showtriggersamples:true})
  }
  else
  {
    this.setState({showtriggersamples:false})
  }
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
              <DropdownContent name="selectedkit" list={this.state.kit} onChange={this.handleInput} onFocus={this.handleFocus}/>      
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs lg="4">MACHINE TYPE</Col>           
          </Row>
          <Row>
            <Col xs lg="4">
              <DropdownContent name="selectedmachine" list={this.state.machine} onChange={this.handleInput} onFocus={this.handleFocus}/>      
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
                  name="totalsamples"   
                  onChange={this.handleInput}  
                  ref={this.state.triggersamples}
                  onFocus={this.handleFocus}
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
                  name="prevalancerate"
                  onChange={this.handleInput}
                  ref={this.state.triggerprevalancerate}
                  onFocus={this.handleFocus}
                />
              </InputGroup>
              <Overlay target={this.state.triggerprevalancerate.current} show={this.state.showtriggerprevalancerate} placement="right">
                {(props) => (
                  <Tooltip id="trigger prevalance rate" {...props}>
                    Prevalance Rate should be less than 20%
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
              {this.state.testid}
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs lg="3">
              Test Conducted By
            </Col>
            <Col xs lg="3">
              {this.state.testconductedby}
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs lg="3">
              Test Remarks
            </Col>
            <Col xs lg="8">
              <textarea name="remarks" placeholder="Write your remarks here" onChange={this.handleInput} rows="4" cols="50" onFocus={this.handleFocus}></textarea>
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
              <button className="downloadpoolingmatrix" onClick={this.download} disabled={!this.downloadpoolingmatrixcolor()}>Save Test and Download Matrix</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    );
}
}
