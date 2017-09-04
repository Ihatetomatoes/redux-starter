const initialState = {
    user: null,
    name: "John",
    fetching: false,
    fetched: false,
    error: null
}
  
function user(state = initialState, action) {
    switch (action.type) {
        case 'SET_NAME':
            state = {
                ...state,
                name: action.payload
            }
        case 'FETCH_USER':
            state = {
                ...state,
                fetching: true
            }
        case 'FETCH_USER_FULLFILLED':
            state = {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload,
            }
        case 'FETCH_USER_REJECTED':
            state = {
                ...state,
                fetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}
  
  export default user;