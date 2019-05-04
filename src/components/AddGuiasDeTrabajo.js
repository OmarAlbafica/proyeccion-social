import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
import GuiaTrabajo1 from "./GuiaTrabajo1";

// import GuiaTrabajo2 from './GuiaTrabajo2'

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
    window.scroll(0, 0);
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

  };

  render() {
    const { pagina, datosPerfil, datosBeneficiarios } = this.state;
    if (pagina === 1) {
      return <GuiaTrabajo1
        data={datosPerfil}
        onSubmit={this.changeState}
        pagina={this.pagina}
      />
    }
    // else if (pagina === 2) {
    //   return <GuiaTrabajo2
    //     data={datosBeneficiarios}
    //     onSubmit={this.changeState}
    //     pagina={this.pagina}
    //     deleteFromTable={this.deleteFromTable}
    //     pushToTable={this.pushToTable}
    //   />
    // }
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
