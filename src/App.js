import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { UserIsAuthenticated, UserIsNotAuthenticated } from "./helpers/auth";

import { Provider } from "react-redux";
import store from "./store";

//Components
import AppNavbar from "./components/layouts/AppNavbar";
import Dashboard from "./components/layouts/Dashboard";
import AddClient from "./components/Perfiles/NuevoPerfil";
import ClientDetails from "./components/Perfiles/ClientDetails";
import EditClient from "./components/Perfiles/EditClient";
import Login from "./components/auth/Login";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <div className="container">
              <Switch>
                <Route
                  exact
                  path="/login"
                  component={UserIsNotAuthenticated(Login)}
                />
                <Route
                  exact
                  path="/"
                  component={UserIsAuthenticated(Dashboard)}
                />
                <Route
                  exact
                  path="/perfiles/nuevo"
                  component={UserIsAuthenticated(AddClient)}
                />
                <Route
                  exact
                  path="/perfiles/:id"
                  component={UserIsAuthenticated(ClientDetails)}
                />
                <Route
                  exact
                  path="/perfiles/editar/:id"
                  component={UserIsAuthenticated(EditClient)}
                />
                <Route
                  exact
                  path="/perfiles/auditar/:id"
                  component={UserIsAuthenticated(EditClient)}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
