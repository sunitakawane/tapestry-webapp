import React from 'react'
import { Container, Row, Col, Table, Card } from 'react-bootstrap';

import './tableResults.scss'
  
function TableResults(props) {

    const getHeader = () => {
        return (
            <tr>
                <th scope="col" className='text-center'>SAMPLE ID</th>
                <th scope="col" className='text-center'>RESULTS</th>
                <th scope="col" className='text-center'>
                    CT VALUES <span className='txt-info'>(CUT OFF - 45.00)</span>
                </th>
            </tr>
        )
    }

    const addToList = (listInfo, tag) => {
        let list=[]
        Object.keys(listInfo).forEach(function (sampleId) {
            list.push({'sampleId' : sampleId, 'status' : tag, 'ctvalue' : listInfo[sampleId]})
        })
        return list
    }

    const getBody = () => {
        const keys = ['sampleId', 'status', 'ctvalue']
        let sampleList = []
        sampleList = sampleList.concat(addToList(props.testInfo.positive,'Positive'))
        sampleList = sampleList.concat(addToList(props.testInfo.inconclusive,'Undetermined'))
        sampleList = sampleList.sort(function (a,b) {
            return a.sampleId - b.sampleId
        })
        return sampleList.map((sample, index) => {
                return <tr key={index}>
                    {keys.map(key => 
                    {
                        switch(key) {
                            case 'sampleId': return <td key={key} className='text-center'>{sample[key]}</td>;
                            case 'status': return (sample[key] === 'Positive') ? 
                                <td key={key} className='text-center text-danger'>{sample[key]}</td> : 
                                <td key={key} className='text-center'>{sample[key]}</td>;
                            case 'ctvalue': return <td key={key} className='text-center'>{sample[key]}</td>;
                            default : return null;
                        }
                    })}
                </tr>
            }
        )
    }

    return (
        <div className='view-results'>
        <Container fluid>
            <Row>
                <Col lg = {6} className="pr-0">
                    <Table borderless hover responsive className='border shadow-sm bg-white table-bright'>
                        <thead className='border-bottom bg-shade'>
                            {getHeader()}
                        </thead>
                        <tbody>
                            {getBody()}
                        </tbody>
                    </Table>
                </Col>
                <Col lg = {6} className="pl-0">
                    <Table borderless hover responsive className='border shadow-sm bg-white table-bleft'>
                        <thead className='border-bottom bg-shade'>
                            <tr>
                                <th><span>&nbsp;&nbsp;</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <Card className = 'mt-4 card-side-margin'>
                                <Card.Body>
                                    <Card.Text>
                                        <span className='pr-5'>Testing Kit</span><span className='txt-result pl-5'>{props.testInfo.test_kit.id}</span>
                                    </Card.Text>
                                    <Card.Text>
                                        <span className='pr-4'>Machine Type</span><span className='txt-result pl-5'>{props.testInfo.machine_type.id}</span>
                                    </Card.Text>
                                    <Card.Text>
                                        <span className='padding3'>Prevalence Rate</span><span className='txt-result pl-5'>{props.testInfo.prevalence}</span>
                                    </Card.Text>
                                    <Card.Text>
                                        <span className='padding4'>Remarks</span><span className='txt-result pl-4'>{props.testInfo.remark}</span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <div className='mt-3 card-side-margin'>
                                <Row>
                                    <Col lg={6}>
                                        <p>Positive Samples</p>
                                    </Col>
                                    <Col lg={6}>
                                        <p className='txt-result text-right'>{props.testInfo.npositive}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <p>Undetermined Samples</p>
                                    </Col>
                                    <Col lg={6}>
                                        <p className='txt-result text-right'>{props.testInfo.ninconclusive}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <p>Negative Samples</p>
                                    </Col>
                                    <Col lg={6}>
                                        <p className='txt-result text-right'>
                                            {props.testInfo.nsamples - props.testInfo.npositive - props.testInfo.ninconclusive}
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <p>Total Samples</p>
                                    </Col>
                                    <Col lg={6}>
                                        <p className='txt-result text-right'>{props.testInfo.nsamples}</p>
                                    </Col>
                                </Row>
                            </div>
                            <hr className='section-change mt-0 mb-0'/>
                            <div className='mt-3 card-side-margin'>
                                <Row>
                                    <Col lg={6}>
                                        <p className='txt-result'>Pool Configuration File</p>
                                    </Col>
                                    <Col lg={6}>
                                        <p className='text-right'><button className='btn-text'><u>Download</u></button></p>
                                    </Col>
                                </Row>
                            </div>
                        </tbody>        
                    </Table>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default TableResults;