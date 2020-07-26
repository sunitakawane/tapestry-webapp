import React from 'react';
import { Container, Row, Col, Form, InputGroup, FormControl, Button, Card, FormGroup } from 'react-bootstrap';
/*import Select from 'react-select'*/

import NavBarLanding from '../../../components/NavBarLanding'
import TableLanding from '../../../components/TableLanding'
import getSVG from '../../../utils/getSVG'
import './completedTests.scss'

function CompletedTests() {
    const userId = 'Anirudha'
    const labName = 'Vedanta Memorial Hospitals, Biogen Labs'
    const count = 0
    const jsonoutput = [
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
    ]
    const filter_options = [
        {value:'this week', label:'This Week'},
        {value:'this month', label:'This Month'},
        {value:'today', label: 'Today'}
    ]
    const tests_comp = 73
    const your_tests = 24
    const samp_tested = 23854
    const your_samp = 284
    const pos_samp = 138
    const und_samp = 88

    return (
        <div className='bg-light'>
            <NavBarLanding activepage='/completedTests' userId={userId} labName={labName} count={count}/>
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
                                    <FormControl as="select" className='filter-dd'>
                                        {filter_options.map((opt,index) =>{    
                                            return <option value={opt.value} key={index}>{opt.label}</option>
                                        })}
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
                        <Card className='border-prim'>
                            <Card.Body>
                                <Card.Subtitle className='text-bld'>Total tests conducted</Card.Subtitle>
                                <Card.Title className='text-prim text-bld'>{tests_comp}</Card.Title>
                                <Card.Text>Your tests: {your_tests}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={3}>
                        <Card className='border-prim'>
                            <Card.Body>
                                <Card.Subtitle className='text-bld'>Samples tested</Card.Subtitle>
                                <Card.Title className='text-prim text-bld'>{samp_tested}</Card.Title>
                                <Card.Text>Your tested samples: {your_samp}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={3}>
                        <Card className='border-red'>
                            <Card.Body>
                                <Card.Subtitle className='text-bld'>Positive Samples</Card.Subtitle>
                                <Card.Title className='text-red text-bld'>{pos_samp}</Card.Title>
                                <Card.Text>{'\u00A0'}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={3}>
                        <Card className='border-black'>
                            <Card.Body>
                                <Card.Subtitle className='text-bld'>Undetermined Samples</Card.Subtitle>
                                <Card.Title className='text-bld'>{und_samp}</Card.Title>
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
                        <TableLanding jsonoutput={jsonoutput}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CompletedTests;