import React from 'react';
import {Table, Container, Row, Button, OverlayTrigger, Popover} from 'react-bootstrap';

import './tableLanding.scss'
import getSVG from '../../utils/getSVG'

function TableLanding(props) {

    const ongoingrows = ['download','upload','options']
    const completedrows = ['view','options']
    const rows = props.testStatus === 'ongoing' ? ongoingrows : completedrows

    const emptyHeader = () => {
        return rows.map(row => <th key={row}></th>)
    }

    const getKeys = () => {
        return Object.keys(props.jsonoutput[0])
    }

    const getHeader = () => {
        var heads = getKeys()
        return heads.map(head => 
        {
            switch(head){
                case 'TEST_ID': return <th key={head}>TEST ID</th>;
                case 'NUMBER_OF_SAMPLES': return <th key={head} className='text-center'>NUMBER OF SAMPLES</th>
                case 'ASSIGNED_TO': return <th key={head}>ASSIGNED TO</th>;
                case 'STATUS': return <th key={head} className='text-center'>STATUS</th>;
                case 'POSITIVE_SAMPLES': return <th key={head} className='text-center'>POSITIVE SAMPLES</th>;
                case 'UNDETERMINED_SAMPLES': return <th key={head} className='text-center'>UNDETERMINED SAMPLES</th>
                default: return null;
            }            
        })
    };

    const optionsot = () => {
        return <Popover id="popover-basic">
            <Popover.Title className='text-muted'>DATA OPTIONS</Popover.Title>
            <Popover.Content>
                <Button bsPrefix='btn-text'>{getSVG('options')} Edit Pool Test</Button>
            </Popover.Content>
        </Popover>
    }

    const optionsct = () => {
        return <Popover id='popover-basic'>
            
        </Popover>
    }

    const getBody = () => {
        var items = props.jsonoutput;
        var keys = getKeys();
        keys = keys.concat(rows)
        return items.map((row, index)=>
        {
            if (props.testStatus === 'ongoing') {
                if (row['STATUS'] === 'Error in Parsing!') {
                    return <tr key={index} style={{borderLeft: '5px solid red'}}>
                        {keys.map(key =>
                        {
                            switch(key) {
                                case 'TEST_ID': return <th key={key} className='text-normal text-danger'>{row[key]}</th>;
                                case 'NUMBER_OF_SAMPLES': return <th key={key} className='text-normal text-center text-danger'>{row[key]}</th>;
                                case 'ASSIGNED_TO': return <th key={key} className='text-normal text-danger'>{row[key]}</th>;
                                case 'STATUS': return <th key={key} className='text-normal text-center text-danger'>{row[key]}</th>;
                                case 'download': return <th key={key} className='text-normal text-center'>
                                    <a href={row['file']} className='download-link text-dark'>Download pooling matrix</a>
                                </th>
                                case 'upload': return <th key={key} className='text-normal text-center'>
                                    <a href="/ongoingtests#" className='text-dark prim-color'>Reupload {getSVG('reupload')}</a>
                                </th>
                                case 'options': return (
                                    <th key={key} className='text-center'>
                                        <OverlayTrigger trigger='focus' placement='bottom' overlay={optionsot()}>
                                            <Button bsPrefix='btn-text prim-color'>{getSVG('dots')}</Button>
                                        </OverlayTrigger>                                            
                                     </th>
                                )
                                default: return null;
                            }    
                        })}
                    </tr>
                } else {
                    return <tr key={index}>
                        {keys.map(key =>
                        {
                            switch(key) {
                                case 'TEST_ID': return <th key={key} className='text-normal'>{row[key]}</th>;
                                case 'NUMBER_OF_SAMPLES': return <th key={key} className='text-normal text-center'>{row[key]}</th>;
                                case 'ASSIGNED_TO': return <th key={key} className='text-normal'>{row[key]}</th>;
                                case 'STATUS': return <th key={key} className='text-normal text-muted text-center'>{row[key]}</th>;
                                case 'download': return <th key={key} className='text-normal text-center'>
                                    <a href={row['file']} className='download-link text-dark'>Download pooling matrix</a>
                                </th>
                                case 'upload': return <th key={key} className='text-normal text-center'>
                                    <a href="/ongoingtests#" className='prim-color'>Upload qPCR results</a>
                                </th>
                                case 'options': return (
                                    <th key={key} className='text-center'>
                                        <OverlayTrigger trigger='focus' placement='bottom' overlay={optionsot()}>
                                            <Button bsPrefix='btn-text prim-color'>{getSVG('dots')}</Button>
                                        </OverlayTrigger>                                            
                                     </th>
                                )
                                default: return null;
                            }    
                        })}
                    </tr>    
                }
            } else {
                return <tr key={index}>
                {keys.map(key =>
                {
                    switch(key) {
                        case 'TEST_ID': return <th key={key} className='text-normal'>{row[key]}</th>;
                        case 'NUMBER_OF_SAMPLES': return <th key={key} className='text-normal text-center'>{row[key]}</th>;
                        case 'ASSIGNED_TO': return <th key={key} className='text-normal'>{row[key]}</th>;
                        case 'POSITIVE_SAMPLES': return <th key={key} className='text-normal text-center'>{row[key]}</th>;
                        case 'UNDETERMINED_SAMPLES': return <th key={key} className='text-normal text-center'>{row[key]}</th>;
                        case 'view': return <th key={key} className='text-normal text-center'>
                            <a href="/completedtests#" className='prim-color'>View results</a>
                        </th>
                        case 'options': return (
                            <th key={key} className='text-center'>
                                <OverlayTrigger trigger='focus' placement='bottom' overlay={optionsct()}>
                                    <Button bsPrefix='btn-text prim-color'>{getSVG('dots')}</Button>
                                </OverlayTrigger>                                            
                             </th>
                        )
                        default: return null;
                    }
                })}
                </tr>
            }      
        });
    }

    return (  
        <Container fluid>
            <Row>
                {props.jsonoutput.length ?
                    <Table borderless hover responsive className='border shadow-sm bg-white'>
                        <thead className='border-bottom bg-light'>
                            <tr>    
                                {getHeader()}
                                {emptyHeader()}                        
                            </tr>
                        </thead>
                        <tbody>
                            {getBody()}
                        </tbody>
                    </Table> : 
                    <div className='empty-message'>
                        <header className='empty-header'>
                            <h1>No tests available</h1>
                        </header>
                    </div>
                }
            </Row>
        </Container>
    );
}
 
export default TableLanding;