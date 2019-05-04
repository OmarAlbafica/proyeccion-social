import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class AddPerfil3 extends Component {
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
        escuela: "Negocios",
        tipo: "coordinador"
      },
      {
        nombre: "Godinez",
        escuela: "Negocios",
        tipo: "acompañante"
      },
      {
        nombre: "adfaldsfad",
        escuela: "Negocios",
        tipo: "acompañante"
      }
    ]

    const añadirBeneficiario = (
      <div className="card-body">
        <h3>Nombre del docente coordinador y acompañantes</h3>
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
          <label>Docente:</label>
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
          <label>Rol (checkear solo si es coordinador):</label>
          <br />
          <input type="checkbox" name="vehicle1" value="Bike" /> {" "}Coordinador
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
            <button onClick={() => this.props.pagina(2)} className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Volver atrás
            </button>
          </div>
        </div>
        <br />
        <h2>Añadir nuevo perfil (3/9)</h2>
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
                  <th>Escuela</th>
                  <th>Tipo</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {ejemplo.map((beneficiario, i) => (
                  <tr key={i}>
                    <td>{beneficiario.nombre}</td>
                    <td>{beneficiario.escuela}</td>
                    <td>{beneficiario.tipo}</td>
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
              <button className="btn btn-primary btn-block" onClick={() => this.props.pagina(4)}>
                Siguiente
                </button>
            </div>
          </div>)}
        </div>
      </div>
    )
  }
}
