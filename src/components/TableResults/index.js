import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap';

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

    const getBody = () => {
        return(
            null
        )
    }

    return (
        <Container fluid>
            <Row>
                <Col xs = {6} className="pr-0">
                    <Table borderless hover responsive className='border shadow-sm bg-white table-bright'>
                        <thead className='border-bottom bg-shade'>
                            {getHeader()}
                        </thead>
                        <tbody>
                            {getBody()}    
                        </tbody>
                    </Table>
                </Col>
                <Col xs = {6} className="pl-0">
                    <Table borderless hover responsive className='border shadow-sm bg-white table-bleft'>
                        <thead className='border-bottom bg-shade'>
                            <tr>
                                <th><span>&nbsp;&nbsp;</span></th>
                            </tr>
                        </thead>
                        <tbody>
                               
                        </tbody>        
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default TableResults;