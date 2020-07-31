import React, {useState, useEffect} from 'react';
import { Container, Button, Form, FormControl, InputGroup, Row, Col, ButtonGroup, ToggleButton} from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";

import NavBarLanding from '../../../components/NavBarLanding'
import TableLanding from '../../../components/TableLanding'
import getSVG from "../../../utils/getSVG"
//import testConstants from '../../../constants/testConstants'
import './ongoingTests.scss'
import '../../../index.scss'

import {gettestList} from '../../../redux/selectors/landingPageSelectors/testsSelectors'
import {testActions} from '../../../redux/actions/testActions/testActions'

function OngoingTests(props) {

    // Local state
    const testStatus = 'ongoing'
    const [radioValue, setRadioValue] = useState('0');
    const [search,setSearch] = useState('')
    const [jsonoutput, setJsonOutput] = useState([])
    const onGoingTests = jsonoutput.length
    const radios = [
        {name:'All', value:'0'},
        {name:'Errors', value:'-1'},
        {name:'In Progress', value:'1'}
    ]

    // Redux
    const dispatch = useDispatch();
    const testList = () => dispatch(testActions.test_listAll())

    // Users redux
    const currentUserId = 12345
    const user = useSelector(state => state.users.users.find(user => user.userId === currentUserId))
    const userName = user.userName
    const labName = user.labName

    // Tests redux
    //testList();
    const tests_json = useSelector(gettestList);

    useEffect (()=>{        
        const getTestdetails = () => {
            let tests_temp = []
            if (tests_json) {
                tests_json.map(({id, samples, assigned_to, status, file}) => {
                    if (status !== 'Completed') { 
                        return tests_temp.push({id, samples, assigned_to, status, file})
                    } else {
                        return null
                    }
                })
            } else {
                return []
            }
            return tests_temp
        }
        const jsoninput = getTestdetails()
        
        const filter_json = jsoninput => {
            if (search !== '') {
                setRadioValue('0')
                return jsoninput.filter( intest => {
                    if (intest.id.toString().includes(search)) {
                        return intest
                    } else {
                        return null
                    }
                })
            } else {
                if (radioValue === '-1') {
                    return jsoninput.filter( intest => {                        
                        return intest.status === 'Error in Parsing!'
                    })
                } else if (radioValue === '1') {
                    return jsoninput.filter( intest => {
                        return intest.status === 'In progress'
                    })
                } else {
                    return jsoninput
                }
            }
        }

        setJsonOutput(
            filter_json(jsoninput)
        )
    }, [search, radioValue, tests_json, dispatch])

    const handleRadio = (e) => {
        setRadioValue(e.target.value)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const api_call = () => {
        testList()
    }

    //Render
    return (          
        <div id='body' className='bg-light'>
        <NavBarLanding activepage='/ongoingtests' userName={userName} labName={labName}/>
        
        <Container fluid>
            <Row className='mt-3'>
                <Button onClick={api_call}>API CALL</Button>
            </Row>
            <Row className='mt-3'> {/* Control bar */}
                <Col xs={7}>
                    <Row>
                        <Col xs={5} className='my-auto'>
                            <h5>ONGOING TESTS ({onGoingTests})</h5>
                        </Col>
                        <Col xs={7}>
                            <Row>
                                <p className='my-auto'>Filters</p>
                                    {radios.map((radio, idx) => (
                                    <ButtonGroup toggle key={idx}>
                                        <ToggleButton
                                            key={idx}
                                            type="radio"
                                            name="status"
                                            value={radio.value}
                                            className= 'ml-3 pr-4 pl-4 filter-btn bg-white'
                                            checked={radioValue === radio.value}
                                            onChange={handleRadio}
                                        >
                                            {radio.name}
                                        </ToggleButton>
                                    </ButtonGroup>
                                    ))}
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xs={5}>
                    <Row>
                        <Col xs={{span: 5, offset: 2}} style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Form>
                                <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>Search</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            {getSVG('search')}
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl  
                                        id="inlineFormInputGroupUsername2" 
                                        placeholder="Search TEST ID" 
                                        value={search}
                                        onChange={handleSearch}
                                    />
                                </InputGroup>
                            </Form>
                        </Col>
                        <Col xs={5} style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button bsPrefix='ml-3 pl-4 pr-4 bg-tapestry btn'>+ New Test</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>    
            <Row className='mt-3 ml-3 mr-3'>
                <Col>                    
                    <TableLanding jsonoutput={jsonoutput} testStatus={testStatus} />
                </Col>
            </Row>
        </Container>
    </div>
    );
}

export default OngoingTests;