const initialState = {
    name: "John"
}
  
function user(state = initialState, action) {
    switch (action.type) {
        case 'SET_NAME':
            state = {
                ...state,
                name: action.payload
            }
        default:
            return state;
    }
}
  
  export default user;