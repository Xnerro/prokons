import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login/App';
import Admin from './admin/App';
import Kasir from './home/App';
import Error from './component/notFound';

export default class App extends Component {
  state = {
    token: '',
    account: {
      name: '',
      role: '',
    },
  };

  setToken = () => {
    this.setState({ token: null });
  };

  getToken = x => {
    this.setState({ token: x });
  };

  getAccount = (x, y) => {
    this.setState(state => {
      let account = { ...state.account };
      account.name = x;
      account.role = y;
      return { account };
    });
  };
  componentDidMount = () => {
    let x = localStorage.getItem('token');
    let y = localStorage.getItem('nama');
    let z = localStorage.getItem('role');
    this.getToken(x);
    this.getAccount(y, z);
  };

  render() {
    return (
      <>
        {this.state.token ? (
          <Router>
            <Routes>
              <Route
                exact
                path="/kasir"
                element={
                  <Kasir
                    token={this.state.token}
                    akun={this.state.account.name}
                    setToken={this.setToken}
                  />
                }
              />
              <Route
                path="/kasir/admin"
                element={
                  <Admin
                    token={this.state.token}
                    role={this.state.account.role}
                    akun={this.state.account.name}
                    setToken={this.setToken}
                  />
                }
              />
              <Route path="*" element={<Error />} />
            </Routes>
          </Router>
        ) : (
          <Router>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Login
                    token={this.getToken}
                    akun={this.getAccount}
                    role={this.state.account.role}
                  />
                }
              />
              <Route path="*" element={<Error />} />
            </Routes>
          </Router>
        )}
      </>
    );
  }
}
