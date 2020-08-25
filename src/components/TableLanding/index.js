import React,{useState} from 'react';
import {Table, Container, Row, Button, OverlayTrigger, Popover,Modal} from 'react-bootstrap';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";

import './tableLanding.scss'
import getSVG from '../../utils/getSVG'
import Upload from '../../components/Upload';
import useUploadModal from '../../components/Upload/showmodal';
import Test from '../../components/Test';
import useTestModal from '../../components/Test/showmodal';
import url from "../../constants/url";

import {gettestconductedlist,getmachine,getkit} from '../../redux/selectors/labSelectors'
import {testActions} from '../../redux/actions/testActions/testActions'

import testConstants from '../../constants/testConstants'
import {testListApi} from '../../api/testApi/testListApi'

function TableLanding(props) {

    const statusMap = {'3': 'qPCR result pending', '4': 'Tapestry results pending', '5': 'Error in Parsing!'}
    const ongoingrows = ['download','upload','options']
    const completedrows = ['view','options']
    const rows = props.testStatus === 'ongoing' ? ongoingrows : completedrows
    const {showupload, toggleupload} = useUploadModal();
    const {showtest, toggletest} = useTestModal();
    const [testid,settestid] = useState('')
    const [totalsamples,settotalsamples] = useState(0)
    const [user,setuser] = useState('')
    const [prevalancerate,setprevalancerate] = useState(0)
    const [selectedkit,setselectedkit] = useState('')
    const [selectedmachine,setselectedmachine] = useState('')
    const [completed,setcompleted] = useState(0)
    const [download,setdownload] = useState(false)
    const [remarks, setremarks] = useState('')

    // Redux
    const dispatch = useDispatch();
    const testList = (apiFilterOptions) => dispatch(testActions.test_listAll(apiFilterOptions))

    //testList();
    const machine = useSelector(getmachine)
    const kit = useSelector(getkit)
    const testconductedlist = useSelector(gettestconductedlist)

    // async uploadFiles() {
    //     this.setState({ uploadProgress: {}});
    //     const promises = [];
    //     promises.push(this.sendRequest());
    //     try {
    //       await Promise.all(promises);
      
    //       this.setState({ download:true });
    //     } catch (e) {
    //       // Not Production ready! Do some error handling here instead...
    //       this.setState({ download: false });
    //     }
    // }
    
    const sendRequest = () =>{
        // return new Promise((resolve, reject) => {
        toggleupload()
        
        
        // req.upload.addEventListener("progress", event => {
        // if (event.lengthComputable) {
        // this.setState({ completed: (event.loaded / event.total) * 100});
        // }
        // });

        
        
    }
    



    const emptyHeader = () => {
        return rows.map(row => <th key={row}></th>)
    }

    const getKeys = () => {
        return Object.keys(props.jsonoutput[0])
    }

    const onClick = (row) =>{
        axios.get(url["BASE_API_URL"]+ 'lab/' + props.labid + '/test/'+ row[testConstants.TEST_ID]+"/",{
        headers:{
            'Authorization':'Bearer '+ JSON.parse(localStorage.getItem("user"))['token']
        }
        }).then(res => {
            settestid(row[testConstants.TEST_ID])
            settotalsamples(res.data['nsamples'])
            setuser(res.data['assigned_to']['id'])
            setselectedkit(res.data['test_kit']['id'])
            setselectedmachine(res.data['machine_type']['id'])
            setprevalancerate(res.data['prevalence'])
            setremarks(res.data['remark'])
            toggletest()
        })
        .catch(function (error) {
            settestid(row[testConstants.TEST_ID])
            settotalsamples(row[testConstants.SAMPLES])
            setuser('')
            setselectedkit('')
            setselectedmachine('')
            setprevalancerate(null)
            toggletest()
        });
    }

    
    

    const getHeader = () => {
        var heads = getKeys()
        return heads.map(head => 
        {
            if (props.testStatus === 'ongoing') {
                switch(head){
                    case testConstants.TEST_ID: return <th key={head}>TEST ID</th>;
                    case testConstants.SAMPLES: return <th key={head} className='text-center'>NUMBER OF SAMPLES</th>
                    case testConstants.ASSIGNED: return <th key={head}>ASSIGNED TO</th>;
                    case testConstants.STATUS: return <th key={head} className='text-center'>STATUS</th>;
                    default: return null;
                }
            } else {
                switch(head){
                    case testConstants.TEST_ID: return <th key={head}>TEST ID</th>;
                    case testConstants.SAMPLES: return <th key={head} className='text-center'>NUMBER OF SAMPLES</th>
                    case testConstants.ASSIGNED: return <th key={head}>ASSIGNED TO</th>;
                    case testConstants.PREVALENCE: return <th key={head} className='text-center'>PREVALENCE</th>
                    case testConstants.POS_SAMPLES: return <th key={head} className='text-center'>POSITIVE SAMPLES</th>;
                    case testConstants.UNDET_SAMPLES: return <th key={head} className='text-center'>UNDETERMINED SAMPLES</th>
                    default: return null;
                }
            }            
        })
    };

    const optionsot = (props) => {
        return <Popover id="popover-basic">
            <Popover.Title className='text-muted'>DATA OPTIONS</Popover.Title>
            <Popover.Content>
                <Button bsPrefix='btn-text' onClick={()=>onClick(props)}>{getSVG('options')} Edit Pool Test</Button>
            </Popover.Content>
        </Popover>
    }

    const optionsct = () => {
        return <Popover id='popover-basic'>
            
        </Popover>
    }

    const downloadmatrix = (id) => {
        testListApi.testPooling(id)
            .then((response) => {
                const link = document.createElement('a');
                link.href = response.data.data.pooling_matrix_download_url;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
    }

    const getBody = () => {
        var items = props.jsonoutput;
        var keys = getKeys();
        keys = keys.concat(rows)
        return items.map((row, index)=>
        {
            if (props.testStatus === 'ongoing') {
                if (row[testConstants.STATUS] === '5') {
                    return <tr key={index} style={{borderLeft: '5px solid red'}}>
                        {keys.map(key =>
                        {
                            switch(key) {
                                case testConstants.TEST_ID: return <th key={key} className='text-normal text-danger'>{row[key]}</th>;
                                case testConstants.SAMPLES: return <th key={key} className='text-normal text-center text-danger'>{row[key]}</th>;
                                case testConstants.ASSIGNED: return <th key={key} className='text-normal text-danger'>{row[key]}</th>;
                                case testConstants.STATUS: return <th key={key} className='text-normal text-center text-danger'>{statusMap[row[key]]}</th>;
                                case 'download': return <th key={key} className='text-normal text-center'>
                                    {/*<a href={row[testConstants.FILE]} className='download-link text-dark'>Download pooling matrix</a>*/}
                                    <button className='download-button btn-text' onClick={() => {downloadmatrix(row[testConstants.TEST_ID])}}>Download pooling matrix</button>
                                </th>
                                case 'upload': return <th key={key} className='text-normal text-center'>
                                    <a className='text-dark prim-color'>Reupload {getSVG('reupload')}</a>
                                    
                                </th>
                                case 'options': return (
                                    <th key={key} className='text-center'>
                                        <OverlayTrigger trigger='focus' placement='bottom' overlay={optionsot(row)}>
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
                                case testConstants.TEST_ID: return <th key={key} className='text-normal'>{row[key]}</th>;
                                case testConstants.SAMPLES: return <th key={key} className='text-normal text-center'>{row[key]}</th>;
                                case testConstants.ASSIGNED: return <th key={key} className='text-normal'>{row[key]}</th>;
                                case testConstants.STATUS: return <th key={key} className='text-normal text-muted text-center'>{row[key]}</th>;
                                case 'download': return <th key={key} className='text-normal text-center'>
                                    <button className='download-button btn-text' onClick={() => {downloadmatrix(row[testConstants.TEST_ID])}}>Download pooling matrix</button>
                                </th>
                                case 'upload': return <th key={key} className='text-normal text-center btn-text'>
                                    <span onClick={()=>sendRequest()} className='prim-color'>Upload qPCR results</span>
                                    <Modal size="lg" show={showupload}>
                                        <Upload download={download} completed={completed} handleClose={toggleupload}/>
                                    </Modal>
                                </th>
                                case 'options': return (
                                    <th key={key} className='text-center'>
                                        <OverlayTrigger trigger='focus' placement='bottom' overlay={optionsot(row)}>
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
                        case testConstants.TEST_ID: return <th key={key} className='text-normal'>{row[key]}</th>;
                        case testConstants.SAMPLES: return <th key={key} className='text-normal text-center'>{row[key]}</th>;
                        case testConstants.ASSIGNED: return <th key={key} className='text-normal'>{row[key]}</th>;
                        case testConstants.PREVALENCE: return <th key={key} className='text-normal text-center'>{row[key] === null ? '-' : row[key]}</th>
                        case testConstants.POS_SAMPLES: return <th key={key} className='text-normal text-center'>{row[key] === null ? '-' : row[key]}</th>;
                        case testConstants.UNDET_SAMPLES: return <th key={key} className='text-normal text-center'>{row[key] === null ? '-' : row[key]}</th>;
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
                        <thead className='border-bottom bg-shade'>
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
            <Modal size="lg" show={showtest}>
                <Test testid={testid} totalsamples={totalsamples} prevalancerate={prevalancerate} selectedkit={selectedkit} selectedmachine={selectedmachine} remarks={remarks} handleClose={toggletest} machine={machine} kit={kit} testconductedlist={testconductedlist} modalType = {'edit'}/>
            </Modal>
        </Container>
    );
}
 
export default TableLanding;