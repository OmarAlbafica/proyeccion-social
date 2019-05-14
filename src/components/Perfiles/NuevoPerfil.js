import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";

import AddPerfil1 from "./AddPerfil1";
import AddPerfil2 from "./AddPerfil2";
import AddPerfil3 from "./AddPerfil3";
import AddPerfil4 from "./AddPerfil4";
import AddPerfil5 from "./AddPerfil5";
import AddPerfil6 from "./AddPerfil6";
import AddPerfil7 from "./AddPerfil7";
import AddPerfil8 from "./AddPerfil8";
import AddPerfil9 from "./AddPerfil9";
import VerPerfil from "./VerPerfil";

class NuevoPerfil extends Component {
  state = {
    pagina: 6,
    facultades: [],
    window1: {
      id: "",
      facultad: "",
      escuela: "",
      lineaProyeccion: "",
      titulo: "",
      descripcionBeneficiarios: "",
      cantidadBeneficiarios: "",
      duracionCiclos: ""
    },
    window2: {
      asignaturas: []
    },
    window3: {
      docentes: []
    },
    window4: {
      representantes: []
    },
    window5: {
      justificacion: ""
    },
    window6: {
      objetivos: []
    },
    datosBeneficiarios: []
  };

  componentDidMount() {
    const { firestore } = this.props;

    firestore.collection("facultades").get()
    .then(querySnapshot => 
      this.setState({ facultades: querySnapshot.docs.map(doc => doc.data())}));
  }

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  changeState = (nombre, data) => {
    this.setState({ [nombre]: data});
  }

  onError = (mensaje) => {
    
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
    const { pagina, window1, window2, window3, window4, window5, window6, datosBeneficiarios } = this.state;
    if (pagina === 1) {
      return <AddPerfil1
        data={window1}
        facultades={this.state.facultades}
        onSubmit={this.changeState}
        pagina={this.pagina}
      />
    } else
      if (pagina === 2) {
        return <AddPerfil2
          data={window2}
          pagina={this.pagina}
          onSubmit={this.changeState}
          facultades={this.state.facultades}
          facultad={window1.facultad}
          escuela={window1.escuela}
        />
      } else if (pagina === 3) {
        return <AddPerfil3
          data={window3}
          onSubmit={this.changeState}
          facultades={this.state.facultades}
          facultad={window1.facultad}
          pagina={this.pagina}
        />
      } else if (pagina === 4) {
        return <AddPerfil4
          data={window4}
          onSubmit={this.changeState}
          pagina={this.pagina}
          deleteFromTable={this.deleteFromTable}
          pushToTable={this.pushToTable}
        />
      } else if (pagina === 5) {
        return <AddPerfil5
          data={window5}
          onSubmit={this.changeState}
          pagina={this.pagina}
        />
      } else if (pagina === 6) {
        return <AddPerfil6
          data={window6}
          onSubmit={this.changeState}
          pagina={this.pagina}
        />
      } else if (pagina === 7) {
        return <AddPerfil7
          data={datosBeneficiarios}
          onSubmit={this.changeState}
          pagina={this.pagina}
          deleteFromTable={this.deleteFromTable}
          pushToTable={this.pushToTable}
        />
      } else if (pagina === 8) {
        return <AddPerfil8
          data={datosBeneficiarios}
          onSubmit={this.changeState}
          pagina={this.pagina}
          deleteFromTable={this.deleteFromTable}
          pushToTable={this.pushToTable}
        />
      } else if (pagina === 9) {
        return <AddPerfil9
          data={datosBeneficiarios}
          onSubmit={this.changeState}
          pagina={this.pagina}
          deleteFromTable={this.deleteFromTable}
          pushToTable={this.pushToTable}
        />
      } else return <VerPerfil
        data={datosBeneficiarios}
        onSubmit={this.changeState}
        pagina={this.pagina}
        deleteFromTable={this.deleteFromTable}
        pushToTable={this.pushToTable}
      />
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
