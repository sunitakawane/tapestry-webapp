import axios from 'axios';

import testConstants from '../../../constants/testConstants'
import url from "../../../constants/url";

const initialState = {
    count: 8,
    tests: [
        {'TEST_ID': 27435, 'NUMBER_OF_SAMPLES': 487, 'ASSIGNED_TO': 'Harmen Potter', 'STATUS': 'In progress', 'file': '/ongoingtests#', 'POSITIVE_SAMPLES': 4, 'UNDETERMINED_SAMPLES': 2},
        {'TEST_ID': 27435, 'NUMBER_OF_SAMPLES': 487, 'ASSIGNED_TO': 'Harmen Potter', 'STATUS': 'In progress', 'file': '/ongoingtests#', 'POSITIVE_SAMPLES': 4, 'UNDETERMINED_SAMPLES': 2},
        {'TEST_ID': 27436, 'NUMBER_OF_SAMPLES': 487, 'ASSIGNED_TO': 'Harmen Potter', 'STATUS': 'Error in Parsing!', 'file': '/ongoingtests#', 'POSITIVE_SAMPLES': 4, 'UNDETERMINED_SAMPLES': 2},
        {'TEST_ID': 27437, 'NUMBER_OF_SAMPLES': 487, 'ASSIGNED_TO': 'Harmen Potter', 'STATUS': 'In progress', 'file': '/ongoingtests#', 'POSITIVE_SAMPLES': 4, 'UNDETERMINED_SAMPLES': 2},
        {'TEST_ID': 27432, 'NUMBER_OF_SAMPLES': 487, 'ASSIGNED_TO': 'Harmen Potter', 'STATUS': 'Completed', 'file': '/ongoingtests#', 'POSITIVE_SAMPLES': 4, 'UNDETERMINED_SAMPLES': 2},
        {'TEST_ID': 27432, 'NUMBER_OF_SAMPLES': 487, 'ASSIGNED_TO': 'Harmen Potter', 'STATUS': 'Completed', 'file': '/ongoingtests#', 'POSITIVE_SAMPLES': 4, 'UNDETERMINED_SAMPLES': 2},
        {'TEST_ID': 27433, 'NUMBER_OF_SAMPLES': 487, 'ASSIGNED_TO': 'Harmen Potter', 'STATUS': 'Completed', 'file': '/ongoingtests#', 'POSITIVE_SAMPLES': 4, 'UNDETERMINED_SAMPLES': 2},
        {'TEST_ID': 27444, 'NUMBER_OF_SAMPLES': 487, 'ASSIGNED_TO': 'Harmen Potter', 'STATUS': 'Completed', 'file': '/ongoingtests#', 'POSITIVE_SAMPLES': 4, 'UNDETERMINED_SAMPLES': 2},
    ],
    testconductedlist:[],
    machine:[],
    kit:[],
};

    

export default function testReducer(state=initialState, action) {
    axios.get(url["BASE_API_URL"]+'machine-type/',{
    headers:{
        'Authorization':'Bearer '+ JSON.parse(localStorage.getItem("user"))['token']
    }
    }).then(res => {
      state.machine = res.data.results.map(item=>item['no_of_wells']+'wells(' + item['dim_x'] + 'x' + item['dim_y'] + ') ' + item['name']);
    })
    axios.get(url["BASE_API_URL"]+'test-kit/',{
    headers:{
        'Authorization':'Bearer '+ JSON.parse(localStorage.getItem("user"))['token']
    }
    }).then(res => {
      state.kit = res.data.results.map(item=>"("+item['gene_type'].join(' ')+") "+item['name']);      
    })
    switch(action.type){
        case testConstants.TEST_LIST: 
            console.log(state.kittype);
            return state

        case testConstants.TEST_CREATE:
            console.log('New test created');
            const stateCreate = {...state}
            stateCreate.tests.push(action.test)
            return stateCreate

        case testConstants.TEST_UPDATE : 
            console.log('Test Updated');
            const stateUpdate = {...state}
            stateUpdate.tests.forEach((test, index) => {
                test.TEST_ID === action.test.TEST_ID ? 
                    stateUpdate.tests[index] = action.test :
                    stateUpdate.tests[index] = test;
            })
            return stateUpdate

        case testConstants.TEST_PUPDATE :
            console.log('Entries of Test Updated');
            const statePUpdate = {...state}
            statePUpdate.tests.forEach((test, index) => {
                test.TEST_ID === action.testId ? 
                    test[action.keyId] = action.value :
                    test[action.keyId] = test[action.keyId];
                statePUpdate.tests[index] = test
            })
            return statePUpdate
            
        default: return state;
    }
}