import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Container, Button } from 'react-bootstrap';

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
                        <Nav.Link href="/testSamples">Test Samples</Nav.Link>
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
                </NavDropdown>   
                </Container>         
            </Navbar>
        );
    }
}

export default NavBarLanding;