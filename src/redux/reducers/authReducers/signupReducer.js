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

    case authConstants.COUNTRY_FETCH_SUCCESS:
      var results = action.payload.results;
      console.log(action.payload.results, "reducer-tathu");
      // var country = [];
      // for (var i = 0; i < results.length; i++) {
      //   country.push(results[i]);
      // }
      // console.log(country)

      return {
        countrylist: results,
      };

    case authConstants.COUNTRY_FETCH_FAILURE:
      return {};

    case authConstants.CITY_FETCH_SUCCESS:
      var results = action.payload.results;
      return {
        cities: results,
      };

    case authConstants.CITY_FETCH_FAILURE:
      return {};

    default:
      return state;
  }
}
