import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";

import DatosPerfil from "./DatosPerfil";
import DatosBeneficiario from "./DatosBeneficiario";
import GuiaDeTrabajo2 from "./GuiaDeTrabajo2";
import GuiaDeTrabajo1 from "./GuiaDeTrabajo1";
import RequerimientoCompra from "./RequerimientoCompra";
import Otros from "./Otros";
import Chalecos from "./Chalecos";
import Resumen from "./Resumen";

class NuevoPerfil extends Component {
  state = {
    pagina: 1,
    datosPerfil: {
      id: "",
      fecha: "",
      titulo: "",
      estudiantesFemeninos: "",
      estudiantesMasculinos: "",
      justificación: ""
    },
    datosBeneficiarios: [

    ]
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  changeState = (pagina, data) => {
    if (pagina === 1) {
      this.setState({ datosPerfil: data, pagina: 2 });
    } else if (pagina === 2) {
      this.setState({ datosBeneficiarios: data, pagina: 3 });
    }
  }

  pagina = setPagina => {
    this.setState({ pagina: setPagina })
  };

  deleteFromTable = (nombre, index) => {
    const array = [...this.state.datosBeneficiarios];

    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ datosBeneficiarios: array });
    }
  }

  pushToTable = (nombre, datos) => {
    const data = this.state[nombre];
    data.push(datos);
    this.setState({ [nombre]: data });
  }

  onSubmit = async e => {
    e.preventDefault();

    // const newClient = this.state;
    // const { firestore, history } = this.props;

    // // If no balance, make 0
    // if (newClient.balance === "") {
    //   newClient.balance = 0;
    // }

    // firestore
    //   .add({ collection: "roles" }, { correo: "test@mail.com", rol: "admin" })
    //   .then(() => history.push("/"));
  };

  render() {
    const { pagina, datosPerfil, datosBeneficiarios } = this.state;
    if (pagina === 1) {
      return <DatosPerfil
        data={datosPerfil}
        onSubmit={this.changeState}
        pagina={this.pagina}
      />
    } else
      if (pagina === 2) {
        return <DatosBeneficiario
          data={datosBeneficiarios}
          onSubmit={this.changeState}
          pagina={this.pagina}
          deleteFromTable={this.deleteFromTable}
          pushToTable={this.pushToTable}
        />
      } else if (pagina === 7) {
        return <GuiaDeTrabajo1
          data={datosBeneficiarios}
          onSubmit={this.changeState}
          pagina={this.pagina}
        />
      } else if (pagina === 8) {
        return <GuiaDeTrabajo2
          data={datosBeneficiarios}
          onSubmit={this.changeState}
          pagina={this.pagina}
        />
      } else if (pagina === 9) {
        return <RequerimientoCompra
          data={datosBeneficiarios}
          onSubmit={this.changeState}
          pagina={this.pagina}
        />
      } else if (pagina === 10) {
        return <Otros
          data={datosBeneficiarios}
          onSubmit={this.changeState}
          pagina={this.pagina}
        />
      } else if (pagina === 11) {
        return <Chalecos
          data={datosBeneficiarios}
          onSubmit={this.changeState}
          pagina={this.pagina}
        />
      } else if (pagina === 12) {
        return <Resumen
          pagina={this.pagina}
        />
      }
    console.log("no debería llegar acá")
  }
}

NuevoPerfil.propTypes = {
  firestore: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect([{ collection: "roles" }]),
  connect(({ firestore: { ordered }, settings }, props) => ({
    settings,
    roles: ordered.roles
  }))
)(NuevoPerfil);
