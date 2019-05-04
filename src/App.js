import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { UserIsAuthenticated, UserIsNotAuthenticated } from "./helpers/auth";

import { Provider } from "react-redux";
import store from "./store";

//Components
import AppNavbar from "./components/layouts/AppNavbar";
import Dashboard from "./components/layouts/Dashboard";
import Solicitudes from "./components/Perfiles/Solicitudes";
import AddGuiaTrabajo from "./components/AddGuiasDeTrabajo";
import AddTransporte from "./components/AddTransporte";
import AddChalecos from "./components/AddChalecos";
import RequerimientoCompra from "./components/RequerimientoCompra";
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
                  path="/perfiles/3453453236/solicitudes"
                  component={UserIsAuthenticated(Solicitudes)}
                />
                <Route
                  exact
                  path="/perfiles/3453453236/solicitudes/guia-trabajo"
                  component={UserIsAuthenticated(AddGuiaTrabajo)}
                />
                <Route
                  exact
                  path="/perfiles/3453453236/solicitudes/transporte"
                  component={UserIsAuthenticated(AddTransporte)}
                />
                <Route
                  exact
                  path="/perfiles/3453453236/solicitudes/chalecos"
                  component={UserIsAuthenticated(AddChalecos)}
                />
                <Route
                  exact
                  path="/perfiles/3453453236/solicitudes/requerimiento-compra"
                  component={UserIsAuthenticated(RequerimientoCompra)}
                />
                <Route
                  exact
                  path="/"
                  component={UserIsAuthenticated(Dashboard)}
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
