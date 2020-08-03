import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Form, InputGroup, FormControl, Button, Card, FormGroup,Modal } from 'react-bootstrap';
import { useSelector } from "react-redux";

import NavBarLanding from '../../../components/NavBar'
import TableLanding from '../../../components/TableLanding'
import getSVG from '../../../utils/getSVG'
import './completedTests.scss'
import '../../../index.scss'
import Test from '../../../components/Test';
import useTestModal from '../../../components/Test/showmodal';

import {gettestList,gettestconductedlist,getmachine,getkit} from '../../../redux/selectors/landingPageSelectors/testsSelectors'
import {getsummary} from '../../../redux/selectors/landingPageSelectors/summarySelectors'

function CompletedTests() {
    const {showtest, toggletest} = useTestModal();
    
    // Local states
    const testStatus='completed'
    
    const [search,setSearch] = useState('')
    const [jsonoutput, setJsonOutput] = useState([])
    
    const filter_options = [
        {value:'this week', label:'This Week'},
        {value:'this month', label:'This Month'},
        {value:'today', label: 'Today'}
    ]
    

    // Redux states
    const currentUserId = 12345
    const user = useSelector(state => state.users.users.find(user => user.userId === currentUserId))
    const machine = useSelector(getmachine)
    const kit = useSelector(getkit)
    const testconductedlist = useSelector(gettestconductedlist)
    const userName = user.userName
    const labName = user.labName
    
    // Summary redux
    const summary = useSelector(getsummary)

    // Tests redux
    const tests_json = useSelector(gettestList);


    // useEffect functions
    useEffect(() => {
        const getTestdetails = () => {
            let tests_temp = []
            tests_json.map(({TEST_ID, NUMBER_OF_SAMPLES, ASSIGNED_TO, STATUS, POSITIVE_SAMPLES, UNDETERMINED_SAMPLES}, index) => {
                //return ({'TEST ID': TEST_ID, 'NUMBER OF SAMPLES': NUMBER_OF_SAMPLES, 'ASSIGNED TO' : ASSIGNED_TO, 'POSITIVE SAMPLES': POSITIVE_SAMPLES, 'UNDETERMINED SAMPLES': UNDETERMINED_SAMPLES})
                if (STATUS === 'Completed') {
                    return tests_temp.push({TEST_ID, NUMBER_OF_SAMPLES, ASSIGNED_TO, STATUS, POSITIVE_SAMPLES, UNDETERMINED_SAMPLES})
                } else {
                    return null
                }
            })
            return tests_temp
        }
        const jsoninput = getTestdetails()
        
        const filter_json = jsoninput => {
            if (search !== '') {
                return jsoninput.filter( intest => {
                    if (intest.TEST_ID.toString().includes(search)) {
                        return intest
                    } else {
                        return null
                    }
                })
            } else {                
                return jsoninput
            }
        }
            setJsonOutput(
                filter_json(jsoninput)
            )
        }, [search, tests_json])


    // Other functions
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }


    // Render
    return (
        <div className='bg-light'>
            <NavBarLanding activepage='/completedTests' userName={userName} labName={labName}/>
            
            <Container fluid>    
                <Row className='mt-3'>
                    <Col xs={6}>
                        <Row>
                            <Col xs={4}>
                                <h5>TEST SUMMARY <span className='text-danger'>Coming Soon!</span></h5>
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
                        <Button bsPrefix='ml-3 pl-4 pr-4 bg-tapestry btn' onClick={toggletest}>+ New Test</Button>
                        <Modal size="lg" show={showtest}>
                            <Test userName={userName} handleClose={toggletest} machine={machine} kit={kit} testconductedlist={testconductedlist}/>
                        </Modal>
                    </Col>
                </Row>
                
                <Row className='mt-3'>
                    <Col xs={3}>
                        <Card className='border-prim'>
                            <Card.Body>
                                <Card.Subtitle className='text-bld'>Total tests conducted</Card.Subtitle>
                                <Card.Title className='text-prim text-bld'>{summary.tests_comp ? summary.tests_comp : '--'}</Card.Title>
                                <Card.Text>Your tests: {summary.your_tests ? summary.your_tests : '--'}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={3}>
                        <Card className='border-prim'>
                            <Card.Body>
                                <Card.Subtitle className='text-bld'>Samples tested</Card.Subtitle>
                                <Card.Title className='text-prim text-bld'>{summary.samp_tested ? summary.samp_tested : '--'}</Card.Title>
                                <Card.Text>Your tested samples: {summary.your_samp ? summary.your_samp : '--'}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={3}>
                        <Card className='border-red'>
                            <Card.Body>
                                <Card.Subtitle className='text-bld'>Positive Samples</Card.Subtitle>
                                <Card.Title className='text-red text-bld'>{summary.pos_samp? summary.pos_samp : '--'}</Card.Title>
                                <Card.Text>{'\u00A0'}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={3}>
                        <Card className='border-black'>
                            <Card.Body>
                                <Card.Subtitle className='text-bld'>Undetermined Samples</Card.Subtitle>
                                <Card.Title className='text-bld'>{summary.und_samp? summary.und_samp : '--'}</Card.Title>
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
                                <FormControl  
                                        id="inlineFormInputGroupUsername2" 
                                        type='text'
                                        placeholder="Search TEST ID" 
                                        value={search}
                                        onChange={handleSearch}
                                />
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
                
                <Row className='mt-3 ml-3 mr-3'>
                    <Col>
                        <TableLanding jsonoutput={jsonoutput} testStatus={testStatus}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CompletedTests;