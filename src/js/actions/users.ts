export const setName = (name:string) => ({
    type: 'SET_NAME',
    payload: name
})

export const fetchUser = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(parsedJSON => {
                dispatch({
                    type: "FETCH_USER",
                    payload: parsedJSON
                })
            })
            .catch((error) => {
                dispatch({
                    type: "FETCH_USER_REJECTED",
                    payload: error
                })
            })
    }
}