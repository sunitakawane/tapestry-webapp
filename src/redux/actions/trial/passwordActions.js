import { authConstants } from "../../constants/authConstants";

export const passwordActions = {
  resetPassword,
  changePassword,
  confirmPassword,
};

function resetPassword(email) {
  return (dispatch) => {
    axios
      .post(
        `https://tapestry-pooling.el.r.appspot.com/swagger/?format=openapi/auth/password/reset`,
        {
          email: email,
        }
      )
      .then((response) => {
        dispatch({
          type: authConstants.RESET_PASSWORD,
          users: repsonse,
        });
      });
  };
}

function confirmPassword(user, token) {
  return (dispatch) => {
    axios
      .post(
        `https://tapestry-pooling.el.r.appspot.com/swagger/?format=openapi/auth/password/reset/confirm`,
        {
          new_password1: user.new_password,
          new_password2: user.confirm_password,
          uid: user.id,
          token: token,
        }
      )
      .then((response) => {
        dispatch({
          type: authConstants.CONFIRM_PASSWORD,
          users: repsonse,
        });
      });
  };
}

function changePassword(new_password, confirm_password) {
  return (dispatch) => {
    axios
      .post(
        `https://tapestry-pooling.el.r.appspot.com/swagger/?format=openapi/auth/password/change`,
        {
          new_password1: new_password,
          new_password2: confirm_password,
        }
      )
      .then((response) => {
        dispatch({
          type: authConstants.CHANGE_PASSWORD,
          users: repsonse,
        });
      });
  };
}
