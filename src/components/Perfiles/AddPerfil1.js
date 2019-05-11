import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class AddPerfil1 extends Component {
  state = {
    id: "",
    facultad: "",
    escuela: "",
    lineaProyeccion: "",
    titulo: "",
    descripcionBeneficiarios: "",
    cantidadBeneficiarios: "",
    duracionCiclos: ""
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  componentDidMount() {
    const { id, facultad, titulo, escuela, lineaProyeccion, descripcionBeneficiarios,cantidadBeneficiarios, duracionCiclos } = this.props.data;
    this.setState({ id, facultad, titulo, escuela, lineaProyeccion, descripcionBeneficiarios,cantidadBeneficiarios, duracionCiclos });
  }

  onSubmit = () => {
    const { id, facultad, titulo, escuela, lineaProyeccion, descripcionBeneficiarios,cantidadBeneficiarios, duracionCiclos } = this.state;
    
    if (id === "" || facultad === "" || titulo === "" || escuela === "" || lineaProyeccion === "" || descripcionBeneficiarios === "" || cantidadBeneficiarios === "" || duracionCiclos === "") {
      this.props.onError("Por favor llene todos los campos");
    } 
    else {
      this.props.onSubmit("window1", {...this.state});
      this.props.pagina(2);
    }
  }

  render() {
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
                name="id"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.id}
              />
            </div>

            <div className="form-group">
              <label>Facultad:</label>
              <select name="facultad" className="browser-default custom-select" onChange={this.onChange}>
                <option>Elija su facultad</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>

            <div className="form-group">
              <label>Escuela:</label>
              <select name="escuela" className="browser-default custom-select" onChange={this.onChange}>
                <option>Elija su Escuela</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>


            <div className="form-group">
              <label>Linea de proyección social que desarrollará</label>
              <select name="lineaProyeccion" className="browser-default custom-select" onChange={this.onChange}>
                <option>Elija la linea de proyección</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
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
