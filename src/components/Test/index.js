import React from 'react';
import {Container,Row,Col,InputGroup,FormControl} from 'react-bootstrap';

import './styles.scss'
import Machine from './dropdown/Dropdown';


export default function Test(props){
  // const showHideClassname = props.showtest? "RectangleParent display-block" : "RectangleParent display-none";
  // console.log(props.children)

  // if(true)
  // {
  return (
    <div>
      {/* <section className="modal-main">
        {props.children}
      </section> */}
      <div className="RectangleParent">
        <Container>
          <Row className="justify-content-md-center"> 
            <Col xs lg="2"></Col>
            <Col xs lg="4" className="justify-content-md-center">Test Configuration</Col>
            <Col xs lg="4"></Col>
            <Col xs lg="2">         
              <button type="button" class="close" aria-label="Close" onClick={props.handleClose}><span aria-hidden="true">&times;</span></button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="Rectangle1">
        <Container>
          <Row className="justify-content-md-right">
            <Col xs lg="2">KIT TYPE</Col>
            <Col xs lg="8"></Col>
            <Col xs lg="2">MACHINE</Col>            
          </Row>
          <Row className="justify-content-md-right">
            <Col xs lg="2">
              <button className="normalbuttons">ADD Covid-19</button>
            </Col>
            <Col xs lg="2">
              <button className="normalbuttons">P12 BioTest</button>
            </Col>
            <Col xs lg="2">
              <button className="normalbuttons">ESP32CORO</button>
            </Col>  
            <Col xs lg="4">
              <button className="normalbuttons">+ADD NEW KIT</button>
            </Col>           
            <Col xs lg="2">
              <Machine/>
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
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="2">
              TEST Conducted By
            </Col>
            <Col xs lg="2">
              <InputGroup className="mb-2">
                <FormControl
                  placeholder="Select"
                  aria-label="Select"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="2">
              <br/>
              TEST Remarks
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="8">
              <InputGroup size="lg">
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup>                
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="4">
            </Col>
            <Col xs lg="6">
              <br/>
              <button className="downloadpoolingmatrix">Download Pooling matrix</button>
                              
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
            <Col xs lg="2">
              <button className="endbuttons" onClick={props.handleClose}>Close</button>
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
  // }
  // else
  // {
  //   return(
  //   <div>
  //     {props.children}
  //   </div>
  //   );
  // }
}

// export default Test;