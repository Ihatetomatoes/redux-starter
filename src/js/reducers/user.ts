const initialState = {
    user: null,
    name: "John",
    fetching: false,
    fetched: false,
    error: null
}
 
// We use the the object spread syntax (...) as it is less verbose that using 
// Object.assign. We are also making sure we use a return in each case to break out 
// of the switch statement
function user(state = initialState, action) {
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.payload
            }
        case 'FETCH_USER':
            return {
                ...state,
                fetching: true
            }
        case 'FETCH_USER_FULLFILLED':
            return {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload,
            }
        case 'FETCH_USER_REJECTED':
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}
  
  export default user;