import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Container, Button, Col, Row } from 'react-bootstrap';

import "./NavBarLanding.scss";
import getSVG from "../../utils/getSVG"

class NavBarLanding extends Component {
    render() {
        return (
            <Navbar>
                <Container fluid>
                <Navbar.Brand href="#home">TAPESTRY POOLING</Navbar.Brand>
                <Nav className='m-auto nav align-content-md-end' activeKey={this.props.activepage}>
                    <Nav.Item>
                        <Nav.Link href="/ongoingtests">Ongoing Tests</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/completedTests">Completed Tests</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Button variant='muted'>
                    {getSVG('notify')}
                </Button>
                <NavDropdown title={this.props.userId} id="user-nav-dropdown" alignRight>
                    {/* Dropdown links to be added */}
                    <NavDropdown.Item >
                        <Row>
                        <Col xs={8}>
                            <h6>{this.props.userId}</h6>
                            <p className='text-muted'>{this.props.labName}</p>
                        </Col>
                        <Col xs={{span:2, offset:2}}>
                            <Row>
                                <a href="/ongoingtests">edit</a>
                            </Row>
                        </Col>
                        </Row>
                    </NavDropdown.Item>
                    {/*<NavDropdown.Divider />*/}
                    <hr className='firstline'/>
                    <NavDropdown.Item href="#">
                        Default Settings
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                        + Add new lab member
                    </NavDropdown.Item>
                    <hr className='secondline'/>
                    <NavDropdown.Item href="#" disabled>
                        Product Tour
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#" disabled>
                        Help and Support
                    </NavDropdown.Item>
                    <hr className='secondline' />
                    <NavDropdown.Item href="#">
                        Logout
                    </NavDropdown.Item>
                </NavDropdown>   
                </Container>         
            </Navbar>
        );
    }
}

export default NavBarLanding;