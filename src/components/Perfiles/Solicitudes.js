import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
import Spinner from "../layouts/Spinner";
import classnames from "classnames";
import Modal from "react-bootstrap-modal"

class Clients extends Component {
  state = {
    totalOwed: null,
    open: true
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

    let closeModal = () => this.setState({ open: false })

    let saveAndClose = () => {
      this.setState({ open: false })
    }

    const ejemplo = [
      {
        estado: "Pendiente",
        tipo: "Transporte",
        titulo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, earum rerum! Modi",
        linea: "Arte y Arquitectura destilando amor"
      },
      {
        estado: "Rechazado",
        tipo: "Guias de trabajo",
        titulo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, earum rerum! Modi",
        linea: "Arte y Arquitectura destilando amor"
      },
      {
        estado: "Aceptado",
        tipo: "Requerimiento de compras",
        titulo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, earum rerum! Modi",
        linea: "Arte y Arquitectura destilando amor"
      },
      {
        estado: "Cambios solicitados",
        tipo: "Transporte",
        titulo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, earum rerum! Modi",
        linea: "Arte y Arquitectura destilando amor"
      },
    ]
    const { clients } = this.props;
    if (clients) {
      return (
        <div className="row">
          <div className="col-md-6">
            <h2>
              {" "}
              <i className="fas fa-users" /> Proyecciones{" "}
            </h2>
          </div>

          <div className="card">
            <div className="card-header">
              Añadir solicitudes
            </div>
            <div className="card-body">
              <Link className="btn btn-primary" to="/perfiles/3453453236/solicitudes/trasporte/">
                Transporte
              </Link>{" "}
              <Link className="btn btn-primary" to="/perfiles/3453453236/solicitudes/guia-trabajo/">
                Guia de trabajo
              </Link>{" "}<Link className="btn btn-primary" to="/perfiles/3453453236/solicitudes/requerimiento-compra/">
                Requerimiento de Compra
              </Link>{" "}
              <Link className="btn btn-primary" to="/perfiles/3453453236/solicitudes/chalecos/">
                Chalecos
              </Link>{" "}
              <Link className="btn btn-primary" to="/perfiles/3453453236/solicitudes/seguimiento/">
                Seguimiento
              </Link>
            </div>
          </div>

          <table className=" table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Estado</th>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Linea de Proyección</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {/* onClick={() => valor.estado !== "Cambios solicitados" ? null :
                this.toggle()} */}
              {ejemplo.map(valor => (
                <tr key={valor.estado}>
                  {valor.estado !== "Cambios solicitados" ?
                    <td data-toggle="modal" data-target="#exampleModal"
                      className={classnames("alert", {
                        "alert-success": valor.estado === "Aceptado",
                        "alert alert-dark": valor.estado === "Pendiente",
                        "alert-danger": valor.estado === "Rechazado"
                      })}>
                      {valor.estado}
                    </td>
                    : <td data-toggle="modal" data-target="#exampleModal"
                      className="alert alert-warning" style={{ cursor: "pointer" }}>
                      {valor.estado} <br />
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
                    {valor.titulo}
                  </td>
                  <td>{valor.tipo}</td>
                  <td>{valor.linea}</td>
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
  firestoreConnect([{ collection: "clients" }]),
  connect(({ firestore: { ordered } }, props) => ({
    clients: ordered.clients
  }))
)(Clients);
