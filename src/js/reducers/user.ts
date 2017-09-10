import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  user: null,
  users: [],
  name: "John",
  fetching: false,
  fetched: false,
  error: null
};

// We use the the object spread syntax (...) as it is less verbose that using
// Object.assign. We are also making sure we use a return in each case to break
// out of the switch statement
function user(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.User.SET_NAME:
      return {
        ...state,
        name: action.payload
      };
    case ActionTypes.API.FETCH_USER:
      return {
        ...state,
        fetching: true
      };
    case ActionTypes.API.FETCH_USER_FULLFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload
      };
    case ActionTypes.API.FETCH_USERS_FULLFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      };
    case ActionTypes.API.FETCH_USER_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default user;
