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
    // const beneficiarios = this.props.data;
    // const { nombre, telefono, correo, institucion, descripcion } = this.state;

    const ejemplo = [
      {
        cantidad: "Juan Perez",
        descripcion: "Negocios",
        caracteristicas: "coordinador",
        proveedor: "Siman",
        preciou: "10.20"
      },
      {
        cantidad: "Juan Perez",
        descripcion: "Negocios",
        caracteristicas: "coordinador",
        proveedor: "Siman",
        preciou: "10.20"
      },
      {
        cantidad: "Juan Perez",
        descripcion: "Negocios",
        caracteristicas: "coordinador",
        proveedor: "Siman",
        preciou: "10.20"
      }
    ]

    const añadirBeneficiario = (
      <div className="card-body">
        <h4>Detalles de la compra</h4>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Fecha:</label>
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
              <label>Observaciones:</label>
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

          <br /><br /><hr />
          <div className="col-md-12">
            <h3>Agregar nuevo item</h3>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Cantidad:</label>
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
              <label>Caracteristicas:</label>
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
              <label>Descripcion:</label>
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
              <label>Proveedor:</label>
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
              <label>Precio Unitario:</label>
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
            <Link to="/perfiles/3453453236/solicitudes" className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Volver atrás
            </Link>
          </div>
        </div>
        <br />
        <h2>Añadir nueva solicitud de compra</h2>
        <br />
        <div className="card">
          {ejemplo.length <= 0 ? añadirBeneficiario : (<div className="card-body">
            {añadirBeneficiario}
            <br /><br /><br /><br />
            <table className=" table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Cantidad</th>
                  <th>Descripción</th>
                  <th>Caracteristicas</th>
                  <th>Proveedor</th>
                  <th>Precio Unitario</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {ejemplo.map((beneficiario, i) => (
                  <tr key={i}>
                    <td>{beneficiario.cantidad}</td>
                    <td>{beneficiario.descripcion}</td>
                    <td>{beneficiario.caracteristicas}</td>
                    <td>{beneficiario.proveedor}</td>
                    <td>{beneficiario.preciou}</td>
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
              <Link to="/perfiles/3453453236/solicitudes" className="btn btn-primary btn-block">
                Enviar
              </Link>
            </div>
          </div>)}
        </div>
      </div>
    )
  }
}
