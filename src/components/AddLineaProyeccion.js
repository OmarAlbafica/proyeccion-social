import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { firestoreConnect } from "react-redux-firebase";

class LineaProyeccion extends Component {
  state = {
    lineaProyeccion: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    const { history, firestore } = this.props;

    const { lineaProyeccion } = this.state;
    if (lineaProyeccion === "") return;
    // LineaProyeccion with firebase
    firestore
      .add({ collection: "lineaProyeccion" }, {nombre: lineaProyeccion})
      .then(() => history.push("/"));
  };

  render() {
    console.log(this.props);
    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center pb-4 pt-3">
                <span style={{ color: "#880E4F" }}>
                  <i className="fas fa-address-book" /> Agregar Linea de Proyección
                </span>
              </h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lineaProyeccion"
                    required
                    value={this.state.lineaProyeccion}
                    onChange={this.onChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Aceptar"
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

LineaProyeccion.propTypes = {
  firebase: PropTypes.object.isRequired,
};

export default compose(
    firestoreConnect([{ collection: "roles" }]),
    connect(({ firestore: { ordered }, settings }, props) => ({
      settings,
      roles: ordered.roles
    })
  )
)(LineaProyeccion);
