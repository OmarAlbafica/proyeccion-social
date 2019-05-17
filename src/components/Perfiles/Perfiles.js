import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
import Spinner from "../layouts/Spinner";
import classnames from "classnames";
import { notifyUser } from "../../actions/notifyActions";

class Perfiles extends Component {
  state = {
    perfiles: []
  };

  toggle = () => this.setState({ open: !this.state.open });

  componentDidMount() {
    const { firestore } = this.props;

    firestore
      .collection("perfiles")
      .get()
      .then(querySnapshot => {
        const perfiles = querySnapshot.docs.map(doc => ({id: doc.id, data: doc.data()}));
        this.setState({perfiles});
      })
  }

  borrarPerfil = id => {
    const { history, firestore } = this.props;

    firestore
      .delete({ collection: "perfiles", doc: id })
      .then(() => firestore
      .collection("perfiles")
      .get()
      .then(querySnapshot => {
        const perfiles = querySnapshot.docs.map(doc => ({id: doc.id, data: doc.data()}));
        this.setState({perfiles});
      }))
  };

  render() {

    const { perfiles } = this.state;

    if (perfiles.length > 0) {
      return (
        <div className="row">
          <div className="col-md-6">
            <h2>
              {" "}
              <i className="fas fa-users" /> Proyecciones{" "}
            </h2>
          </div>

          <table className=" table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Estado</th>
                <th>Facultad</th>
                <th>Escuela</th>
                <th>Titulo</th>
                <th>Linea de Proyección</th>
                <th />
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {/* onClick={() => valor.estado !== "Cambios solicitados" ? null :
                this.toggle()} */}
              {perfiles.length > 0 && perfiles.map((perfil, i) => (
                <tr key={i}>
                  {perfil.data.estado !== "Cambios solicitados" ?
                    <td data-toggle="modal" data-target="#exampleModal"
                      className={classnames("alert", {
                        "alert-success": perfil.data.estado === "Aceptado",
                        "alert alert-dark": perfil.data.estado === "Pendiente",
                        "alert-danger": perfil.data.estado === "Rechazado"
                      })}>
                      {perfil.data.estado}
                    </td>
                    : <td data-toggle="modal" data-target="#exampleModal"
                      className="alert alert-warning" style={{ cursor: "pointer" }}>
                      {perfil.data.estado} <br />
                      (Click para ver)
                      <div className="modal fade text-primary" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title text-primary" id="exampleModalLabel">Cambios solicitados por el administrador</h5>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body text-dark">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, aperiam. Neque culpa ex nihil deleniti alias explicabo cumque harum quo, itaque ad cupiditate reprehenderit enim. Minus quam quae officiis maiores.
                          </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>}
                  <td>
                    {perfil.data.facultad}
                  </td>
                  <td>{perfil.data.escuela}</td>
                  <td>{perfil.data.titulo}</td>
                  <td>{perfil.data.lineaProyeccion}</td>
                  <td>
                    <Link
                      to={`/perfiles/${perfil.id}/edit`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" />
                      <pre></pre>
                      Editar
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/perfiles/${perfil.id}/solicitudes`}
                      className="btn btn-info btn-sm"
                    >
                      <i className="fas fa-anchor"></i>
                      <pre></pre>
                      Solicitudes
                  </Link>
                  {/* <div
                      className="btn btn-sm"
                    >
                      <i className="fas fa-anchor"></i>
                      <pre></pre>
                      Solicitudes
                    </div> */}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.borrarPerfil(perfil.id)}

                    >
                      <i className="fas fa-angle-double-down"></i>
                      <pre></pre>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

Perfiles.propTypes = {
  firestore: PropTypes.object.isRequired,
};

export default compose(
  firestoreConnect(),
  connect((state, props) => ({
    notify: state.notify,
      settings: state.settings
  }), { notifyUser })
)(Perfiles);