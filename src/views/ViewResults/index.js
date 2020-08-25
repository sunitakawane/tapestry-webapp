import React, { useState } from 'react'
import {Container, Row, Col, Card, ButtonGroup, ToggleButton, Form, InputGroup, FormControl, Button} from 'react-bootstrap'

import NavBar from '../../components/NavBar'
import TableResults from '../../components/TableResults'
import getSVG from '../../utils/getSVG'
import './viewResults.scss'
import '../../index.scss'

function ViewResults(props) {

    const labId = 1
    const userName = JSON.parse(localStorage.getItem("user-login-info"))['user']['first_name'] + ''+ JSON.parse(localStorage.getItem("user-login-info"))['user']['last_name']
    const labName = 'Test'

    const radios = [
        {name:'All', value:'2'},
        {name:'Positives', value:'-1'},
        {name:'Negative', value:'1'},
        {name:'Undetermined', value: '0'}
    ]

    const [radioValue,setRadioValue] = useState('2')
    const [search, setSearch] = useState('')
    const [searchOn, setSearchOn] = useState(false)

    const testInfo = {
        "id": 27439,
        "nsamples": 487,
        "prevalence": 7.0,
        "remark": "Faulty Wells; A1, A7 and B12",
        "poolingscheme_filename": "Tapestry_Pooling_90x210NoneNone.xlsx",
        "testctresults_filename": "",
        "ninconclusive": 3,
        "npositive": 34,
        "positive": {"123" : "24.75", "134" : "27.56", "156": "32.12", "157" : "21.45", 
        "163" : "24.75", "164" : "27.56", "166": "32.12", "167" : "21.45", "169" : "30.20",
        "173" : "24.75", "174" : "27.56", "176": "32.12", "177" : "21.45", "179" : "30.20", 
        "183" : "24.75", "184" : "27.56", "186": "32.12", "187" : "21.45", "189" : "30.20",
        "193" : "24.75", "194" : "27.56", "196": "32.12", "197" : "21.45", "199" : "30.20",
        "203" : "24.75", "204" : "27.56", "216": "32.12", "217" : "21.45", "219" : "30.20",
        "223" : "24.75", "224" : "27.56", "226": "32.12", "227" : "21.45", "229" : "30.20"},
        "inconclusive": {"124" : "38.75", "135" : "37.56", "158": "36.12"},
        "assigned_to": {
          "type": "user",
          "id": "7"
        },
        "status": {
          "type": "status",
          "id": "6"
        },
        "test_kit": {
          "type": "testKit",
          "id": "1"
        },
        "machine_type": {
          "type": "machineType",
          "id": "1"
        }
    }

    const handleRadio = (e) => {
        /*setPrevState(prev => ({
            ...prev,
            'radioValue': radioValue
        }))*/   
        setRadioValue(e.target.value)
    }

    const handleSearch = (e) => {
        /*setPrevState(prev => ({
            ...prev,
            'search': search 
        }))*/
        setSearch(e.target.value)
    }

    const handleClick = (e) => {
        if (search !== '') {
            /*setPrevState(prev => ({
                ...prev,
                'searchOn': false
            }))*/
            setSearchOn(true)
        }
    }

    const getName = (assignedid) => {
        return 'Admin Test'
        // Should perform api call to get user name
    }

    return (
        <div className='bg-light'>
            <NavBar activepage='/completedTests' userName={userName} labName={labName}/>
            <Container fluid>
                <Row className='mt-2'>
                    <Col xs={6}>
                        <button className='back-button'>{getSVG('backarrow')} Back</button>
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col xs={6}>
                        <h5>TEST RESULTS</h5>
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    <span className='mr-3'>Test ID <span className='txt-result pl-4 pr-5'>{testInfo.id}</span></span>
                                    <span className='mr-5'>Status <span className='txt-result pl-4 pr-5'>Completed</span></span>
                                    <span>Assigned To <span className='txt-result pl-4'>{getName(testInfo.assigned_to.id)}</span></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col xs={6}>
                        <Row>
                            <Col xs={1} className='my-auto'>
                            <p className='my-auto'>Filters</p>
                            </Col>
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
                    <Col xs={6}> {/*style={{display: 'flex', justifyContent: 'flex-end'}}*/}
                        <Col xs={{span: 4, offset: 8}} style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Form>
                                <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>Search</Form.Label>
                                <InputGroup>
                                    <FormControl  
                                        id="inlineFormInputGroupUsername2" 
                                        type="number"
                                        placeholder="Sample ID" 
                                        value={search}
                                        className = 'search-id'
                                        onChange={handleSearch}
                                    />
                                    <InputGroup.Append>
                                        <Button variant='outline-secondary' onClick={handleClick}>
                                            {getSVG('search')}
                                        </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Form>
                        </Col>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <TableResults testInfo={testInfo} labId={labId}/>
                </Row>
            </Container>
        </div>
    )
}

export default ViewResults;