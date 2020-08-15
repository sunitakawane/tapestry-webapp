import labConstants from '../../../constants/labConstants'

const initialState = {
  machine : [],
  kit : [],
  testConductedList : []
};

export default function testReducer(state=initialState, action) {
  switch(action.type) {
    case labConstants.USER_LIST_SUCCESS: 
      console.log("All users listed")
      const stateUser = {
        ...state,
        testConductedList: action.payload
      }
      return stateUser

    case labConstants.USER_LIST_FAILURE:
      console.log("User list failed" + action.payload)
      return state

    case labConstants.KIT_LIST_SUCCESS:
      console.log("Kit list success")
      const stateKit = {
        ...state,
        kit: action.payload
      }
      return stateKit

    case labConstants.KIT_LIST_FAILURE:
      console.log("Kit list failed" + action.payload)
      return state

    case labConstants.MACHINE_LIST_SUCCESS:
      console.log("Machine list success")
      const stateMachine = {
        ...state,
        machine: action.payload
      }
      return stateMachine

    case labConstants.MACHINE_LIST_FAILURE:
      console.log("Machine list failed" + action.payload)
      return state

    default:
      return state
  }
}