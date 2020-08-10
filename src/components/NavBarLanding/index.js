import React from 'react';
import { Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';

import "./NavBarLanding.scss";
import "../../index.scss";

function NavBarLanding(props) {
    return (
        <Navbar>
            <Container fluid>
            <Navbar.Brand href="#home">TAPESTRY POOLING</Navbar.Brand>
            <Nav className='m-auto nav align-content-md-end' activeKey={props.activepage}>
                <Nav.Item>
                    <Nav.Link href="/ongoingtests">Ongoing Tests</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/completedTests">
                        Completed Tests{/*'\u00A0'
                        <sup><Badge pill variant='light' className='bdg-prim'>{props.count ? props.count : ''}</Badge></sup>*/}
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <NavDropdown title={props.userName} id="user-nav-dropdown" alignRight>
                {/* Dropdown links to be added */}
                <NavDropdown.Item >
                    <h6>{props.userName}</h6>
                    <p className='text-muted'>{props.labName}</p>
                </NavDropdown.Item>
                <hr className='firstline'/>
                <NavDropdown.Item href="/onboarding">
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

export default NavBarLanding;