import userConstants from "../../constants/userConstants";

const initalState = {};

export default function user(state = initalState, action) {
  switch (action.type) {
    case userConstants.GET_USER_SUCCESS:
      return {
        isSubmitted: true,
      };

    default:
      return state;
  }
}
