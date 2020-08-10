import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';

const ProgressBar = (props) => {
    const { value, completed,bgcolor,handleClose } = props;
  
    const containerStyles = {
      height:"40px",
      width: '${completed}%',
      borderRadius: '3px',
      background: bgcolor,
      padding:"10px 10px"
    }

    const labelStyles = {
      fontsize:'20px',
      color: 'white',
      fontWeight: 'bold'
    }

    const close = {
      fontsize: '30px',
      padding:'20px 10px',
      height:'100%',
      top:'20px',
      color: 'black',
      fontWeight: 'bold'
    }

    return (      
      <div>
        {(completed>90)?
          <div style={containerStyles}>
            <Container>
              <Row>
                <Col xs lg="11">
                    <span style={labelStyles}>{`${value}`}</span>
                </Col>
                <Col xs lg="1">
                  <span style={close} onClick={handleClose}>&times;</span>
                </Col>
              </Row>
            </Container>
          </div>:
          <Container>
            <Row>
              <Col xs lg="11">
                <div style={containerStyles}>
                  <span style={labelStyles}>{`${value}`}</span>
                </div>
              </Col>
              <Col xs lg="1">
                <span style={close} onClick={handleClose}>&times;</span>
              </Col>
            </Row>
          </Container>
        }
      </div>
    );
  };
  
  export default ProgressBar;
