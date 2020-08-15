import React,{useState} from 'react';
import { Table, Container, Row, Button, OverlayTrigger, Popover, Modal } from 'react-bootstrap';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";

import './tableLanding.scss'
import getSVG from '../../utils/getSVG'
import Upload from '../../components/Upload';
import useUploadModal from '../../components/Upload/showmodal';
import Test from '../../components/Test';
import useTestModal from '../../components/Test/showmodal';
import url from "../../constants/url";

import { getTestConductedList, getMachine, getKit } from '../../redux/selectors/labSelectors'
import { testActions } from '../../redux/actions/testActions/testActions'
import testConstants from '../../constants/testConstants'

const TableLanding = props => {
  const { testStatus, jsonOutput, labId } = props;

  const statusMap = {
    '3': 'qPCR result pending',
    '4': 'Tapestry results pending',
    '5': 'Error in Parsing!',
  };
  const ongoingRows = ['download', 'upload', 'options'];
  const completedRows = ['view', 'options'];
  const rows = testStatus === 'ongoing' ? ongoingRows : completedRows;
  const {showUpload, toggleUpload} = useUploadModal();
  const {showtest, toggleTest} = useTestModal();

  // state variables
  const [testid, setTestId] = useState('');
  const [totalsamples, setTotalSamples] = useState(0);
  const [user, setUser] = useState('');
  const [prevalancerate, setPrevalanceRate] = useState(0);
  const [selectedkit, setSelectedKit] = useState('');
  const [selectedmachine, setSelectedMachine] = useState('');
  const [completed, setCompleted] = useState(0);
  const [download, setDownload] = useState(false);
  const [remarks, setRemarks] = useState('');

  // Redux
  const dispatch = useDispatch();
  const testList = (apiFilterOptions) => dispatch(testActions.test_listAll(apiFilterOptions));

  //testList();
  const machine = useSelector(getMachine)
  const kit = useSelector(getKit)
  const testConductedList = useSelector(getTestConductedList)

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
    toggleUpload()
    
    
    // req.upload.addEventListener("progress", event => {
    // if (event.lengthComputable) {
    // this.setState({ completed: (event.loaded / event.total) * 100});
    // }
    // });
  }

  const EmptyHeader = rows.map(row => <th key={row}></th>);

  const getKeys = () => Object.keys(jsonOutput[0]);

  const onClick = (row) => {
    const apiUrl = `${url["BASE_API_URL"]}lab/${labId}/test/${row[testConstants.TEST_ID]}/`;
    const rowTestId = row[testConstants.TEST_ID];
    const totalSamples = row[testConstants.SAMPLES];
    axios.get(apiUrl, {
      headers:{
        'Authorization':'Bearer '+ JSON.parse(localStorage.getItem("user"))['token']
      }
    }).then(res => {
      const { nsamples, assigned_to, test_kit, machine_type, prevalence, remark } = res.data;
      setTestId(rowTestId);
      setTotalSamples(nsamples);
      setUser(assigned_to.id);
      setSelectedKit(test_kit.id);
      setSelectedMachine(machine_type.id);
      setPrevalanceRate(prevalence);
      setRemarks(remark);
      console.log(remark);
      toggleTest();
    }).catch(function (error) {
      setTestId(rowTestId);
      setTotalSamples(totalSamples);
      setUser('');
      setSelectedKit('');
      setSelectedMachine('');
      setPrevalanceRate(null);
      toggleTest();
    });
  }

  const getHeader = () => {
    var heads = getKeys()
    //console.log(kit)
    //console.log(machine)
    //console.log(testConductedList)
    return heads.map(head => {
      if (testStatus === 'ongoing') {
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
    });
  };

  const optionsOverlayTrigger = props => {
    return (
      <Popover id="popover-basic">
        <Popover.Title className='text-muted'>DATA OPTIONS</Popover.Title>
        <Popover.Content>
            <Button bsPrefix='btn-text' onClick={()=>onClick(props)}>
              {getSVG('options')} Edit Pool Test
            </Button>
        </Popover.Content>
      </Popover>
    );
  }

  const optionsct = <Popover id='popover-basic' />;

  const downloadMatrix = (filelink) => {
    if (filelink !== '') {
      /*const link = document.createElement('a');
      console.log(link)
      link.href = filelink;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);*/
      console.log('Download')
    } else {
      console.log('No file')
    }
  }

  const getBody = () => {
    var items = jsonOutput;
    var keys = getKeys();
    keys = keys.concat(rows);
    return items.map((row, index) => {
      if (testStatus === 'ongoing') {
        if (row[testConstants.STATUS] === '5') {
          return <tr key={index} style={{borderLeft: '5px solid red'}}>
            {keys.map(key => {
              switch(key) {
                case testConstants.TEST_ID: return <th key={key} className='text-normal text-danger'>{row[key]}</th>;
                case testConstants.SAMPLES: return <th key={key} className='text-normal text-center text-danger'>{row[key]}</th>;
                case testConstants.ASSIGNED: return <th key={key} className='text-normal text-danger'>{row[key]}</th>;
                case testConstants.STATUS: return <th key={key} className='text-normal text-center text-danger'>{statusMap[row[key]]}</th>;
                case 'download': return <th key={key} className='text-normal text-center'>
                  {/*<a href={row[testConstants.FILE]} className='download-link text-dark'>Download pooling matrix</a>*/}
                  <button className='download-button' onClick={downloadMatrix(row[testConstants.FILE])}>Download pooling matrix</button>
                </th>
                case 'upload': return <th key={key} className='text-normal text-center'>
                  <a className='text-dark prim-color'>Reupload {getSVG('reupload')}</a>
                </th>
                case 'options': return (
                  <th key={key} className='text-center'>
                    <OverlayTrigger trigger='focus' placement='bottom' overlay={optionsOverlayTrigger(row)}>
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
                      <button className='download-button' onClick={() => {downloadMatrix(row[testConstants.FILE])}}>Download pooling matrix</button>
                    </th>
                    case 'upload': return <th key={key} className='text-normal text-center'>
                      <span onClick={()=>sendRequest()} className='prim-color'>Upload qPCR results</span>
                      <Modal size="lg" show={showUpload}>
                          <Upload download={download} completed={completed} handleClose={toggleUpload}/>
                      </Modal>
                    </th>
                    case 'options': return (
                      <th key={key} className='text-center'>
                        <OverlayTrigger trigger='focus' placement='bottom' overlay={optionsOverlayTrigger(row)}>
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
        {jsonOutput.length ?
          <Table borderless hover responsive className='border shadow-sm bg-white'>
            <thead className='border-bottom bg-light'>
              <tr>    
                {getHeader()}
                {EmptyHeader}                        
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
        <Test testid={testid} totalsamples={totalsamples} prevalancerate={prevalancerate} selectedkit={selectedkit} selectedmachine={selectedmachine} remarks={remarks} handleClose={toggleTest} machine={machine} kit={kit} testConductedList={testConductedList} modalType = {'edit'}/>
      </Modal>
    </Container>
  );
}
 
export default TableLanding;