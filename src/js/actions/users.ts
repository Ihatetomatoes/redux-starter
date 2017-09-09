import * as ActionTypes from '../actions/actionTypes'

export const setName = (name:string) => ({
    type: ActionTypes.User.SET_NAME,
    payload: name
})


// Thunk Action 
// Thunk middleware knows how to handle functions.
// It passes the dispatch method as an argument to the function,
// thus making it able to dispatch actions itself.
export const fetchUser = (id: number) => {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    return (dispatch) => {
        
        // First dispatch: the app state is updated to inform
        // that the API call is starting.
        dispatch({type: ActionTypes.API.FETCH_USER})

        // We use fetch to make our API call
        // Fetch is promised based and will dispatch an aysncronous
        // action when resolved or rejected
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(
                response => response.json()         
            )
            .then(
                // If successful
                parsedJSON => {
                    dispatch({
                        type: ActionTypes.API.FETCH_USER_FULLFILLED,
                        payload: parsedJSON
                    })
                },
                // If there was an error
                error => (         
                     dispatch({
                        type: ActionTypes.API.FETCH_USER_REJECTED,
                        payload: error
                    })
                )  
            )

    }
}