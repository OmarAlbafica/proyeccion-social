import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class AddPerfil9 extends Component {
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

    const ejemplo1 = [
      {
        nombre: "Me aburri de poner Lorem Ipsums",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam quisquam corrupti vitae tempore. Exercitationem quibusdam quis nemo iure, possimus necessitatibus modi unde quidem sapiente rem quaerat, amet ab maxime"
      },
      {
        nombre: "Me aburri de poner Lorem Ipsums",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam quisquam corrupti vitae tempore. Exercitationem quibusdam quis nemo iure, possimus necessitatibus modi unde quidem sapiente rem quaerat, amet ab maxime"
      },
      {
        nombre: "Me aburri de poner Lorem Ipsums",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam quisquam corrupti vitae tempore. Exercitationem quibusdam quis nemo iure, possimus necessitatibus modi unde quidem sapiente rem quaerat, amet ab maxime"
      },
      {
        nombre: "Me aburri de poner Lorem Ipsums",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam quisquam corrupti vitae tempore. Exercitationem quibusdam quis nemo iure, possimus necessitatibus modi unde quidem sapiente rem quaerat, amet ab maxime"
      },
    ]

    const ejemplo2 = [
      {
        nombre: "Juan",
        telefono: "2948429",
        correo: "mail@mail.com",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam quisquam corrupti vitae tempore. Exercitationem quibusdam quis nemo iure, possimus necessitatibus modi unde quidem sapiente rem quaerat, amet ab maxime"
      },
      {
        nombre: "Juan",
        telefono: "2948429",
        correo: "mail@mail.com",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam quisquam corrupti vitae tempore. Exercitationem quibusdam quis nemo iure, possimus necessitatibus modi unde quidem sapiente rem quaerat, amet ab maxime"
      },
      {
        nombre: "Juan",
        telefono: "2948429",
        correo: "mail@mail.com",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam quisquam corrupti vitae tempore. Exercitationem quibusdam quis nemo iure, possimus necessitatibus modi unde quidem sapiente rem quaerat, amet ab maxime"
      }
    ]

    const añadirBeneficiario = (
      <div className="card-body">
        <h3>Organizaciones Aliadas</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="firstName">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                minlenght="2"
                required
                onChange={this.onChange}
                value={""}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="lastName">Descripcion</label>
              <input
                type="number"
                className="form-control"
                name="telefono"
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

        <br /><br />
        <table className=" table table-striped">
          <thead className="thead-inverse">
            <tr>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {ejemplo1.map((beneficiario, i) => (
              <tr key={i}>
                <td>{beneficiario.nombre}</td>
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

        <br />
        <hr />
        <h3>Actores Clave</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="firstName">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                minlenght="2"
                required
                onChange={this.onChange}
                value={""}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="firstName">Telefono</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                minlenght="2"
                required
                onChange={this.onChange}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="firstName">Correo Electronico</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                minlenght="2"
                required
                onChange={this.onChange}
                value={""}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="firstName">Descripcion</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
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
        <br /><br />
        <table className=" table table-striped">
          <thead className="thead-inverse">
            <tr>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Correo</th>
              <th>Descripcion</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {ejemplo2.map((beneficiario, i) => (
              <tr key={i}>
                <td>{beneficiario.nombre}</td>
                <td>{beneficiario.telefono}</td>
                <td>{beneficiario.correo}</td>
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

      </div >
    )
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <button onClick={() => this.props.pagina(8)} className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Volver atrás
            </button>
          </div>
        </div>

        <br />
        <h2>Añadir nuevo perfil (9/9)</h2>
        <br />
        <div className="card">
          <div className="card-header">Información Complementaria</div>
          {beneficiarios.length < 0 ? añadirBeneficiario : (<div className="card-body">
            {añadirBeneficiario}

            <div className="form-group">
              <button className="btn btn-primary btn-block" onClick={() => this.props.pagina(10)}>
                Siguiente
                </button>
            </div>
          </div>)}
        </div>
      </div>
    )
  }
}
