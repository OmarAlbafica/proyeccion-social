import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class AddPerfil7 extends Component {
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
        actividad: "Charla",
        nvisitas: 3,
        ciclo: "01-2019",
        objetivo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam quisquam corrupti vitae tempore. Exercitationem quibusdam quis nemo iure, possimus necessitatibus modi unde quidem sapiente rem quaerat, amet ab maxime."
      },
      {
        actividad: "Charla",
        nvisitas: 3,
        ciclo: "01-2019",
        objetivo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam quisquam corrupti vitae tempore. Exercitationem quibusdam quis nemo iure, possimus necessitatibus modi unde quidem sapiente rem quaerat, amet ab maxime."
      },
      {
        actividad: "Charla",
        nvisitas: 3,
        ciclo: "01-2019",
        objetivo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam quisquam corrupti vitae tempore. Exercitationem quibusdam quis nemo iure, possimus necessitatibus modi unde quidem sapiente rem quaerat, amet ab maxime."
      }
    ]

    const añadirBeneficiario = (
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Actividad:</label>
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
              <label>N de visitas:</label>
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

        <div className="col-md-4">
          <div className="form-group">
            <label>Ciclo a Ejecutar:</label>
            <select className="browser-default custom-select">
              <option>Elija el ciclo</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Objetivo:</label>
          <textarea name="" id="" rows="5" className="form-control"></textarea>
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
            <button onClick={() => this.props.pagina(6)} className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Volver atrás
            </button>
          </div>
        </div>
        <br />
        <h2>Añadir nuevo perfil (7/9)</h2>
        <br />
        <div className="card">
          <div className="card-header"> Descripción de Acciones a Ejecutar</div>
          {ejemplo.length <= 0 ? añadirBeneficiario : (<div className="card-body">
            {añadirBeneficiario}
            <br /><br /><br /><br />
            <table className=" table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Actividad</th>
                  <th>N de Visitas</th>
                  <th>Ciclo</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {ejemplo.map((beneficiario, i) => (
                  <tr key={i}>
                    <td>{beneficiario.actividad}</td>
                    <td>{beneficiario.nvisitas}</td>
                    <td>{beneficiario.ciclo}</td>
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
              <button className="btn btn-primary btn-block" onClick={() => this.props.pagina(8)}>
                Siguiente
                </button>
            </div>
          </div>)}
        </div>
      </div>
    )
  }
}
