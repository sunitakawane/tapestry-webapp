import React, { Component } from 'react';
import { Container, Row, Col, Form, InputGroup, FormControl, Button, Card, FormGroup } from 'react-bootstrap';
/*import Select from 'react-select'*/

import NavBarLanding from '../../../components/NavBarLanding'
import TableLanding from '../../../components/TableLanding'
import getSVG from '../../../utils/getSVG'
import './completedTests.scss'

class CompletedTests extends Component {
    state = {
        userId : 'Anirudha',
        labName: 'Vedanta Memorial Hospitals, Biogen Labs',
        count: 0,
        jsonoutput: [
            {'TEST ID': 27435, 'NUMBER OF SAMPLES': 487, 'ASSIGNED TO': 'Harmen Potter', 'POSITIVE SAMPLES': 4, 'UNDETERMINED SAMPLES': 2,
            'component_R' : {'type': 'Button', 'text': 'View results', 'color': 'green', 'view': 'Results'},
            'component_O' : {'type': 'Button', 'text': 'Menu', 'color': 'green', 'view': 'Options_CT'}},
            {'TEST ID': 27435, 'NUMBER OF SAMPLES': 487, 'ASSIGNED TO': 'Harmen Potter', 'POSITIVE SAMPLES': 4, 'UNDETERMINED SAMPLES': 2,
            'component_R' : {'type': 'Button', 'text': 'View results', 'color': 'green', 'view': 'Results'},
            'component_O' : {'type': 'Button', 'text': 'Menu', 'color': 'green', 'view': 'Options_CT'}},
            {'TEST ID': 27435, 'NUMBER OF SAMPLES': 487, 'ASSIGNED TO': 'Harmen Potter', 'POSITIVE SAMPLES': 4, 'UNDETERMINED SAMPLES': 2,
            'component_R' : {'type': 'Button', 'text': 'View results', 'color': 'green', 'view': 'Results'},
            'component_O' : {'type': 'Button', 'text': 'Menu', 'color': 'green', 'view': 'Options_CT'}},
            {'TEST ID': 27435, 'NUMBER OF SAMPLES': 487, 'ASSIGNED TO': 'Harmen Potter', 'POSITIVE SAMPLES': 4, 'UNDETERMINED SAMPLES': 2,
            'component_R' : {'type': 'Button', 'text': 'View results', 'color': 'green', 'view': 'Results'},
            'component_O' : {'type': 'Button', 'text': 'Menu', 'color': 'green', 'view': 'Options_CT'}},
        ],
        filter_options: [{value:'this week', label:'This week'}],
        tests_comp: 73,
        your_tests: 24,
        samp_tested: 23854,
        your_samp: 284,
        pos_samp: 138,
        und_samp: 88,
    };
    render() {
        return (
            <div className='bg-light'>
                <NavBarLanding activepage='/completedTests' userId={this.state.userId} labName={this.state.labName} count={this.state.count}/>
                <Container fluid>    
                <Row className='mt-3'>
                    <Col xs={6}>
                        <Row>
                            <Col xs={4}>
                                <h5>TEST SUMMARY</h5>
                            </Col>
                            <Col xs={3}>
                                {/*<Select className='filter-btn' options={this.state.filter_options} defaultValue={this.state.filter_options[0]}/>*/}
                                <FormGroup>
                                <FormControl as="select" className='filter-btn'>
                                    <option value="this_week">This week</option>
                                    <option value="this_month">This month</option>
                                </FormControl>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={{span:2, offset:4}}>
                        <Button bsPrefix='ml-3 pl-4 pr-4 bg-tapestry btn'>+ New Test</Button>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col xs={3}>
                        <Card className='border-prim' style={{borderLeft: '6px solid'}}>
                            <Card.Body>
                                <Card.Subtitle className='text-bld'>Total tests conducted</Card.Subtitle>
                                <Card.Title className='text-prim text-bld'>{this.state.tests_comp}</Card.Title>
                                <Card.Text>Your tests: {this.state.your_tests}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={3}>
                        <Card className='border-prim' style={{borderLeft: '6px solid'}}>
                            <Card.Body>
                                <Card.Subtitle className='text-bld'>Samples tested</Card.Subtitle>
                                <Card.Title className='text-prim text-bld'>{this.state.samp_tested}</Card.Title>
                                <Card.Text>Your tested samples: {this.state.your_samp}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={3}>
                        <Card className='border-red' style={{borderLeft: '6px solid'}}>
                            <Card.Body>
                                <Card.Subtitle className='text-bld'>Positive Samples</Card.Subtitle>
                                <Card.Title className='text-red text-bld'>{this.state.pos_samp}</Card.Title>
                                <Card.Text>{'\u00A0'}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={3}>
                        <Card className='border-black' style={{borderLeft: '6px solid'}}>
                            <Card.Body>
                                <Card.Subtitle className='text-bld'>Undetermined Samples</Card.Subtitle>
                                <Card.Title className='text-bld'>{this.state.und_samp}</Card.Title>
                                <Card.Text>{'\u00A0'}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col xs={6}>
                        <h5>COMPLETED TESTS</h5>
                    </Col>
                    <Col xs={{span:3, offset:3}}>
                        <Form>
                            <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
                                Search
                            </Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>
                                        {getSVG('search')}
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl  id="inlineFormInputGroupUsername2" placeholder="Search TEST ID" />
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
                <Row className='mt-3 ml-3 mr-3'>
                    <Col>
                        <TableLanding jsonoutput={this.state.jsonoutput}/>
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
}

export default CompletedTests;