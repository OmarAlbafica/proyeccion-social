import React, { Component } from "react";
// import { Link } from "react-router-dom";
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
    pagina: 1,
    facultades: [],
    lineasProyeccion: [],
    ciclos: [],
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
      asignaturas: [],
      alumnosM: "0", 
      alumnosF: "0"
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
    window7: {
      actividades: []
    },
    window8: {
      materiales: [],
      transporte: []
    },
    window9: {
      actoresClave: [],
      organizacionesAliadas: []
    },
    datosBeneficiarios: []
  };

  // state = {
  //   pagina: 10,
  //   facultades: [],
  //   lineasProyeccion: [],
  //   window1: {
  //     cantidadBeneficiarios: "13",
  //     descripcionBeneficiarios: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident labore optio voluptatum suscipit quos dicta, facilis dolore delectus voluptatibus dignissimos mollitia pariatur esse, vero quae voluptate quisquam omnis quo soluta.",
  //     duracionCiclos: "10",
  //     escuela: "escuela1",
  //     facultad: "negocios",
  //     id: "asdf",
  //     lineaProyeccion: "HELLO THERE MAI BRIEF",
  //     titulo: "asdf"
  //   },
  //   window2: {
  //     asignaturas: ["m1-e3"],
  //     alumnosM: "14", 
  //     alumnosF: "12"
  //   },
  //   window3: {
  //     docentes: [
  //       {nombre: "asdf", tipo: "coordinador", escuela: "escuela1"}
  //     ]
  //   },
  //   window4: {
  //     representantes: [
  //       {
  //         correoRepresentante: "asdf",
  //         institucion: "asdf",
  //         nombreRepresentante: "asdf",
  //         telefonoRepresentante: "asdf"
  //       }
  //     ]
  //   },
  //   window5: {
  //     justificacion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  //   },
  //   window6: {
  //     objetivos: [
  //       {
  //         descripcion: "Lorem Ipsum is simply dummy text of the printing a…ldus PageMaker including versions of Lorem Ipsum.", 
  //         tipo: "General"
  //       },
  //       {
  //         descripcion: "dfadfasfafasdf", 
  //         tipo: "Especifico"
  //       }
  //     ]
  //   },
  //   window7: {
  //     actividades: [
  //       {
  //         actividad: "sldkfjasdlfkj",
  //         ciclo: "2019-02",
  //         nVisitas: "13",
  //         objetivo: "sdfadfadfLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  //       }
  //     ]
  //   },
  //   window8: {
  //     materiales: [
  //       {
  //         cantidad: "13",
  //         descripcion: "asdfasdf",
  //         precioIVA: "adfadf",
  //         precioU: "adadf"
  //       },
  //       {
  //         cantidad: "13",
  //         descripcion: "asdfasd",
  //         precioIVA: "asdfadsf",
  //         precioU: "sdfadf"
  //       }
  //     ],
  //     transporte: [
  //       {
  //         cantidad: "adf",
  //         descripcion: "asdf",
  //         precioIVA: "daf",
  //         precioU: "adf"
  //       }
  //     ]
  //   },
  //   window9: {
  //     actoresClave: [
  //       {
  //         correo: "adf",
  //         nombre: "asdf",
  //         telefono: "adsf"
  //       },
  //       {
  //         correo: "adsfa",
  //         nombre: "asdf",
  //         telefono: "asdf"
  //       }
  //     ],
  //     organizacionesAliadas: [
  //       {
  //         descripcion: "asdf",
  //         nombre: "asdf"
  //       },
  //       {
  //         descripcion: "adf",
  //         nombre: "asdf"
  //       }
  //     ]
  //   }
  // }

  componentDidMount() {
    const { firestore } = this.props;

    firestore.collection("facultades").get()
    .then(querySnapshot => {
      const facultades = querySnapshot.docs.map(doc => doc.data());
      firestore.collection("ciclos").get()
        .then(query => {
          const ciclos = query.docs.map(doc => doc.data()).map(cic => cic.ciclo);
          firestore.collection("lineaProyeccion").get()
            .then(querySn => {
              const lineasProyeccion = querySn.docs.map(doc => doc.data()).map(pro => pro.nombre);
              this.setState({facultades, ciclos, lineasProyeccion})
            })
        })
    });
  }

  enviarPerfil = () => {
    const { firestore, history } = this.props;

    const {window1, window2, window3, window4, window5, window6, window7, window8, window9} = this.state;
    const perfil = {
      ...window1,
      ...window2,
      ...window3,
      ...window4,
      ...window5,
      ...window5,
      ...window6,
      ...window7,
      ...window8,
      ...window9,
      estado: "Pendiente"
    }
    firestore
      .add({ collection: "perfiles" }, perfil)
      .then(() => history.push("/"));
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

  render() {
    const { pagina, window1, window2, window3, window4, window5, window6, 
      window7, window8, window9, ciclos } = this.state;
    if (pagina === 1) {
      return <AddPerfil1
        data={window1}
        facultades={this.state.facultades}
        lineasProyeccion={this.state.lineasProyeccion}
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
          data={window7}
          ciclos={ciclos}
          onSubmit={this.changeState}
          pagina={this.pagina}
        />
      } else if (pagina === 8) {
        return <AddPerfil8
          data={window8}
          onSubmit={this.changeState}
          pagina={this.pagina}
        />
      } else if (pagina === 9) {
        return <AddPerfil9
          data={window9}
          onSubmit={this.changeState}
          pagina={this.pagina}
        />
      } else return <VerPerfil
        data={this.state}
        onSubmit={this.enviarPerfil}
        pagina={this.pagina}
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
