import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class AddPerfil1 extends Component {
  state = {
    id: "",
    titulo: "",
    fecha: "",
    estudiantesFemeninos: "",
    estudiantesMasculinos: "",
    error: ""
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  componentDidMount() {
    const { id, titulo, fecha, estudiantesFemeninos, estudiantesMasculinos } = this.props.data;
    this.setState({ id, titulo, fecha, estudiantesFemeninos, estudiantesMasculinos })
  }

  onSubmit = e => {
    e.preventDefault();
    const { id, titulo, fecha, estudiantesFemeninos, estudiantesMasculinos } = this.state;
    if (id === "" || titulo === "" || fecha === "" || estudiantesFemeninos === "" || estudiantesMasculinos === "") {
      this.setState({ error: "Por favor llenar todos los campos" });
    } else {
      this.props.onSubmit({ id, titulo, fecha, estudiantesFemeninos, estudiantesMasculinos });
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
                value={""}
              />
            </div>

            <div className="form-group">
              <label>Facultad:</label>
              <select className="browser-default custom-select">
                <option>Elija su facultad</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>

            <div className="form-group">
              <label>Escuela:</label>
              <select className="browser-default custom-select">
                <option>Elija su Escuela</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>


            <div className="form-group">
              <label>Linea de proyección social que desarrollará</label>
              <select className="browser-default custom-select">
                <option>Elija su Escuela</option>
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
                value={""}
              />
            </div>

            <div className="form-group">
              <label>Breve descripción del perfil de los beneficiarios directos</label>
              <input
                type="text"
                className="form-control"
                name="titulo"
                minlenght="2"
                required
                onChange={this.onChange}
                value={""}
              />
            </div>

            <div className="form-group">
              <label>Cantidad de beneficiarios directos</label>
              <div className="col-sm-2">
                <input
                  type="number"
                  className="form-control"
                  name="titulo"
                  minlenght="2"
                  required
                  onChange={this.onChange}
                  value={""}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Duración en ciclos</label>
              <div className="col-sm-2">
                <input
                  type="number"
                  className="form-control"
                  name="titulo"
                  minlenght="2"
                  required
                  onChange={this.onChange}
                  value={""}
                />
              </div>
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-block" onClick={() => this.props.pagina(2)}>
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
