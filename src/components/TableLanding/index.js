import React, { Component } from 'react';
import {Table, Container, Row, Button, OverlayTrigger, Popover} from 'react-bootstrap';

import './tableLanding.scss'
import getSVG from '../../utils/getSVG'

class TableLanding extends Component {

    getKeys = function() {
        return Object.keys(this.props.jsonoutput[0])
    }

    getHeader = function() {
        var heads = this.getKeys()
        return heads.map(head => 
        {
            if (head.indexOf('component') === -1) {
                switch(head){
                    case 'TEST ID': return <th key={head}>{head}</th>;
                    case 'ASSIGNED TO': return <th key={head}>{head}</th>;
                    default: return <th key={head} className='text-center'>{head}</th>;
                }
                 
            } else {
                return <th key={head} className='text-center'></th>
            }
        })
    };

    download = function() {
        return <Popover id="popover-basic">
            <Popover.Title className='text-muted'>DOWNLOAD OPTIONS</Popover.Title>
            <Popover.Content>
                <Button bsPrefix='btn-text bg-success' style={{width: '100%'}}>{getSVG('download')} Download .xls</Button>
                <Button bsPrefix='btn-text' style={{width: '100%'}}>{getSVG('download')} Download .xlsx</Button>
            </Popover.Content>
        </Popover>
    }

    optionsot = function() {
        return <Popover id="popover-basic">
            <Popover.Title className='text-muted'>DATA OPTIONS</Popover.Title>
            <Popover.Content>
                <Button bsPrefix='btn-text'>{getSVG('options')} Edit Pool Test</Button>
            </Popover.Content>
        </Popover>
    }

    optionsct = function() {
        return <Popover id='popover-basic'>
            
        </Popover>
    }

    getBody = function() {
        var items = this.props.jsonoutput;
        var keys = this.getKeys();
        return items.map((row, index)=>{
            if (row['STATUS'] === 'Error in Parsing!') {
            return (
            <tr key={index} style={{borderLeft: '5px solid red'}}>
                {keys.map(key => 
                { 
                    if (key.indexOf('component') === -1) { /*Normal text*/
                        switch (key){
                            case 'TEST ID':
                                if (row['component_nt'] === 'yes') {
                                    return <th key={key} className='text-normal text-danger'>{row[key]} <span className='prim-color'>New!</span></th>
                                } else {
                                    return <th key={key} className='text-normal text-danger'>{row[key]}</th>;
                                }
                            case 'ASSIGNED TO':
                                return <th key={key} className='text-normal text-danger'>{row[key]}</th>;
                            default:
                                return <th key={key} className='text-normal text-center text-danger'>{row[key]}</th>;
                        }
                    } else {    /*Buttons*/
                        const comp = row[key];
                        const text = comp['text'];
                        /* Code to parse component */
                        switch (key) {
                            case 'component_D':
                                return (
                                    <th key={key} className='text-center'>
                                        <OverlayTrigger trigger='focus' placement='bottom' overlay={this.download()}>
                                            <Button bsPrefix='btn-text'>{text}</Button>
                                        </OverlayTrigger>
                                    </th>
                                );
                            case 'component_U':
                                return (
                                    <th key={key} className='text-center'>
                                        <Button bsPrefix='btn-text'>{text} {getSVG('reupload')}</Button>
                                    </th>
                                );
                            case 'component_O':
                                return (
                                    <th key={key} className='text-center'>
                                        <OverlayTrigger trigger='focus' placement='bottom' overlay={this.optionsot()}>
                                            <Button bsPrefix='btn-text prim-color'>{getSVG('dots')}</Button>
                                        </OverlayTrigger>                                            
                                    </th>
                                );
                            default :
                                return null;
                        }                                                                                                   
                    }
                })}      
            </tr>)
            } else {
                return (
                    <tr key={index}>
                        {keys.map(key => 
                        { 
                            if (key.indexOf('component') === -1) { /*Normal text*/
                                switch (key){
                                    case 'TEST ID':
                                        if (row['component_nt'] === 'yes') {
                                            return <th key={key} className='text-normal'>{row[key]} <span className='prim-color'>New!</span></th>
                                        } else {
                                            return <th key={key} className='text-normal'>{row[key]}</th>;
                                        }
                                    case 'ASSIGNED TO':
                                        return <th key={key} className='text-normal'>{row[key]}</th>;
                                    //case 'NUMBER OF SAMPLES' || 'STATUS' || 'POSITIVE SAMPLES' || 'UNDETERMINED SAMPLES':
                                    default:
                                        return <th key={key} className='text-normal text-center'>{row[key]}</th>;
                                    //default: 
                                    //    return null;
                                }
                            } else {    /*Buttons*/
                                const comp = row[key];
                                const text = comp['text'];
                                const view = comp['view'];
                                /* Code to parse component */
                                switch (key) {
                                    case 'component_D':
                                        return (
                                            <th key={key} className='text-center'>
                                                <OverlayTrigger trigger='focus' placement='bottom' overlay={this.download()}>
                                                    <Button bsPrefix='btn-text'>{text}</Button>
                                                </OverlayTrigger>
                                            </th>
                                        );
                                    case 'component_U':
                                        return (
                                            <th key={key} className='text-center'>
                                                <Button bsPrefix='btn-text prim-color'>{text}</Button>
                                            </th>
                                        );
                                    case 'component_R':
                                        return (
                                            <th key={key} className='text-center'>
                                                <Button bsPrefix='btn-text prim-color'>{text}</Button>
                                            </th>
                                        );
                                    case 'component_O':
                                        return (
                                            <th key={key} className='text-center'>
                                                <OverlayTrigger trigger='focus' placement='bottom' overlay={view === 'Options_OT'? this.optionsot() : this.optionsct()}>
                                                    <Button bsPrefix='btn-text prim-color'>{getSVG('dots')}</Button>
                                                </OverlayTrigger>                                            
                                            </th>
                                        );
                                    default :
                                        return null;
                                }                                                                                                   
                            }
                        })}      
                    </tr>)
            }
        });
    }

    render() { 
        return (  
            <Container fluid>
                <Row>
                    <Table borderless hover responsive className='border shadow-sm bg-white'>
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