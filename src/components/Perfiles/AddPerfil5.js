import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class AddPerfil4 extends Component {
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

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <button onClick={() => this.props.pagina(4)} className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Volver atrás
            </button>
          </div>
        </div>
        <br />
        <h2>Añadir nuevo perfil (5/9)</h2>
        <br />
        <div className="card">
          <div className="card-header"> Justificación del proyecto o investigación social</div>
          <div className="card-body">
            <div className="form-group">
              <label>Justificación:</label>
              <textarea rows="10" className="form-control"></textarea>
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-block" onClick={() => this.props.pagina(6)}>
                Siguiente
                </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
