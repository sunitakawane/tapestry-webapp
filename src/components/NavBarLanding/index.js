import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Container, Button, Badge } from 'react-bootstrap';

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
                        <Nav.Link href="/completedTests">
                            Completed Tests{'\u00A0'}
                            <sup><Badge pill variant='light' className='bdg-prim'>{this.props.count ? this.props.count : ''}</Badge></sup>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Button variant='muted'>
                    {getSVG('notify')}
                </Button>
                <NavDropdown title={this.props.userId} id="user-nav-dropdown" alignRight>
                    {/* Dropdown links to be added */}
                    <NavDropdown.Item >
                        <h6>{this.props.userId}</h6>
                        <p className='text-muted'>{this.props.labName}</p>
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
                    <NavDropdown.Item href="/login">
                        Logout
                    </NavDropdown.Item>
                </NavDropdown>   
                </Container>         
            </Navbar>
        );
    }
}

export default NavBarLanding;