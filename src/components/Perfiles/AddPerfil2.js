import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class AddPerfil2 extends Component {
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
        facultad: "Negocios",
        escuela: "Negocios",
        asignatura: "Leyes"
      },
      {
        facultad: "Negocios",
        escuela: "Negocios",
        asignatura: "Leyes"
      },
      {
        facultad: "Negocios",
        escuela: "Negocios",
        asignatura: "Leyes"
      }
    ]

    const añadirBeneficiario = (
      <div className="card-body">

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

        <br /><br />
        <hr />
        <br />
        <div className="form-group">
          <label>Asignatura:</label>
          <select className="browser-default custom-select">
            <option>Elija su Asignatura</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
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
        <br />
        <h2>Añadir nuevo perfil (2/9)</h2>
        <br />
        <div className="card">
          <div className="card-header">Añadir Datos de Beneficiarios</div>
          {ejemplo.length <= 0 ? añadirBeneficiario : (<div className="card-body">
            {añadirBeneficiario}
            <br /><br /><br /><br />
            <table className=" table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Asignaturas</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {ejemplo.map((beneficiario, i) => (
                  <tr key={i}>
                    <td>{beneficiario.asignatura}</td>
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
              <button className="btn btn-primary btn-block" onClick={() => this.props.pagina(3)}>
                Siguiente
                </button>
            </div>
          </div>)}
        </div>
      </div>
    )
  }
}
