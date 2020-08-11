import axios from 'axios';

import testConstants from '../../../constants/testConstants'
import url from "../../../constants/url";
import { waitForDomChange } from '@testing-library/react';
import {testdata} from '../../../api/testApi/testdata'

const initialState = {
    users : [],
    machine : [],
    kit : [],
    testconductedlist : []
};

    

export default function testReducer(state=initialState, action) {
    // if(localStorage.getItem("user") !== null)
    // {
    //     axios.get(url["BASE_API_URL"]+'machine-type/',{
    //         headers:{
    //             'Authorization':'Bearer '+ JSON.parse(localStorage.getItem("user"))['token']
    //         }
    //         }).then(res => {
    //             state.machine = res.data.results
    //         }).catch(err=>{
    //             console.log(err)
    //         }
    //         )

        
    //     axios.get(url["BASE_API_URL"]+'test-kit/',{
    //         headers:{
    //             'Authorization':'Bearer '+ JSON.parse(localStorage.getItem("user"))['token']
    //         }
    //         }).then(res => {
    //             state.kit = res.data.results     
    //         }).catch(err=>{
    //             console.log(err)
    //         }
    //         )
        
    //     axios.get(url["BASE_API_URL"]+'user/',{
    //         headers:{
    //             'Authorization':'Bearer '+ JSON.parse(localStorage.getItem("user"))['token']
    //         }
    //         }).then(res => {
    //             state.testconductedlist = res.data.results     
    //         }).catch(err=>{
    //             console.log(err)
    //         }
    //         )
    //     }
    //     else
    //     {
    //         if(window.location.href !== url["BASE_URL"] + 'login')
    //         {
    //             window.location.href = url["BASE_URL"] + 'login'
    //         }
    //     }

    testdata('machine-type').then(results=>state.machine = results)
    testdata('test-kit').then(results=>state.kit=results)
    testdata('user').then(results=>state.testconductedlist=results)

    switch(action.type){

        case testConstants.TEST_LIST_SUCCESS: 
            console.log('Test list success');
            const newstate = {...state}
            newstate.users = action.payload
            // console.log(newstate.users['data'])
            return newstate

        case testConstants.TEST_LIST_FAILURE:
            console.log('Test list failure\n' + action.payload)
            return state

        case testConstants.TEST_LISTID_SUCCESS:
            console.log('Test list for single id success')
            // Code to check id, see if any update required
            const stateListID = {...state}
            stateListID.tests.forEach((test, index) => {
                test.id === action.test.id ? 
                    stateListID.tests[index] = action.payload :
                    stateListID.tests[index] = test;
            })
            return stateListID

        case testConstants.TEST_LISTID_FAILURE:
            console.log('Test list ID failure\n' + action.payload)
            return state

        case testConstants.TEST_CREATE_SUCCESS:
            console.log('New test created');
            const stateCreate = {...state}
            stateCreate.tests.push(action.test)
            return stateCreate

        case testConstants.TEST_CREATE_FAILURE:
            console.log('Failed to create test\n' + action.payload)
            return state

        case testConstants.TEST_UPDATE_SUCCESS: 
            console.log('Test Updated');
            const stateUpdate = {...state}
            stateUpdate.tests.forEach((test, index) => {
                test.id === action.test.id ? 
                    stateUpdate.tests[index] = action.test :
                    stateUpdate.tests[index] = test;
            })
            return stateUpdate

        case testConstants.TEST_UPDATE_FAILURE:
            console.log('Failed to update test\n' + action.payload)
            return state

        case testConstants.TEST_PUPDATE_SUCCESS:
            console.log('Entries of Test Updated');
            const statePUpdate = {...state}
            statePUpdate.tests.forEach((test, index) => {
                test.id === action.testId ? 
                    test[action.keyId] = action.value :
                    test[action.keyId] = test[action.keyId];
                statePUpdate.tests[index] = test
            })
            return statePUpdate

        case testConstants.TEST_PUPDATE_FAILURE:
            console.log('Failed to update entries\n' + action.payload)
            return state
            
        default: return state;
    }
}