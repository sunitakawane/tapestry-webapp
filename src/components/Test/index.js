import React from 'react';
import {Container,Row,Col,InputGroup,FormControl} from 'react-bootstrap';

import './styles.scss'
import DropdownContent from './dropdown/Dropdown';


export default class Test extends React.Component{

constructor(props){
  super(props)
  this.handleClose = props.handleClose;
  this.state ={
    testid:'',
    remarks:'',
    testconductedby:'Anirudha',
    totalsamples:'',
    prevalancerate:'',
    machine:'Biorad q PCr',
    kit:'P12 BioTest'
  }
  this.handleInput = this.handleInput.bind(this)
}

handleInput(event)
{
  console.log(this.state)
  this.setState({
    [event.target.name]:event.target.value
  })
}

render()
{
  return (
    <div>
      <div className="RectangleParent">
        <Container>
          <Row className="justify-content-md-center"> 
            <Col xs lg="2"></Col>
            <Col xs lg="4" className="justify-content-md-center">Test Configuration</Col>
            <Col xs lg="4"></Col>
            <Col xs lg="2">         
              <button type="button" class="close" aria-label="Close" onClick={this.handleClose}><span aria-hidden="true">&times;</span></button>
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
              <DropdownContent name="kit" value={this.state.kit} onChange={this.handleChange} item={["P12 BioTest","ABGun RT-PCR","In"]}/>      
            </Col>
          </Row>
          <Row className="justify-content-md-right">
            <Col xs lg="2">Machine TYPE</Col>           
          </Row>
          <Row>
            <Col xs lg="2">
              <DropdownContent name="kit" value={this.state.machine} item={["ABGun RT-PCR","In"]}/>      
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
                />
              </InputGroup>
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
              <DropdownContent value={this.state.testconductedby} item={[]}/>
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
              <button id="downloadbutton" className="downloadpoolingmatrix">Download Pooling matrix</button>
                              
            </Col>
          </Row>
        </Container>
        <Container>
          {/* <Grid item xs={1}>
          </Grid>
          <Grid item xs={2}>
            <button className="endbuttons">Close</button>
          </Grid>
          <Grid item xs={7}>
          </Grid>
          <Grid item xs={2}>
            <button className="endbuttons">Done</button>
          </Grid> */}
          <Row className="justify-content-md-center">
            <br/>
            <Col xs lg="2">
              <button className="endbuttons" onClick={this.handleClose}>Close</button>
            </Col>
            <Col xs lg="7"></Col>
            <Col xs lg="2">
              <button className="endbuttons">Done</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    );
}
}
