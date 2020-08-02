import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';

import './style.css'
const ProgressBar = (props) => {
    const { value, completed,bgcolor,handleClose } = props;
  
    const containerStyles = {
      width: '100%',
      borderRadius: '3px',
      background: '#F4F4F4'
    }
  
    const fillerStyles = {
      height: '100%',
      borderRadius: 'inherit',
      width: `${completed}%`,
      background: bgcolor,
    }
  
    const labelStyles = {
      fontsize:'20px',
      color: 'white',
      fontWeight: 'bold'
    }

    const close = {
      fontsize: '30px',
      padding:'15px 10px',
      top:'10px',
      color: 'black',
      fontWeight: 'bold'
    }

    return (
      <div style={containerStyles}>
        <div className="twocolordiv">
            <Container>
              <Row>
                <Col xs lg="6">
                  <span style={labelStyles}>{`${value}`}</span>
                </Col>
                <Col xs lg="4">
                </Col>
                <Col xs lg="2">
                  <span style={close} onClick={handleClose}>&times;</span>
                </Col>
              </Row>
            </Container>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;