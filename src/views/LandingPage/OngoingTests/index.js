import React, {useState, useEffect} from 'react';
import { Container, Button, Form, FormControl, InputGroup, Row, Col, ButtonGroup, ToggleButton,Modal} from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from 'react-paginate'

import NavBarLanding from '../../../components/NavBar'
import TableLanding from '../../../components/TableLanding'
import tableJsonMap from '../../../utils/tableJsonMap'
import './ongoingTests.scss'
import '../../../index.scss'
import getSVG from "../../../utils/getSVG"
import Test from '../../../components/Test';
import useTestModal from '../../../components/Test/showmodal';

import {getKit,getTestConductedList,getMachine} from '../../../redux/selectors/labSelectors'
import {gettestList,getcount} from '../../../redux/selectors/landingPageSelectors/testsSelectors'
import {testActions} from '../../../redux/actions/testActions/testActions'
import {labActions} from '../../../redux/actions/labActions/labActions'

function OngoingTests(props) {

    var initialmount = true;
    // // Local state
    // const userId = 'Anirudha'
    // const labName = 'Vedanta Memorial Hospitals, Biogen Labs'
    const {showtest, toggletest} = useTestModal();
    const remarks = ''
    const testid = ''
    const totalsamples = 0
    const prevalancerate = 0
    const selectedkit = 1
    const selectedmachine = 1
    // JSON.parse(localStorage.getItem("user"))['user']['username']
    
    //const count = 1
    // const onGoingTests = 25
    // Local state
    var pages = 1
    const testStatus = 'ongoing'

    const [radioValue, setRadioValue] = useState('0');
    const [search,setSearch] = useState('')
    const [jsonOutput, setJsonOutput] = useState([])
    const [page, setPage] = useState(1)
    const [searchOn, setSearchOn] = useState(false)
    const [prevState, setPrevState] = useState({'search': '', 'searchOn': false, 'page': 1, 'radioValue': '0'})
    const [loading, setLoading] = useState(true)

    const onGoingTests = jsonOutput.length
    const radios = [
        {name:'All', value:'0'},
        {name:'Errors', value:'-1'},
        {name:'In Progress', value:'1'}
    ]
    const filterMap = {'0': 'filter[status.in]=3,4,5', '1': 'filter[status.in]=3,4', '-1': 'filter[status.in]=5'}

    // Redux
    const dispatch = useDispatch();
    const testList = (apiFilterOptions) => dispatch(testActions.test_listAll(apiFilterOptions,labId))
    const userList = () => dispatch(labActions.userlist(labId))
    const kitList = () => dispatch(labActions.kitlist())
    const machineList = () => dispatch(labActions.machinelist())

    // Users local storage
    const userName = JSON.parse(localStorage.getItem("user"))['user']['first_name'] + ''+ JSON.parse(localStorage.getItem("user"))['user']['last_name']
    const labName = 'Test'
    const labId = 1

    // Tests redux
    const tests_json = useSelector(gettestList);

    const machine = useSelector(getMachine)
    const kit = useSelector(getKit)
    var testConductedList = []
    testConductedList = useSelector(getTestConductedList)
    
    const pageinfo = useSelector(getcount)
    if(pageinfo) {
        pages = pageinfo.pagination.pages
    } 

    async function testdelayList() {
        console.log('First render')
        var options = filterMap['0'] + '&page[number]=1'
        function timeout(delay) {
            return new Promise( res => setTimeout(res, delay) );
        }
        await timeout(2000);
        testList(options,labId)
    }

    useEffect( () => {
        const fetchlists = async () => {
            userList(labId)
            await testdelayList()
            kitList()
            machineList()
        }
        fetchlists()
        //testList(options)        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect( () => {
        if (!initialmount) {
            console.log('New test modal closed')
            var options = filterMap['0'] + '&page[number]=1'
            testList(options,labId)
            initialmount = false
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showtest])

    useEffect( () => {
        if (searchOn) {
            console.log('Search operation')
            var options = filterMap['0'] + '&search=' + search + '&page[number]=1'
            testList(options,labId)
            setPrevState(prev => ({
                ...prev,
                'searchOn': true,
                'page': 1,
                'radioValue': '0'
            }))
            setPage(1)
            setRadioValue('0')
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchOn])

    useEffect( () => {
        if(searchOn) {
            console.log('Search operation removed')
            var options = filterMap['0'] + '&page[number]=1'
            testList(options,labId)
            setPrevState(prev => ({
                ...prev,
                'searchOn': false,
                'page': 1,
                'radioValue': '0'
            }))
            setSearchOn(false)
            setPage(1)
            setRadioValue('0')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[search])

    useEffect( () => {
        var options = ''
        if (prevState.page !== 1 || page !== 1) {
            if(!searchOn) {
                console.log('New page')
                options = options.concat(filterMap[radioValue] + '&page[number]=' + page)
                testList(options,labId)
                setPrevState(prev => ({
                    ...prev,
                    'search': search
                })) // Clear search entry
                setSearch('')
            } else {
                console.log('Page changed in search mode')
                options = options.concat(filterMap['0'] + '&search=' + search + '&page[number]=' + page)
                testList(options,labId)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    useEffect( () => {
        if (prevState.radioValue !== '0' || radioValue !== '0') {
            console.log('Status filter changed')
            var options = filterMap[radioValue] + '&page[number]=' + page
            testList(options,labId)
            setPrevState(prev => ({
                ...prev,
                'search': search,
                'searchOn': false,
                'page': 1
            })) // Clear search entry
            setSearch('')
            setSearchOn(false)
            setPage(1)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [radioValue])

    useEffect(() => {
        const fetchData = async () => {
            const result = await tableJsonMap(tests_json, testConductedList)
            setLoading(false)
            setJsonOutput(result)
        }
        setLoading(true)
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tests_json])

    const handleRadio = (e) => {
        setPrevState(prev => ({
            ...prev,
            'radioValue': radioValue
        }))   
        setRadioValue(e.target.value)
    }

    const handleSearch = (e) => {
        setPrevState(prev => ({
            ...prev,
            'search': search 
        }))
        setSearch(e.target.value)
    }

    const handleClick = (e) => {
        if (search !== '') {
            setPrevState(prev => ({
                ...prev,
                'searchOn': false
            }))
            setSearchOn(true)
        }
    }

    const handlePageChange = (e) => {
        setPrevState(prev => ({
            ...prev,
            'page': page
        }))
        setPage(e.selected + 1)
    }

    const paginateTable = () => {
        if (onGoingTests !== 0) {
            return ( 
            <Row className='mt-3 justify-content-center'>
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pages}
                    initialPage={page - 1}
                    forcePage={page -1}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                />
            </Row>)
        } else {
            return null
        }
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
                                    <FormControl  
                                        id="inlineFormInputGroupUsername2" 
                                        type="number"
                                        placeholder="Search TEST ID" 
                                        value={search}
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
                        <Col xs={5} style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button bsPrefix='ml-3 pl-4 pr-4 bg-tapestry btn' onClick={toggletest}>+ New Test</Button>
                            <Modal size="lg" show={showtest}>
                                <Test username={7} testid={testid} totalsamples={totalsamples} prevalancerate={prevalancerate} selectedkit={selectedkit} selectedmachine={selectedmachine} remarks={remarks} handleClose={toggletest} machine={machine} kit={kit} testConductedList={testConductedList} modalType = {'new'}/>
                            </Modal>
                        </Col>
                    </Row>
                </Col>
            </Row>    
            <Row className='mt-3 ml-3 mr-3'>
                <Col>       
                    {loading? <p className='text-center'>Loading!</p> : null}
                    <TableLanding jsonOutput={jsonOutput} testStatus={testStatus} labId={labId}/>
                </Col>
            </Row>
            {paginateTable()}
        </Container>
    </div>
    );
}

export default OngoingTests;