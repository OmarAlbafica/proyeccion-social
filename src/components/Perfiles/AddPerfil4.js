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

    const ejemplo = [
      {
        nombre: "Juan Perez",
        telefono: "823739484",
        correo: "mail@mail.com",
        institucion: "USAID"
      },
      {
        nombre: "Juan Perez",
        telefono: "823739484",
        correo: "mail@mail.com",
        institucion: "USAID"
      },
      {
        nombre: "Juan Perez",
        telefono: "823739484",
        correo: "mail@mail.com",
        institucion: "USAID"
      }
    ]

    const añadirBeneficiario = (
      <div className="card-body">
        <h3>Información de contacto de Beneficiario</h3>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Nombre del representante:</label>
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
              <label>Telefono del representante:</label>
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

          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Correo del representante:</label>
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
              <label>Institución a la que pertenece:</label>
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
          </div>

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
            <button onClick={() => this.props.pagina(3)} className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Volver atrás
            </button>
          </div>
        </div>
        <br />
        <h2>Añadir nuevo perfil (4/9)</h2>
        <br />
        <div className="card">
          <div className="card-header"> Información de responsables del proyecto o actividad de proyección social</div>
          {ejemplo.length <= 0 ? añadirBeneficiario : (<div className="card-body">
            {añadirBeneficiario}
            <br /><br /><br /><br />
            <table className=" table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Nombre</th>
                  <th>Telefono</th>
                  <th>Correo</th>
                  <th>Institución</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {ejemplo.map((beneficiario, i) => (
                  <tr key={i}>
                    <td>{beneficiario.nombre}</td>
                    <td>{beneficiario.telefono}</td>
                    <td>{beneficiario.correo}</td>
                    <td>{beneficiario.institucion}</td>
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
              <button className="btn btn-primary btn-block" onClick={() => this.props.pagina(5)}>
                Siguiente
                </button>
            </div>
          </div>)}
        </div>
      </div>
    )
  }
}
