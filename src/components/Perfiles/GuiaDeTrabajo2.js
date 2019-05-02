import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class GuiaDeTrabajo2 extends Component {
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
    this.props.pagina(9);
    // const { id, titulo, fecha, estudiantesFemeninos, estudiantesMasculinos } = this.state;
    // if (id === "" || titulo === "" || fecha === "" || estudiantesFemeninos === "" || estudiantesMasculinos === "") {
    //   this.setState({ error: "Por favor llenar todos los campos" });
    // } else {
    //   this.props.onSubmit(1, { id, titulo, fecha, estudiantesFemeninos, estudiantesMasculinos });
    // }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <button onClick={() => this.props.pagina(7)} className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Volver atrás
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Guia de trabajo - Transporte</div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="firstName">Numero de salidas</label>
              <input
                type="number"
                className="form-control"
                name="nsalidas"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.nsalidas}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Numero de personas</label>
              <input
                type="number"
                className="form-control"
                name="npersonas"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.npersonas}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Direccion</label>
              <input
                type="text"
                className="form-control"
                name="direccion"
                onChange={this.onChange}
                value={this.state.direccion}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Fecha</label>
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
              <label htmlFor="phone">Hora de inicio</label>
              <input
                type="time"
                className="form-control"
                name="horainicio"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.horainicio}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Hora de Finalización</label>
              <input
                type="time"
                className="form-control"
                name="horafin"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.horafin}
              />
            </div>

            <div className="form-group">
              <button onClick={this.onSubmit} className="btn btn-primary btn-block">
                Siguiente
                </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
