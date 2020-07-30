import React from 'react';
import {Container,Row,Col,InputGroup,FormControl,Overlay} from 'react-bootstrap';
import Tooltip from 'react-bootstrap/Tooltip';
import axios from 'axios';

import './styles.scss'
import DropdownContent from './dropdown/Dropdown';
// import Machine from './dropdown/Machine';






export default class Test extends React.Component{

constructor(props){
  super(props)
  this.handleClose = props.handleClose;
  this.state ={
    testid:23432,
    remarks:'',
    testconductedlist:['Anirudha',"Prantik","Radha"],
    testconductedby:'',
    totalsamples:'',
    prevalancerate:'',
    machine:[],
    kit:[],
    selectedkit:'',
    selectedmachine:'',
    showtriggerprevalancerate:false,
    showtriggersamples:false,
    triggerprevalancerate:React.createRef(),
    triggersamples:React.createRef(),
    done:false
  }
  this.handleInput = this.handleInput.bind(this)
  this.download = this.download.bind(this)
  this.downloadpoolingmatrixcolor = this.downloadpoolingmatrixcolor.bind(this)
  this.handleFocus = this.handleFocus.bind(this)
  this.evil = this.evil.bind(this)
}
componentDidMount() {
  axios.get('https://tapestry-pooling-284109.ew.r.appspot.com/machine-type/',{
    headers:{
        'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InRlc3RAdGVzdC5jb20iLCJleHAiOjE1OTYwMTA2NjMsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsIm9yaWdfaWF0IjoxNTk2MDA3MDYzfQ.exeWzXCMNG6OOTnmQWYvEW-CPkKs7RMM3WoJidSTmM4'
    }
    })
    .then(res => {
      this.setState({machine:["96wells osmething"]});
      this.setState({machine:["96wells osmething"]});  
    })
  axios.get('https://tapestry-pooling-284109.ew.r.appspot.com/test-kit/',{
    headers:{
        'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InRlc3RAdGVzdC5jb20iLCJleHAiOjE1OTYwMTA2NjMsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsIm9yaWdfaWF0IjoxNTk2MDA3MDYzfQ.exeWzXCMNG6OOTnmQWYvEW-CPkKs7RMM3WoJidSTmM4'
    }
    })
    .then(res => {
      this.setState({kit:res.data.results});
  
    })
}

evil(fn)
{
  return new Function('return ' + fn)();
}

download()
{
  this.setState({done:!this.state.done})
  console.log(this.state.testconductedby)
  console.log(this.state.totalsamples)
  console.log(this.state.selectedkit)
  console.log(this.state.selectedmachine)
  console.log(this.state.remarks)
  console.log(this.state.prevalancerate)
  console.log(this.state.totalsamples)
  axios.post('https://us-central1-tapestry-pooling-284109.cloudfunctions.net/tapestry-matrix-generation',{
    nsamples: this.evil(this.state.totalsamples),
    prevalance: this.evil(this.state.prevalancerate),
    genes: "orf, rdrp",
    testid: this.testid,
    lab_name: "test_lab"
  },{
    "Authorization":'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InRlc3RAdGVzdC5jb20iLCJleHAiOjE1OTYwMDYyMjcsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsIm9yaWdfaWF0IjoxNTk2MDAyNjI3fQ.v9BZPb6X4Z1_7HzwiBGPi-4D3_Wxf58HjwFRZqrQWpY'
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
              <DropdownContent name="testconductedby" list={this.state.testconductedlist} onChange={this.handleInput} onFocus={this.handleFocus}/>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs lg="3">
              TEST Remarks
            </Col>
            <Col xs lg="8">
              <textarea name="remarks" placeholder="Write your remarks here" onChange={this.handleInput} rows="4" cols="50" onFocus={this.handleFocus}></textarea>
            </Col>
          </Row>
          {(!this.state.done)?
            <Row>
              <Col xs lg="3"></Col>
              <Col xs lg="6">
                <br/>
                <button id="downloadbutton" disabled={!this.downloadpoolingmatrixcolor()} className="downloadpoolingmatrix" onClick={this.download} onFocus={this.handleFocus}>Generate Pooling matrix</button>
              </Col>
            </Row>:
            <Row>
              <Col xs lg="3"></Col>
              <Col xs lg="6">
                <br/>
                <p>&#10004;Files Generated</p>
              </Col>
              <Col xs lg="3">
                <br/>
                <p style={{color:'#1EC491',font:16,fontFamily:'Source Sans Pro'}}>Available Genes</p>  
              </Col>
            </Row>
          }
        </Container>
      </div>
      <div className="Rectangle2">
        <Container>
          <Row>
            <br/>
            <Col xs lg="3">
              <button className="endbuttons" onClick={this.handleClose}>Close</button>
            </Col>
            <Col xs lg="6"></Col>
            <Col xs lg="3">
              <button className="endbuttons" disabled={!this.state.done}>Save Test</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    );
}
}
