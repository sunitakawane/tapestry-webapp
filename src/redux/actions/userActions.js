import { userConstants } from "../../constants/userConstants";

export const userActions = {
  success,
  error,
  clear,
};

function success(msg) {
  return {
    type: userConstants.SUCCESS,
    payload: msg,
  };
}

function error(msg) {
  return {
    type: userConstants.ERROR,
    payload: msg,
  };
}

function clear() {
  return {
    type: userConstants.CLEAR,
  };
}
