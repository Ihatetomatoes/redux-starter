import * as React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from './actions';

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

class App extends React.Component < Props,
State > {

    componentWillMount(){

    }

    render() {
        return (
            <div>
                <p><strong>{this.props.name}</strong> is coming from Redux store.</p>
                <button onClick={() => {
                    this.props.onFetchUser();
                }}>Fetch User</button>
                <p>Fetching users: {`${this.props.fetching}`}</p>
                {
                    this.props.user && <p>{this.props.user.name}</p>
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
        onFetchUser: () => {
            dispatch(fetchUser())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);