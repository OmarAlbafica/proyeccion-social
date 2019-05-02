import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class DatosBeneficiario extends Component {
  state = {
    nombre: "",
    telefono: "",
    correo: "",
    institucion: "",
    descripcion: "",
    beneficiarios: []
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  enviar = () => {
    const { nombre, telefono, correo, institucion, descripcion } = this.state;
    this.props.pushToTable("datosBeneficiarios", {
      nombre, telefono, correo, institucion, descripcion
    })
    this.setState({
      nombre: "",
      telefono: "",
      correo: "",
      institucion: "",
      descripcion: ""
    })
  }

  render() {
    const beneficiarios = this.props.data;
    const { nombre, telefono, correo, institucion, descripcion } = this.state;

    const añadirBeneficiario = (
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="firstName">Nombre de Representante</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                minlenght="2"
                required
                onChange={this.onChange}
                value={nombre}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="lastName">Telefono de Representante</label>
              <input
                type="text"
                className="form-control"
                name="telefono"
                minlenght="2"
                required
                onChange={this.onChange}
                value={telefono}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email">Correo Electronico</label>
              <input
                type="text"
                className="form-control"
                name="correo"
                onChange={this.onChange}
                value={correo}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="phone">Institución</label>
              <input
                type="text"
                className="form-control"
                name="institucion"
                required
                onChange={this.onChange}
                value={institucion}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Descripcion</label>
          <input
            type="text"
            className="form-control"
            name="descripcion"
            required
            onChange={this.onChange}
            value={descripcion}
          />
        </div>
        <div className="form-group">
          <div className="col-md-4 float-right">
            <button
              onClick={this.enviar}
              className="btn btn-secondary btn-block"
            >
              Ingresar
          </button>
          </div>
        </div>
      </div>
    )
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <button onClick={() => this.props.pagina(1)} className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Volver atrás
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Añadir Datos de Beneficiarios</div>
          {beneficiarios.length < 1 ? añadirBeneficiario : (<div className="card-body">
            {añadirBeneficiario}
            <br /><br /><br /><br />
            <table className=" table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Nombre</th>
                  <th>Telefono</th>
                  <th>Correo</th>
                  <th>Institución</th>
                  <th>Descripción</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {beneficiarios.map((beneficiario, i) => (
                  <tr key={i}>
                    <td>{beneficiario.nombre}</td>
                    <td>{beneficiario.telefono}</td>
                    <td>{beneficiario.correo}</td>
                    <td>{beneficiario.institucion}</td>
                    <td>{beneficiario.descripcion}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => this.props.deleteFromTable("datosBeneficiarios", i)}>
                        Borrar
                        </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="form-group">
              <button className="btn btn-primary btn-block" onClick={() => this.props.pagina(7)}>
                Siguiente
                </button>
            </div>
          </div>)}
        </div>
      </div>
    )
  }
}
