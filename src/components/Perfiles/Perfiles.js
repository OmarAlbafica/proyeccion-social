import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
import Spinner from "../layouts/Spinner";

class Clients extends Component {
  state = {
    totalOwed: null
  };

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

          <table className=" table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Facultad</th>
                <th>Escuela</th>
                <th>Titulo</th>
                <th>Linea de Proyección</th>
                <th>Estado</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map(valor => (
                <tr key={valor}>
                  <td>
                    Informática y CA
                  </td>
                  <td>Ciencias Aplicadas</td>
                  <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, earum rerum! Modi, expedita! Amet, eum asperiores mollitia saepe quos ad. Quia eum pariatur quae vero reprehenderit, mollitia iste fugiat nostrum.</td>
                  <td>Arte y Arquitectura</td>
                  <td>Pendiente</td>
                  <td>
                    <Link
                      to={`/client/6`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" />
                      <pre></pre>
                      Validar
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/client/9`}
                      className="btn btn-danger btn-sm"
                    >
                      <i className="fas fa-angle-double-down"></i>
                      <pre></pre>
                      Auditar
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
