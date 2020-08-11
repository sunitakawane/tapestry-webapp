import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Form, InputGroup, FormControl, Button, Card, FormGroup,Modal } from 'react-bootstrap';
import { useSelector,useDispatch } from "react-redux";
import ReactPaginate from 'react-paginate'

import NavBarLanding from '../../../components/NavBar'
import TableLanding from '../../../components/TableLanding'
import getSVG from '../../../utils/getSVG'
import tableJsonMap from '../../../utils/tableJsonMap'
import './completedTests.scss'
import '../../../index.scss'
import Test from '../../../components/Test';
import useTestModal from '../../../components/Test/showmodal';

import {gettestconductedlist,getmachine,getkit} from '../../../redux/selectors/labSelectors'
import {gettestList,getcount} from '../../../redux/selectors/landingPageSelectors/testsSelectors'
import {testActions} from '../../../redux/actions/testActions/testActions'


function CompletedTests() {
    const {showtest, toggletest} = useTestModal();
    const remarks = ''
    const testid = ''
    const totalsamples = 0
    const prevalancerate = 0
    const selectedkit = 1
    const selectedmachine = 1
    
    // Local states
    const testStatus='completed'
    var pages = 1
    const filter = 'filter[status.in]=6'

    const [search,setSearch] = useState('')
    const [jsonoutput, setJsonOutput] = useState([])
    
    const filter_options = [
        {value:'this week', label:'This Week'},
        {value:'this month', label:'This Month'},
        {value:'today', label: 'Today'}
    ]


    
    
    const [page, setPage] = useState(1)
    const [searchOn, setSearchOn] = useState(false)
    const [prevState, setPrevState] = useState({'search': '', 'searchOn': false, 'page': 1})

    const onGoingTests = jsonoutput.length

    // Redux states
    const dispatch = useDispatch()
    const testList = (apiFilterOptions) => dispatch(testActions.test_listAll(apiFilterOptions))

    const currentUserId = 12345
    const user = useSelector(state => state.users.users.find(user => user.userId === currentUserId))
    const userName = user.userName
    const labName = user.labName

    // Tests redux
    const tests_json = useSelector(gettestList);
    const machine = useSelector(getmachine)
    const kit = useSelector(getkit)
    const testconductedlist = useSelector(gettestconductedlist)

    const pageinfo = useSelector(getcount)
    if(pageinfo) {
        pages = pageinfo.pagination.pages
    }

    // useEffect functions

    // View mount
    useEffect( () => {
        console.log('First render')
        var options = filter + '&page[number]=1'
        console.log(options)
        testList(options)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Button state
    useEffect( () => {
        if (searchOn) { // Search is done only if button is clicked
            console.log('Search operation')
            var options = 'search=' + search + '&page[number]=1'
            console.log(options)
            testList(options)
            setPrevState(prev => ({
                ...prev,
                'searchOn': true,
                'page': 1
            })) // Reset page and keep track that button is clicked
            setPage(1)
        }  
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchOn])

    // Search state
    useEffect( () => {
        if (searchOn) { // If search done was removed
            console.log('Search selection removed')
            var options = filter + '&page[number]=1'
            console.log(options)
            testList(options) // API call for initial state
            setPrevState(prev => ({
                ...prev,
                'searchOn': false,
                'page': 1
            })) // Reset full state
            setSearchOn(false)
            setPage(1)
        }   
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    useEffect( () => {
        var options = filter
        if(prevState.page !== 1 || page !== 1) { // Just check whether it is not a resetting action
            if(!searchOn) { // Page changed
                console.log('New page')
                options = options.concat('&page[number]=' + page)
                console.log(options)
                testList(options)
                setPrevState(prev => ({
                    ...prev,
                    'search': search
                })) // Clear search entry
                setSearch('')
            } else { // Page changed in search mode
                console.log('New search page')
                options = options.concat('&search=' + search + '&page[number]=' + page)
                console.log(options)
                testList(options)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    useEffect( () => {
        setJsonOutput(tableJsonMap(tests_json))
    }, [tests_json])

    // Other functions
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
                    forcePage={page - 1}
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

    // Render
    return (
        <div className='bg-light'>
            <NavBarLanding activepage='/completedTests' userName={userName} labName={labName}/>
            <Container fluid>
                <Row className='mt-3'>
                    <Col xs={6}>
                        <h5>COMPLETED TESTS</h5>
                    </Col>
                    <Col xs={{span:2, offset:2}}>
                        <Form>
                            <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
                                Search
                            </Form.Label>
                            <InputGroup>
                                <FormControl  
                                        id="inlineFormInputGroupUsername2" 
                                        type='text'
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
                    <Col xs={{span:2}}>
                        <Button bsPrefix='ml-3 pl-4 pr-4 bg-tapestry btn' onClick={toggletest}>+ New Test</Button>
                        <Modal size="lg" show={showtest}>
                            <Test username={7} testid={testid} totalsamples={totalsamples} prevalancerate={prevalancerate} selectedkit={selectedkit} selectedmachine={selectedmachine} remarks={remarks} handleClose={toggletest} machine={machine} kit={kit} testconductedlist={testconductedlist}/>
                        </Modal>
                    </Col>
                </Row>
                
                <Row className='mt-3 ml-3 mr-3'>
                    <Col>
                        <TableLanding jsonoutput={jsonoutput} testStatus={testStatus}/>
                    </Col>
                </Row>
                {paginateTable()}
            </Container>
        </div>
    );
}

export default CompletedTests;