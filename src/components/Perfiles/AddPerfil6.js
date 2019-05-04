import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class AddPerfil6 extends Component {
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
        tipo: "General",
        contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam quisquam corrupti vitae tempore. Exercitationem quibusdam quis nemo iure, possimus necessitatibus modi unde quidem sapiente rem quaerat, amet ab maxime."
      },
      {
        tipo: "Especifico",
        contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam quisquam corrupti vitae tempore. Exercitationem quibusdam quis nemo iure, possimus necessitatibus modi unde quidem sapiente rem quaerat, amet ab maxime."
      },
      {
        tipo: "Especifico",
        contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam quisquam corrupti vitae tempore. Exercitationem quibusdam quis nemo iure, possimus necessitatibus modi unde quidem sapiente rem quaerat, amet ab maxime."
      },
    ]

    const añadirBeneficiario = (
      <div className="card-body">
        <div className="form-group">
          <label>Objetivo:</label>
          <textarea name="" id="" cols="30" rows="5" className="form-control"></textarea>
        </div>

        <div className="form-group">
          <label>Tipo:</label>
          <br />
          <input type="checkbox" name="vehicle1" value="Bike" /> {" "}General
          <br /><br />
          <input type="checkbox" name="vehicle1" value="Bike" /> {" "}Especifico
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
            <button onClick={() => this.props.pagina(5)} className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Volver atrás
            </button>
          </div>
        </div>
        <br />
        <h2>Añadir nuevo perfil (6/9)</h2>
        <br />
        <div className="card">
          <div className="card-header"> Objetivos de proyección o actividad socual</div>
          {ejemplo.length <= 0 ? añadirBeneficiario : (<div className="card-body">
            {añadirBeneficiario}
            <br /><br /><br /><br />
            <table className=" table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Tipo</th>
                  <th>Contenido</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {ejemplo.map((beneficiario, i) => (
                  <tr key={i}>
                    <td>{beneficiario.tipo}</td>
                    <td>{beneficiario.contenido}</td>
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
