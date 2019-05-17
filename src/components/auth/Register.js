import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
import { notifyUser } from "../../actions/notifyActions";
import Alert from "../layouts/Alert";

class Register extends Component {
  state = {
    email: "",
    password: "",
    password2: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    const { firebase, history, notifyUser } = this.props;

    const { email, password, password2 } = this.state;

    if (password !== password2) {
      console.alert("Las contraseñas no coinciden");
      return;
    }
    // Register with firebase
    firebase
      .createUser({ email, password })
      .then(() => history.push("/"))
      .catch(err => console.alert("Ese usuario ya existe!"));
  };

  render() {
    const { message, messageType } = this.props.notify;
    console.log(this.props);
    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              {message ? (
                <Alert message={message} messageType={messageType} />
              ) : null}
              <h1 className="text-center pb-4 pt-3">
                <span style={{ color: "#880E4F" }}>
                  <i className="fas fa-lock" /> Registrar usuario
                </span>
              </h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Correo</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    required
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    required
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password2">Confirmar Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password2"
                    required
                    value={this.state.password2}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password2">Rol</label>
                  <select 
                    className="browser-default custom-select" 
                    name="facultad" 
                  >
                    <option value="">Usuario normal</option>
                    <option value="">Administrador</option>
                  </select>
                </div>
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary btn-block"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  firebase: PropTypes.object.isRequired,
  notify: PropTypes.object.isRequired,
  notifyUser: PropTypes.func.isRequired
};

export default compose(
  firebaseConnect(),
  connect(
    (state, props) => ({
      notify: state.notify,
      settings: state.settings
    }),
    { notifyUser }
  )
)(Register);
