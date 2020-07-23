const authConstants = {
  HANDLE_CHANGE: "HANDLE_CHANGE",

  VERIFY_EMAIL: "VERIFY_EMAIL",

  SIGN_UP_REQUESTED: "SIGN_UP_REQUESTED",
  SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS",
  SIGN_UP_FAILURE: "SIGN_UP_FAILURE",

  LOGIN_REQUESTED: "LOGIN_REQUESTED",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",

  LOGOUT: "LOGOUT",

  RESET_PASSWORD_REQUESTED: "RESET_PASSWORD_REQUESTED",
  RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_FAILURE: "RESET_PASSWORD_FAILURE",

  CONFIRM_PASSWORD: "CONFIRM_PASSWORD",
  CHANGE_PASSWORD: "CHANGE_PASSWORD",
};

export default authConstants;

// when LOGIN_REQUESTED would be called then we would make isSubmitted: true
// when LOGIN_SUCCESS would be called then we would make isLogged: true and also load a new page
// when LOGIN_FAILURE would be called then we would make isLogged: false

// we will create an async function that would call API and finally would return
// either of LOGIN_SUCCESS or LOGIN_FAILURE based on the repsonse from the server
// redirecting can be done using this.props.history.push('url') where url is the relative path would like to redirect to

// In React, we would have state elements specific for the usage of those inside the Login Component
// Functions like handleChange and handleSubmit would be implemented on a react-state base

// we can have Props like isLoggedIn as a props (like add them in the state tree)

// The flow for the Login would be
// Initally their would be fields like email and password and those would be made available to only Login Page
// Functions like onClick and onSubmit will also be implemented state-wise

// A person will type in his email and password
// Here we would need a validator function which would validate if the the email and password filled is valid
// else it would generate an error message and also if the reponsed are filled before submitted

// after clicking the submit button, first a LOGIN_REQUESTED type action will be called which would be send to the reducer
// that would set the value of isSubmitted to true

// OnSubmit or {handleSubmit} will have an option to call a function login() that would be used for making API calls and
// then returning LOGIN_SUCCESS or LOGIN_FAILURE depending on API response

// RESET_PASSWORD_REQUESTED
// RESET_PASSWORD_SUCCESS
// RESET_PASSWORD_FAILURE

// whenever a user submits his email then we want to call RESET_PASSWORD_REQUESTED, no state change will occur except isSubmitted: true
// after that a resetPassword() function is called which makes a call to API and that returns either a successful message or a failure message
// if a succes comes then we call RESET_PASSWORD_SUCCESS and direct them to a page set-password
// else on error, we diplay a message which is incorrect email (isInValid: true ) and use that for diplaying message

// SIGN_UP_REQUESTED
