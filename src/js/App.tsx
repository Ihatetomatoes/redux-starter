import * as React from 'react';
import {connect} from 'react-redux';

interface Props {
    name : string
}

interface State {}

class App extends React.Component < Props,
State > {
    render() {
        return (
            <div>
                <p><strong>{this.props.name}</strong> is coming from Redux store.</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {name: state.user.name}
}

export default connect(mapStateToProps)(App);