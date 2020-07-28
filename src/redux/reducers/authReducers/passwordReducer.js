import authConstants from "../../../constants/authConstants";

const initalState = {};

export default function passwordReducer(state = initalState, action) {
  switch (action.type) {
    case authConstants.RESET_PASSWORD_REQUESTED:
      return {
        isSubmitted: true,
      };

    case authConstants.RESET_PASSWORD_SUCCESS:
      return {};

    case authConstants.RESET_PASSWORD_FAILURE:
      return {
        inInValid: true,
      };

    case authConstants.SET_PASSWORD_REQUESTED:
      return {
        isSubmitted: true,
      };

    case authConstants.SET_PASSWORD_SUCCESS:
      return {};

    case authConstants.SET_PASSWORD_FAILURE:
      return {
        inInValid: true,
      };

    case authConstants.CHANGE_PASSWORD_REQUESTED:
      return {
        isSubmitted: true,
      };

    case authConstants.CHANGE_PASSWORD_SUCCESS:
      return {};

    case authConstants.CHANGE_PASSWORD_FAILURE:
      return {
        inInValid: true,
      };
    default:
      return state;
  }
}
