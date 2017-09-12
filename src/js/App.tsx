import * as React from "react";
import { connect } from "react-redux";
import { fetchUser, fetchUsers } from "./actions";

import * as classNames from "classnames";

// Return a random number between 1 and 10:
const randomNumber = (range: number) => Math.floor(Math.random() * range + 1);

interface Props {
  name: string;
  user: {
    name: string;
    username: string;
  };
  users: Array<any>;
  onFetchUser: any;
  onFetchUsers: any;
  fetching: boolean;
}

interface State {}

class App extends React.Component<Props, State> {
  componentWillMount() {}

  render(
    { name, fetching, user, users, onFetchUser, onFetchUsers } = this.props
  ) {
    const wrapperClass = classNames({
      wrapper: true,
      "is-fetching": fetching,
      "data-fetched": user && !fetching
    });
    return (
      <div className={wrapperClass}>
        <h1>Getting started with Redux</h1>
        <h2>1. Set Initial State</h2>
        <ul>
          <li>
            Create Redux store with a default config -{" "}
            <code>/stores/store.ts</code>
          </li>
        </ul>
        <p className="code">
          <strong>{name}</strong> is coming from Redux store.
        </p>
        <h2>2. Click to dispatch an action</h2>
        <p>
          <button
            onClick={() => {
              onFetchUser(randomNumber(10));
            }}
          >
            Fetch User
          </button>
        </p>
        <ul>
          <li>
            Trigger <strong>fetchUser</strong> Thunk action that contains an API
            call - <code>/actions/users.ts</code>
          </li>
          <li>
            Once the <strong>API call is resolved</strong> update Redux store
            with a <strong>reducer</strong> -
            <code>/reducers/user.ts</code>
          </li>
        </ul>
        <div>
          <h2>3. Set fetching to true while loading new data</h2>
          <p className="code">Fetching users: <strong>{`${fetching}`}</strong></p>
        </div>
        {user && (
          <div>
            <h2>4. Render fetched data</h2>
            <p className="code">
              Fetched user: <strong>{user.name}</strong>
            </p>
          </div>
        )}

        {user && (
          <div className="challenge">
            <h2>Your Challenge</h2>
            <p>
              Fetch 10 users from{" "}
              <a
                href="https://jsonplaceholder.typicode.com/users"
                target="_blank"
              >
                this endpoint
              </a>{" "}
              and display them below.
            </p>
            <ul>
              <li>
                create a <strong>button</strong> that will trigger this method
              </li>
              <li>
                create an <strong>action, actionType, reducer</strong>
              </li>
              <li>
                update <strong>App.tsx render method</strong> to display the
                newly fetched data
              </li>
            </ul>
            <p>
              <button
                onClick={() => {
                  onFetchUsers();
                }}
              >
                Fetch Users
              </button>
            </p>
            {users && users.length > 0 && (
              <div className="code">
                <p>Fetched Users</p>
                  {users.map(user => {
                    const { id, name, email } = user;
                    return (
                      <p>
                        <span key={id}>
                          <strong>{name}</strong> - {email}
                        </span>
                      </p>
                    );
                  })}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.user.name,
    user: state.user.user,
    users: state.user.users,
    fetching: state.user.fetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUser: (id: number) => {
      dispatch(fetchUser(id));
    },
    onFetchUsers: () => {
      dispatch(fetchUsers());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
