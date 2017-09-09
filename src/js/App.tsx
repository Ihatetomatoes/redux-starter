import * as React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from './actions';

// Return a random number between 1 and 10:
const randomNumber = (range: number)=>Math.floor((Math.random() * range) + 1);

interface Props {
    name : string,
    user: {
        name: string,
        username: string
    }, 
    onFetchUser: any,
    fetching: boolean
}

interface State {}

class App extends React.Component < Props, State > {

    componentWillMount(){

    }

    render({name, fetching, user, onFetchUser} = this.props) {
        return (
            <div>
                <p><strong>{name}</strong> is coming from Redux store.</p>
                <button onClick={() => {
                    onFetchUser(randomNumber(10));
                }}>Fetch User</button>
                <p>Fetching users: {`${fetching}`}</p>
                {
                    user && <p>{user.name}</p>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        name: state.user.name,
        user: state.user.user,
        fetching: state.user.fetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchUser: (id: number) => {
            dispatch(fetchUser(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);