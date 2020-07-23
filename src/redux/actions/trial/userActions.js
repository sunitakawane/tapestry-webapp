import { userConstants } from "../constants";
import { userService } from "../services";
import { alertActions } from "./";
import { history } from "../helpers";

export const userActions = {
  login,
  logout,
  signUp,
  getAll,
  delete: _delete,
};

function login(email, password) {
  return (dispatch) => {
    dispatch(request({ email }));

    userService.login(email, password).then(
      (user) => {
        dispatch(success(user));
        history.push("/");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUESTS, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function signUp(user) {
  return (dispatch) => {
    dispatch(request(user));

    userService.signUp(user).then(
      (user) => {
        dispatch(success());
        history.push("/login");
        dispatch(alertActions.success("Sign Up Successful"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.SIGNUP_REQUESTS, user };
  }
  function success(user) {
    return { type: userConstants.SIGNUP_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.SIGNUP_FAILURE, error };
  }
}

function getAll() {
  return (dispatch) => {
    dispatch(request());

    userService.getAll().then(
      (users) => dispatch(success(users)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: userConstants.GETALL_REQUESTS };
  }
  function success(users) {
    return { type: userConstants.GETALL_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GETALL_FAILURE, error };
  }
}

function _delete(id) {
  return (dispatch) => {
    dispatch(request(id));

    userService.delete(id).then(
      (user) => dispatch(success(id)),
      (error) => dispatch(failure(id, error.toString()))
    );
  };

  function request(id) {
    return { type: userConstants.DELETE_REQUESTS, id };
  }
  function success(id) {
    return { type: userConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: userConstants.DELETE_FAILURE, id, error };
  }
}

export const AddUser = (params) => {
  console.log("AddUser");

  return dispatch => {
      console.log("Add User dispatch");

      axios.post(`https://tapestry-pooling.el.r.appspot.com/swagger/?format=openapi/auth/verify-email`, {params})
      .then(response => {
          console.log(response);
      })
  };
};

