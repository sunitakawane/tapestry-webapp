import React, { Component } from 'react';
import {Table, Container, Row} from 'react-bootstrap';

class TableLanding extends Component {

    getKeys = function() {
        return Object.keys(this.props.jsonoutput[0])
    }

    getHeader = function() {
        var heads = this.getKeys()
        return heads.map(head => <th key={head}>{head}</th>) 
    };

    getBody = function() {
        var items = this.props.jsonoutput;
        var keys = this.getKeys();
        return items.map((row, index)=>{
            return <tr key={index}>
                {keys.map(key => 
                    <th key={key}>{row[key]}</th>    
                )}      
            </tr>
        });
    }

    render() { 
        return (  
            <Container fluid>
                <Row>
                    <Table borderless hover responsive className='border shadow-sm'>
                        <thead className='border-bottom bg-light'>
                            <tr>
                                {this.getHeader()}
                            </tr>
                        </thead>
                        <tbody>
                            {this.getBody()}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        );
    }
}
 
export default TableLanding;