import { authConstants } from "../constants";
import { userService } from "../services";
import { history } from "../helpers";

export const verifyEmail = (email) => {
  return (dispatch) => {
    axios
      .post(
        `https://tapestry-pooling.el.r.appspot.com/swagger/?format=openapi/auth/verify-email`,
        {
          key: email,
        }
      )
      .then((response) => {
        dispatch({
          type: authConstants.VERIFY_EMAIL,
          users: response,
        });
      });
  };
};
