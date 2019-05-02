import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class DatosPerfil extends Component {
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
      this.props.onSubmit(1, { id, titulo, fecha, estudiantesFemeninos, estudiantesMasculinos });
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

        <div className="card">
          <div className="card-header">Añadir Datos de Perfil</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">ID</label>
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
                <label htmlFor="lastName">Fecha</label>
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  minlenght="2"
                  required
                  onChange={this.onChange}
                  value={this.state.fecha}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Titulo</label>
                <input
                  type="text"
                  className="form-control"
                  name="titulo"
                  onChange={this.onChange}
                  value={this.state.titulo}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Estudiantes femeninos</label>
                <input
                  type="number"
                  className="form-control"
                  name="estudiantesFemeninos"
                  minlenght="2"
                  required
                  onChange={this.onChange}
                  value={this.state.estudiantesFemeninos}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Estudiantes masculinos</label>
                <input
                  type="number"
                  className="form-control"
                  name="estudiantesMasculinos"
                  minlenght="2"
                  required
                  onChange={this.onChange}
                  value={this.state.estudiantesMasculinos}
                />
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  value="Siguiente"
                  className="btn btn-primary btn-block"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
