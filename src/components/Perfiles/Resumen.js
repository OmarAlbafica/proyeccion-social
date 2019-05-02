import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class Resumen extends Component {
  render() {
    return (
      <div className="container">
        <h1>Revisión</h1>
        <button className="btn btn-link" onClick={() => this.props.pagina(11)}>
          <i className="fas fa-arrow-circle-left" /> Volver a modificar
        </button>
        <div className="card">
          <br />
          <h2 className="h2" style={{ marginLeft: "20px" }}>Datos del Perfil</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card-body">
                <h4>ID:</h4>
                <label>03-DG-asdg</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h4>Fecha:</h4>
                <label>20-12-2019</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card-body">
                <h4>Titulo:</h4>
                <label>Mi Proyeccion Socual</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h4>Estudiantes Femeninos:</h4>
                <label>15</label>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h4>Estudiantes Masculinos:</h4>
            <label>100</label>
          </div>
        </div>

        <div className="card">
          <br />
          <h2 className="h2" style={{ marginLeft: "20px" }}>Datos de Beneficiario</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card-body">
                <h4>Nombre:</h4>
                <label>USAID</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h4>Telefono:</h4>
                <label>2388498</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card-body">
                <h4>Correo Electronico:</h4>
                <label>mail@mail.com</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h4>Institución</h4>
                <label>Awiwiwi</label>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <br />
          <h2 className="h2" style={{ marginLeft: "20px" }}>Linea de Proyección</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card-body">
                <h4>Linea de proyección:</h4>
                <label>Linea de proyección N1</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h4>Asignatura:</h4>
                <label>Electiva 1</label>
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br /><br />
        <div className="text-center">
          <h1>CONTINUARA</h1>
        </div>

        <br /><br />
        <div className="form-group">
          <Link to={"/"} className="btn btn-primary btn-block">
            Enviar Perfile
          </Link>
        </div>
        <br /><br /><br /><br /><br /><br />
      </div >



    )
  }
}
