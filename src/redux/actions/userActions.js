import { userApi } from "../../api/user";
import userConstants from "../../constants/userConstants";

export const userActions = {
  getUser,
};

function getUser() {
  return (dispatch) => {
    userApi
      .getUser()
      .then((response) => {
        localStorage.setItem("full-user-info", JSON.stringify(response.data));
        dispatch({
          type: userConstants.GET_USER_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: userConstants.GET_USER_FAILURE,
          payload: error.toString(),
        });
      });
  };
}
