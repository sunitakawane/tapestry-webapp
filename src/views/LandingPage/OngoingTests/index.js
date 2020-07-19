import React, { Component } from 'react';
import { Container, Button, Form, FormControl, InputGroup, Row, Col} from 'react-bootstrap';

import NavBarLanding from '../../../components/NavBarLanding'
import TableLanding from '../../../components/TableLanding'
import './ongoingTests.scss'
import getSVG from "../../../utils/getSVG"

class OngoingTests extends Component {
    state = {
        userId : 'Anirudha',
        labName: 'Vedanta Memorial Hospitals, Biogen Labs',
        onGoingTests: 25,
        jsonoutput: [
            {'Test ID': 27435, 'Number of Samples': 487, 'Assigned To': 'Harmen Potter', 'Status': 'In progress'},
            {'Test ID': 27435, 'Number of Samples': 487, 'Assigned To': 'Harmen Potter', 'Status': 'In progress'},
            {'Test ID': 27435, 'Number of Samples': 487, 'Assigned To': 'Harmen Potter', 'Status': 'In progress'},
            {'Test ID': 27435, 'Number of Samples': 487, 'Assigned To': 'Harmen Potter', 'Status': 'In progress'},
        ]
    };
    render() {
        return (          
            <div>
            <NavBarLanding activepage='/ongoingtests' userId={this.state.userId} labName={this.state.labName}/>
            <Container fluid>
                <Row className='mt-3'>
                    <Col xs={6}>
                        <Row>
                            <Col xs={4} className='my-auto'>
                                <h5>ONGOING TESTS ({this.state.onGoingTests})</h5>
                            </Col>
                            <Col xs={8}>
                                <Row>
                                    <p className='my-auto'>Filters</p>
                                    <Button variant='muted' className='ml-3 pl-4 pr-4 border'>All</Button>
                                    <Button variant='muted' className='ml-3 pl-4 pr-4 border'>Errors</Button>
                                    <Button variant='muted' className='ml-3 pl-4 pr-4 border'>In Progress</Button>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        <Row>
                            <Col xs={{span: 4, offset: 5}}>
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
                                        <FormControl  id="inlineFormInputGroupUsername2" placeholder="Search Pool ID" />
                                    </InputGroup>
                                </Form>
                            </Col>
                            <Col xs={3}>
                            <Button bsPrefix='ml-3 pl-4 pr-4 bg-tapestry btn'>+ New Test</Button>
                            </Col>
                        </Row>
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

export default OngoingTests;