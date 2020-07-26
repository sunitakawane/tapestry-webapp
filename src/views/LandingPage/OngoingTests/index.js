import React, {useState} from 'react';
import { Container, Button, Form, FormControl, InputGroup, Row, Col, ButtonGroup, ToggleButton} from 'react-bootstrap';

import NavBarLanding from '../../../components/NavBarLanding'
import TableLanding from '../../../components/TableLanding'
import './ongoingTests.scss'
import getSVG from "../../../utils/getSVG"

function OngoingTests(props) {
    const userId = 'Anirudha'
    const labName = 'Vedanta Memorial Hospitals, Biogen Labs'
    const count = 1
    const onGoingTests = 25
    const [radioValue, setRadioValue] = useState('0');
    const radios = [
        {name:'All', value:'0'},
        {name:'Errors', value:'-1'},
        {name:'In Progress', value:'1'}
    ]
    const jsonoutput = [
        {'TEST ID': 27435, 'NUMBER OF SAMPLES': 487, 'ASSIGNED TO': 'Harmen Potter', 'STATUS': 'In progress', 
        'component_D' : {'type': 'Button', 'text': 'Download pooling matrix', 'color': 'black', 'view': 'Download'}, 
        'component_U' : {'type': 'Button', 'text': 'Upload qPCR matrix', 'color': 'green', 'view': 'Upload'},
        'component_O' : {'type': 'Button', 'text': 'Menu', 'color': 'green', 'view': 'Options_OT'},
        'component_nt' : 'yes'},
        {'TEST ID': 27435, 'NUMBER OF SAMPLES': 487, 'ASSIGNED TO': 'Harmen Potter', 'STATUS': 'In progress', 
        'component_D' : {'type': 'Button', 'text': 'Download pooling matrix', 'color': 'black', 'view': 'Download'}, 
        'component_U' : {'type': 'Button', 'text': 'Upload qPCR matrix', 'color': 'green', 'view': 'Upload'},
        'component_O' : {'type': 'Button', 'text': 'Menu', 'color': 'green', 'view': 'Options_OT'},
        'component_nt' : 'no'},
        {'TEST ID': 27435, 'NUMBER OF SAMPLES': 487, 'ASSIGNED TO': 'Harmen Potter', 'STATUS': 'Error in Parsing!', 
        'component_D' : {'type': 'Button', 'text': 'Download pooling matrix', 'color': 'black', 'view': 'Download'}, 
        'component_U' : {'type': 'Button', 'text': 'Re-Upload', 'color': 'green', 'view': 'Upload'},
        'component_O' : {'type': 'Button', 'text': 'Menu', 'color': 'green', 'view': 'Options_OT'},
        'component_nt' : 'no'},
        {'TEST ID': 27435, 'NUMBER OF SAMPLES': 487, 'ASSIGNED TO': 'Harmen Potter', 'STATUS': 'In progress', 
        'component_D' : {'type': 'Button', 'text': 'Download pooling matrix', 'color': 'black', 'view': 'Download'}, 
        'component_U' : {'type': 'Button', 'text': 'Upload qPCR matrix', 'color': 'green', 'view': 'Upload'},
        'component_O' : {'type': 'Button', 'text': 'Menu', 'color': 'green', 'view': 'Options_OT'},
        'component_nt' : 'no'},
    ]

    return (          
        <div className='bg-light'>
        <NavBarLanding activepage='/ongoingtests' userId={userId} labName={labName} count={count}/>
        <Container fluid>
            <Row className='mt-3'>
                <Col xs={7}>
                    <Row>
                        <Col xs={5} className='my-auto'>
                            <h5>ONGOING TESTS ({onGoingTests})</h5>
                        </Col>
                        <Col xs={7}>
                            <Row>
                                <p className='my-auto'>Filters</p>
                                    {radios.map((radio, idx) => (
                                    <ButtonGroup toggle>
                                        <ToggleButton
                                            key={idx}
                                            type="radio"
                                            name="status"
                                            value={radio.value}
                                            className= 'ml-3 pr-4 pl-4 filter-btn bg-white'
                                            checked={radioValue === radio.value}
                                            onChange={(e) => setRadioValue(e.currentTarget.value)}
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
                        <Col xs={5} style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button bsPrefix='ml-3 pl-4 pr-4 bg-tapestry btn'>+ New Test</Button>
                        </Col>
                    </Row>
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

export default OngoingTests;