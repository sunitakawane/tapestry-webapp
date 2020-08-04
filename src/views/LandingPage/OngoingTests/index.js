import React, {useState, useEffect} from 'react';
import { Container, Button, Form, FormControl, InputGroup, Row, Col, ButtonGroup, ToggleButton,Modal} from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";

import NavBarLanding from '../../../components/NavBar'
import TableLanding from '../../../components/TableLanding'
import './ongoingTests.scss'
import '../../../index.scss'
import getSVG from "../../../utils/getSVG"
import Test from '../../../components/Test';
import useTestModal from '../../../components/Test/showmodal';

import {gettestList,gettestconductedlist,getmachine,getkit} from '../../../redux/selectors/landingPageSelectors/testsSelectors'
import {testActions} from '../../../redux/actions/testActions/testActions'

function OngoingTests(props) {

    // // Local state
    const testStatus = 'ongoing'
    // const userId = 'Anirudha'
    // const labName = 'Vedanta Memorial Hospitals, Biogen Labs'
    const {showtest, toggletest} = useTestModal();
    const remarks = ''
    const testid = ''
    const totalsamples = 0
    const prevalancerate = 0
    const selectedkit = ''
    const selectedmachine = ''
    
    //const count = 1
    // const onGoingTests = 25
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
    const testList = () => dispatch(testActions.test_list())

    // Users redux
    const currentUserId = "Anirudha"
    const user = useSelector(state => state.users.users.find(user => user.userName=== currentUserId))
    const userName = user.userName
    const labName = user.labName

    // Tests redux
    testList();
    const tests_json = useSelector(gettestList);
    const machine = useSelector(getmachine)
    const kit = useSelector(getkit)
    const testconductedlist = useSelector(gettestconductedlist)
    

    useEffect (()=>{        
        const getTestdetails = () => {
            let tests_temp = []
            tests_json.map(({TEST_ID, NUMBER_OF_SAMPLES, ASSIGNED_TO, STATUS, file}) => {
                if (STATUS !== 'Completed') { 
                    return tests_temp.push({TEST_ID, NUMBER_OF_SAMPLES, ASSIGNED_TO, STATUS, file})
                } else {
                    return null
                }
            })
            return tests_temp
        }
        const jsoninput = getTestdetails()
        
        const filter_json = jsoninput => {
            if (search !== '') {
                setRadioValue('0')
                return jsoninput.filter( intest => {
                    if (intest.TEST_ID.toString().includes(search)) {
                        return intest
                    } else {
                        return null
                    }
                })
            } else {
                if (radioValue === '-1') {
                    return jsoninput.filter( intest => {                        
                        return intest.STATUS === 'Error in Parsing!'
                    })
                } else if (radioValue === '1') {
                    return jsoninput.filter( intest => {
                        return intest.STATUS === 'In progress'
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

    //Render
    return (          
        <div id='body' className='bg-light'>
        <NavBarLanding activepage='/ongoingtests' userName={userName} labName={labName}/>
        
        <Container fluid>
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
                            <Button bsPrefix='ml-3 pl-4 pr-4 bg-tapestry btn' onClick={toggletest}>+ New Test</Button>
                            <Modal size="lg" show={showtest}>
                                <Test testid={testid} totalsamples={totalsamples} prevalancerate={prevalancerate} selectedkit={selectedkit} selectedmachine={selectedmachine} remarks={remarks} handleClose={toggletest} machine={machine} kit={kit} testconductedlist={testconductedlist}/>
                            </Modal>
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