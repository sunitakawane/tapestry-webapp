import labConstants from '../../../constants/labConstants'
import {userListApi} from '../../../api/labApi/userListApi'
import {kitListApi} from '../../../api/labApi/kitlistApi'
import {machineListApi} from '../../../api/labApi/machineListApi'

export const labActions = {
    userlist,
    kitlist,
    machinelist
} 

function userlist() {
    console.log('Before API call')
    return(dispatch) => {
        userListApi.userListAll()
            .then((response) => {
                console.log('API call successful')
                dispatch({
                    type: labConstants.USER_LIST_SUCCESS,
                    payload: response.data.data
                });
            })
            .catch((error) => {
                console.log('API call failure')
                dispatch({
                    type: labConstants.USER_LIST_FAILURE,
                    payload: error.toString()
                })
            })
    }
}

function kitlist() {
    console.log('Before API call')
    return(dispatch) => {
        kitListApi.kitList()
            .then((response) => {
                console.log('API call successful')
                dispatch({
                    type: labConstants.KIT_LIST_SUCCESS,
                    payload: response.data.data
                });
            })
            .catch((error) => {
                console.log('API call failure')
                dispatch({
                    type: labConstants.KIT_LIST_FAILURE,
                    payload: error.toString()
                })
            })
    }
}

function machinelist() {
    console.log('Before API call')
    return(dispatch) => {
        machineListApi.machineList()
            .then((response) => {
                console.log('API call successful')
                dispatch({
                    type: labConstants.MACHINE_LIST_SUCCESS,
                    payload: response.data.data
                });
            })
            .catch((error) => {
                console.log('API call failure')
                dispatch({
                    type: labConstants.MACHINE_LIST_FAILURE,
                    payload: error.toString()
                })
            })
    }
}