import testConstants from '../../../constants/testConstants'
import {testListApi} from '../../../api/testApi/testListApi'
import {testdata} from '../../../api/testApi/testdata'
import {testUpdateApi} from '../../../api/testApi/testUpdateApi'
import {testCreateApi} from '../../../api/testApi/testCreateApi'

export const testActions = {
    test_listAll,
    test_listId,
    test_create,
    test_update,
    test_pupdate
};

function test_listAll(filterOptions,labid) {
    console.log('Before API call')
    return (dispatch) => {
        testListApi.testListAll(filterOptions,labid)
            .then((response) => {
                console.log('API call successful')
                dispatch({
                    type: testConstants.TEST_LIST_SUCCESS,
                    payload: response.data
                });
            })
            .catch((error) => {
                console.log('API call failure')
                dispatch({
                    type: testConstants.TEST_LIST_FAILURE,
                    payload: error.toString()
                });
            })
    }
}

function test_listId(id,labid) {
    console.log('Before API call')
    return (dispatch) => {
        testListApi.testListId(id,labid)
            .then((response) => {
                console.log('API call successful')
                dispatch({
                    type: testConstants.TEST_LISTID_SUCCESS,
                    payload: response.data
                });
            })
            .catch((error) => {
                console.log('API call failure')
                dispatch({
                    type: testConstants.TEST_LISTID_FAILURE,
                    payload: error.toString()
                });
            })
    }
}

function test_create(test,labid) {
    console.log('Before API call')
    //console.log(testdata())
    return (dispatch) => {
        testCreateApi.testCreate(test,labid)
             .then((response) => {
                 console.log('API call successful')
                 dispatch({
                     type: testConstants.TEST_CREATE_SUCCESS,
                     payload: response.data,
                     test
                 })
             })
             .catch((error) => {
                 console.log('API call failure')
                 dispatch({
                     type: testConstants.TEST_CREATE_FAILURE,
                     payload: error.toString()
                 });
             })
     }
}

function test_update(test,labid) {
    console.log('Before API call')
    return (dispatch) => {
        testUpdateApi.testUpdate(test,labid)
            .then((response) => {
                console.log('API call successful')
                dispatch({
                    type: testConstants.TEST_UPDATE_SUCCESS,
                    payload: response.data,
                    test
                });
            })
            .catch((error) => {
                console.log('API call failure')
                dispatch({
                    type: testConstants.TEST_UPDATE_FAILURE,
                    payload: error.toString()
                });
            })
    }
}

function test_pupdate(testId, keyId, value, labid) {
    console.log('Before API call')
    return (dispatch) => {
        testUpdateApi.testPUpdate(testId, keyId, value, labid)
            .then((response) => {
                console.log('API call successful')
                dispatch({
                    type: testConstants.TEST_PUPDATE_SUCCESS,
                    payload: response.data,
                    test,
                    keyId,
                    value
                });
            })
            .catch((error) => {
                console.log('API call failure')
                dispatch({
                    type: testConstants.TEST_PUPDATE_FAILURE,
                    payload: error.toString()
                });
            })
    }
}