import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class AddPerfil1 extends Component {
  state = {
    idPerfil: "",
    facultad: "",
    escuela: "",
    lineaProyeccion: "",
    titulo: "",
    descripcionBeneficiarios: "",
    cantidadBeneficiarios: "",
    duracionCiclos: ""
  }

  componentDidMount() {
    const { idPerfil, facultad, titulo, escuela, lineaProyeccion, descripcionBeneficiarios,cantidadBeneficiarios, duracionCiclos } = this.props.data;
    this.setState({ idPerfil, facultad, titulo, escuela, lineaProyeccion, descripcionBeneficiarios,cantidadBeneficiarios, duracionCiclos });
  }

  onChange = e => {
    if (e.target.name === "facultad") {
      this.setState({[e.target.name]: e.target.value, escuela: "", asignatura: ""});
    } else if (e.target.name === "escuela") {
      this.setState({[e.target.name]: e.target.value, asignatura: ""});
    } else this.setState({[e.target.name]: e.target.value})
  };

  onSubmit = () => {
    const { idPerfil, facultad, titulo, escuela, lineaProyeccion, descripcionBeneficiarios,cantidadBeneficiarios, duracionCiclos } = this.state;
    
    if (idPerfil === "" || facultad === "" || titulo === "" || escuela === "" || lineaProyeccion === "" || descripcionBeneficiarios === "" || cantidadBeneficiarios === "" || duracionCiclos === "") {
      return;
    } 
    else {
      this.props.onSubmit("window1", {idPerfil: idPerfil, facultad, titulo, escuela, lineaProyeccion, descripcionBeneficiarios,cantidadBeneficiarios, duracionCiclos});
      this.props.pagina(2);
    }
  }

  render() {

    const { facultad } = this.state;
    const { facultades, lineasProyeccion } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Volver a Inicio
            </Link>
          </div>
        </div>

        <br />
        <h2>Añadir nuevo perfil (1/9)</h2>
        <br />
        <div className="card">
          <div className="card-header">Añadir Información General</div>
          <div className="card-body">
            <div className="form-group">
              <label>ID</label>
              <input
                type="text"
                className="form-control"
                name="idPerfil"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.idPerfil}
              />
            </div>

            <div className="form-group">
              <label>Facultad:</label>
              <select 
                className="browser-default custom-select" 
                name="facultad" 
                onChange={this.onChange}
                value={this.state.facultad}
              >
                <option value="">Seleccionar facultad</option>
                {facultades && facultades.map((facultad, i) => 
                <option key={i} value={facultad.nombre}>{facultad.nombre}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label>Escuela:</label>
              <select className="browser-default custom-select" name="escuela" onChange={this.onChange}>
                <option value="">Seleccionar Escuela</option>
                
                {facultad !== "" && facultades.length > 0 && facultades
                  .filter(facu => facu.nombre === facultad)[0]
                  . escuelas.map((escuela, i) => 
                    <option key={i} value={escuela.nombre}>{escuela.nombre}</option>)
                }
              </select>
            </div>


            <div className="form-group">
              <label>Linea de proyección social que desarrollará</label>
              <select name="lineaProyeccion" className="browser-default custom-select" onChange={this.onChange}>
                <option>Elija la linea de proyección</option>
                {lineasProyeccion.length > 0 && lineasProyeccion
                  .map((linea, i) => 
                    <option key={i} value={linea}>{linea}</option>)
                }
              </select>
            </div>

            <div className="form-group">
              <label>Titulo del proyecto o actividad de proyección social</label>
              <input
                type="text"
                className="form-control"
                name="titulo"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.titulo}
              />
            </div>

            <div className="form-group">
              <label>Breve descripción del perfil de los beneficiarios directos</label>
              <input
                type="text"
                className="form-control"
                name="descripcionBeneficiarios"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.descripcionBeneficiarios}
              />
            </div>

            <div className="form-group">
              <label>Cantidad de beneficiarios directos</label>
              <div className="col-sm-2">
                <input
                  type="number"
                  className="form-control"
                  name="cantidadBeneficiarios"
                  minlenght="2"
                  required
                  onChange={this.onChange}
                  value={this.state.cantidadBeneficiarios}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Duración en ciclos</label>
              <div className="col-sm-2">
                <input
                  type="number"
                  className="form-control"
                  name="duracionCiclos"
                  minlenght="2"
                  required
                  onChange={this.onChange}
                  value={this.state.duracionCiclos}
                />
              </div>
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-block" onClick={this.onSubmit}>
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
