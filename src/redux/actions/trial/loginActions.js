import { authConstants } from "../../../constants/authConstants";

export const loginActions = {
  login,
  logout,
};

function login(user) {
  return (dispatch) => {
    axios
      .post(
        `https://tapestry-pooling.el.r.appspot.com/swagger/?format=openapi/auth/login`,
        {
          username: user.name,
          email: user.email,
          password: user.password,
        }
      )
      .then((response) => {
        dispatch({
          type: authConstants.LOGIN,
          users: response,
        });
      });
  };
}

function logout() {
  return (dispatch) => {
    axios
      .post(
        `https://tapestry-pooling.el.r.appspot.com/swagger/?format=openapi/auth/logout`
      )
      .then((response) => {
        console.log(response);

        axios
          .get(
            "https://tapestry-pooling.el.r.appspot.com/swagger/?format=openapi/auth/logout"
          )
          .then((get_response) => {
            dispatch({
              type: authConstants.LOGOUT,
              users: repsonse,
            });
          });
      });
  };
}
