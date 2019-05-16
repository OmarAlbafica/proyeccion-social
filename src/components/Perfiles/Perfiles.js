import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
import Spinner from "../layouts/Spinner";
import classnames from "classnames";

class Clients extends Component {
  state = {
    perfiles: []
  };

  toggle = () => this.setState({ open: !this.state.open });

  static getDerivedStateFromProps(props, state) {
    const { clients } = props;

    if (clients) {
      // Add balances
      const total = clients.reduce((total, client) => {
        return total + parseFloat(client.balance.toString());
      }, 0);
      return { totalOwed: total };
    }
    return null;
  }

  render() {
    const ejemplo = [
      {
        estado: "Pendiente",
        facultad: "Informática y CA",
        escuela: "Ciencias Aplicadas",
        titulo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, earum rerum! Modi",
        linea: "Arte y Arquitectura destilando amor"
      },
      {
        estado: "Rechazado",
        facultad: "Informática y CA",
        escuela: "Ciencias Aplicadas",
        titulo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, earum rerum! Modi",
        linea: "Arte y Arquitectura destilando amor"
      },
      {
        estado: "Aceptado",
        facultad: "Informática y CA",
        escuela: "Ciencias Aplicadas",
        titulo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, earum rerum! Modi",
        linea: "Arte y Arquitectura destilando amor"
      },
      {
        estado: "Cambios solicitados",
        cambios: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, earum rerum! Modi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, earum rerum! Modi",
        facultad: "Informática y CA",
        escuela: "Ciencias Aplicadas",
        titulo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, earum rerum! Modi",
        linea: "Arte y Arquitectura destilando amor"
      }
    ]
    const { perfiles } = this.props;
    if (perfiles) {
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
                  {perfil.estado !== "Cambios solicitados" ?
                    <td data-toggle="modal" data-target="#exampleModal"
                      className={classnames("alert", {
                        "alert-success": perfil.estado === "Aceptado",
                        "alert alert-dark": perfil.estado === "Pendiente",
                        "alert-danger": perfil.estado === "Rechazado"
                      })}>
                      {perfil.estado}
                    </td>
                    : <td data-toggle="modal" data-target="#exampleModal"
                      className="alert alert-warning" style={{ cursor: "pointer" }}>
                      {perfil.estado} <br />
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
                    {perfil.facultad}
                  </td>
                  <td>{perfil.escuela}</td>
                  <td>{perfil.titulo}</td>
                  <td>{perfil.lineaProyeccion}</td>
                  <td>
                    <Link
                      to={`/client/6`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" />
                      <pre></pre>
                      Editar
                    </Link>
                  </td>
                  <td>
                    {perfil.estado === "Aceptado" ?
                      <a
                        href={`/perfiles/3453453236/solicitudes`}
                        className="btn btn-info btn-sm"
                      >
                        <i className="fas fa-anchor"></i>
                        <pre></pre>
                        Solicitudes
                    </a>
                      :
                      <div
                        className="btn btn-sm"
                      >
                        <i className="fas fa-anchor"></i>
                        <pre></pre>
                        Solicitudes
                      </div>
                    }
                  </td>
                  <td>
                    <Link
                      to={`/client/9`}
                      className="btn btn-danger btn-sm"
                    >
                      <i className="fas fa-angle-double-down"></i>
                      <pre></pre>
                      Eliminar
                    </Link>
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

Clients.propTypes = {
  firestore: PropTypes.object.isRequired,
  clients: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: "perfiles" }]),
  connect(({ firestore: { ordered } }, props) => ({
    perfiles: ordered.perfiles
  }))
)(Clients);
