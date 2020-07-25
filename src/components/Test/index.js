import React from 'react';
import {Container,Row,Col,InputGroup,FormControl,Overlay} from 'react-bootstrap';

import './styles.scss'
import DropdownContent from './dropdown/Dropdown';


export default class Test extends React.Component{

constructor(props){
  super(props)
  this.handleClose = props.handleClose;
  this.state ={
    testid:'',
    remarks:'',
    testconductedby:['Anirudha'],
    totalsamples:'',
    prevalancerate:'',
    machine:["ABGun RT-PCR","In"],
    kit:["P12 BioTest","ABGun RT-PCR","In"],
    showtrigger:false,
    triggercurrent:React.createRef(),
    downloadpoolingmatrix:false,
    done:false
  }
  this.handleInput = this.handleInput.bind(this)
  this.changedownloadpoolingmatrixcolor = this.changedownloadpoolingmatrixcolor.bind(this)
  this.download = this.download.bind(this)
}
download()
{

  this.setState({done:!this.state.done})
}
changedownloadpoolingmatrixcolor()
{
  if((this.state.totalsamples === '') || (this.state.prevalancerate === ''))
  {
    this.setState({downloadpoolingmatrix:false})
  }
  else
  {
    this.setState({downloadpoolingmatrix:true})
  }
}

handleInput(event)
{
  console.log(this.state)
  if(event.target.name === "prevalancerate")
  {
    if(event.target.value>20)
    {
      this.setState({showtrigger:true})
    }
    else
    {
      this.setState({showtrigger:false})
    }
  }
  this.setState({
    [event.target.name]:event.target.value
  })
  this.changedownloadpoolingmatrixcolor()
}

render()
{
  return (
    <div>
      <div className="RectangleParent">
        <Container>
          <Row className="justify-content-md-center"> 
            <Col xs lg="2"></Col>
            <Col xs lg="4" className="justify-content-md-center">New Pool Test</Col>
            <Col xs lg="4"></Col>
            <Col xs lg="2">         
              <button type="button" className="close" aria-label="Close" onClick={this.handleClose}><span aria-hidden="true">&times;</span></button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="Rectangle1">
        <Container>
          <Row className="justify-content-md-right">
            <Col xs lg="2">KIT TYPE</Col>           
          </Row>
          <Row>
            <Col xs lg="2">
              <DropdownContent name="kit" value={this.state.kit[0]} onChange={this.handleChange} item={this.state.kit}/>      
            </Col>
          </Row>
          <Row className="justify-content-md-right">
            <Col xs lg="2">Machine TYPE</Col>           
          </Row>
          <Row>
            <Col xs lg="2">
              <DropdownContent name="kit" value={this.state.machine[0]} item={this.state.machine}/>      
            </Col>
          </Row>
          <Row>
            <Col xs lg="2">Total Samples</Col> 
            <Col xs lg="1"></Col>           
            <Col xs lg="2">Prevalance Rate</Col>           
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
                />
              </InputGroup>
            </Col>
            <Col xs lg="1"></Col>
            <Col xs lg="2">
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
                  ref={this.state.triggercurrent}
                />
              </InputGroup>
              <Overlay target={this.state.triggercurrent.current} show={this.state.showtrigger} placement="right">
                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                  <div
                    {...props}
                    style={{
                      backgroundColor: 'rgba(255, 100, 100, 0.85)',
                      padding: '2px 10px',
                      color: 'white',
                      borderRadius: 3,
                      ...props.style,
                    }}
                  >
                    Prevalance Rate should be between 5 to 20 %
                  </div>
                )}
              </Overlay>
            </Col>
          </Row>
        </Container>        
      </div>
      <div className="Rectangle2">
        <Container> 
          <Row className="justify-content-md-center">
            <Col xs lg="2">
              TEST ID
            </Col>
            <Col xs lg="2">
              <InputGroup className="mb-2">
                <FormControl
                  placeholder="TEST ID"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="testid"
                  onChange={this.handleInput}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col xs lg="4">
            </Col>
            <Col xs lg="2">
              TEST Conducted By
            </Col>
            <Col xs lg="2">
              <DropdownContent value={this.state.testconductedby[0]} item={this.state.testconductedby}/>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col xs lg="4">
            </Col>
            <Col xs lg="2">
              TEST Remarks
            </Col>
            <Col xs lg="6">
              <InputGroup size="lg">
                <FormControl name="remarks" onChange={this.handleInput} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup>                
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="4">
            </Col>
            <Col xs lg="6">
              <br/>
              <button id="downloadbutton" disabled={!this.state.downloadpoolingmatrix} className="downloadpoolingmatrix" onClick={this.download}>Download Pooling matrix</button>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-md-center">
            <br/>
            <Col xs lg="2">
              <button className="endbuttons" onClick={this.handleClose}>Close</button>
            </Col>
            <Col xs lg="7"></Col>
            <Col xs lg="2">
              <button className="endbuttons" disabled={!this.state.done}>Start Test</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    );
}
}
