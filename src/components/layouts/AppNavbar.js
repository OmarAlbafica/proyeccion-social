import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import PropTypes from "prop-types";

class AppNavbar extends Component {
  state = {
    isAuthenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    const { auth } = props;

    if (auth.uid) {
      return { isAuthenticated: true };
    } else {
      return { isAuthenticated: false };
    }
  }

  onLogoutClick = e => {
    e.preventDefault();

    const { firebase } = this.props;
    firebase.logout();
  };

  render() {
    const { isAuthenticated } = this.state;
    const { settings } = this.props;
    const { allowRegistration } = settings;

    return (
      <div>
        <div className="navbar navbar-expand-md navbar-dark mb-4" style={{ backgroundColor: "#880E4F" }}>
          <div className="container">
            <Link to="/" className="navbar-brand">
              Proyección Social UTEC
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarMain"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                {isAuthenticated ? (
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Inicio
                    </Link>
                  </li>
                ) : null}
              </ul>
              {isAuthenticated ? (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to="/facultades" className="nav-link">
                      Facultades
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/usuarios" className="nav-link">
                      Usuarios
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#!"
                      className="nav-link"
                      onClick={this.onLogoutClick}
                    >
                      Salir
                    </a>
                  </li>
                </ul>
              ) : null}

              {allowRegistration && !isAuthenticated ? (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link">
                      Register
                    </Link>
                  </li>
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AppNavbar.propTypes = {
  firebase: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired
};

export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth,
    settings: state.settings
  }))
)(AppNavbar);
