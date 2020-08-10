import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';

const ProgressBar = (props) => {
    const { value, completed,bgcolor,handleClose } = props;
    console.log(completed)
    console.log(value)
    console.log(bgcolor)
    console.log(handleClose)
    const containerStyles = {
      height:"40px",
      width: ''+completed+'%',
      borderRadius: '3px',
      background: bgcolor,
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
      <div style={containerStyles}>            
        {(100>90)?
          <Container>
            <Row>
              <span style={close} onClick={handleClose}><span style={labelStyles}>{`${value}`} </span>&times;</span>
            </Row>
          </Container>:
          <Container>
            <Row>
              <Col xs lg="10">
                <span style={labelStyles}>{`${value}`}</span>
              </Col>
              <Col xs lg="2">
              <span style={close} onClick={handleClose}>&times;</span>
              </Col>
            </Row>
          </Container>
        }
      </div>
    );
  };
  
  export default ProgressBar;
