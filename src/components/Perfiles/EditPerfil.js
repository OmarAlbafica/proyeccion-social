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
import Spinner from "../layouts/Spinner";

class EditPerfil extends Component {
  state = {
		tipo: "edit",
    loaded: false,
    pagina: 1,
    facultades: [],
    lineasProyeccion: [],
    ciclos: [],
    window1: {
      idPerfil: "",
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
    }
  };

	onError = (mensaje) => {}

	async componentDidMount() {
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
	
	static getDerivedStateFromProps(props, state) {
    const { perfil, firestore } = props;

    if (perfil && state.loaded !== true) {
			console.log("getDerived...");
			const window1 = {
				cantidadBeneficiarios: perfil.cantidadBeneficiarios,
				descripcionBeneficiarios: perfil.descripcionBeneficiarios,
				duracionCiclos: perfil.duracionCiclos,
				escuela: perfil.escuela,
				facultad: perfil.facultad,
				idPerfil: perfil.idPerfil,
				lineaProyeccion: perfil.lineaProyeccion,
				titulo: perfil.titulo
			}
			const window2 = {
				asignaturas: perfil.asignaturas,
				alumnosM: perfil.alumnosM, 
				alumnosF: perfil.alumnosF
			}
			const window3 = {
				docentes: perfil.docentes
			}
			const window4 = {
				representantes: perfil.representantes
			}
			const window5 = {
				justificacion: perfil.justificacion
			}
			const window6 = {
				objetivos: perfil.objetivos
			}
			const window7 = {
				actividades: perfil.actividades
			}
			const window8 = {
				materiales: perfil.materiales,
				transporte: perfil.transporte
			}
			const window9 = {
				actoresClave: perfil.actoresClave,
				organizacionesAliadas: perfil.organizacionesAliadas
			}

			return {
				window1,window2,window3,window4,window5,window6,window7,window8,window9, loaded: true
			};
    }
    return null;
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
      .update({ collection: "perfiles", doc: this.props.perfil.id }, perfil)
      .then(() => history.push("/"));
  }

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  changeState = (nombre, data) => {
		console.log(nombre);
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
			window7, window8, window9, ciclos, loaded } = this.state;
    if (loaded) {
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
		} else {
			return <Spinner/>
		}
  }
}

EditPerfil.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default compose(
    firestoreConnect(({ match: { params: { id } } }) => [
      { collection: "perfiles", storeAs: "perfil", doc: id }
    ]),
    connect((firestore, props) => ({
			perfil: firestore.firestore.ordered.perfil && firestore.firestore.ordered.perfil[0]
    }))
  )(EditPerfil);
