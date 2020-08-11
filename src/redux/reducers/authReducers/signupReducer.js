import authConstants from "../../../constants/authConstants";

const initalState = {
  isSubmitted: false,
};

export default function signUpReducer(state = initalState, action) {
  switch (action.type) {
    case authConstants.SIGN_UP_REQUESTED:
      return {
        isSubmitted: true,
      };

    case authConstants.SIGN_UP_SUCCESS:
      return {
        isRegistered: true,
      };

    case authConstants.SIGN_UP_FAILURE:
      return {
        isInvalid: true,
      };

    case authConstants.LOCATION_FETCH_SUCCESS:
      // console.log("reducer", action.payload.results[0]);
      var results = action.payload.results;
      var country = [];
      for (var i = 0; i < results.length; i++) {
        country.push(results[i].names);
      }
      
      return {
        countrylist: country,
      };

    default:
      return state;
  }
}
