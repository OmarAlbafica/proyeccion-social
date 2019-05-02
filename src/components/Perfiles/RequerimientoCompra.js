import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class RequerimientoCompra extends Component {
  state = {
    id: "",
    titulo: "",
    fecha: "",
    estudiantesFemeninos: "",
    estudiantesMasculinos: "",
    error: ""
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  componentDidMount() {
    const { id, titulo, fecha, estudiantesFemeninos, estudiantesMasculinos } = this.props.data;
    this.setState({ id, titulo, fecha, estudiantesFemeninos, estudiantesMasculinos })
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.pagina(10);
    // const { id, titulo, fecha, estudiantesFemeninos, estudiantesMasculinos } = this.state;
    // if (id === "" || titulo === "" || fecha === "" || estudiantesFemeninos === "" || estudiantesMasculinos === "") {
    //   this.setState({ error: "Por favor llenar todos los campos" });
    // } else {
    //   this.props.onSubmit(1, { id, titulo, fecha, estudiantesFemeninos, estudiantesMasculinos });
    // }
  }

  render() {

    const ejemplo = [
      {
        cantidad: "4",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
        caracteristicas: "LKSDF;LADFAKDFADFA.DFAKDJF.ADNFAKJ",
        proveedor: "Juan Perez",
        precioUnitario: "12$"
      }, {
        cantidad: "4",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
        caracteristicas: "LKSDF;LADFAKDFADFA.DFAKDJF.ADNFAKJ",
        proveedor: "Juan Perez",
        precioUnitario: "12$"
      },
      {
        cantidad: "4",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
        caracteristicas: "LKSDF;LADFAKDFADFA.DFAKDJF.ADNFAKJ",
        proveedor: "Juan Perez",
        precioUnitario: "12$"
      },
    ]
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <button onClick={() => this.props.pagina(8)} className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Volver atrás
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Requerimiento de Compras</div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="firstName">Fecha</label>
              <input
                type="date"
                className="form-control"
                name="fecha"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.fecha}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Observaciones</label>
              <input
                type="text"
                className="form-control"
                name="observaciones"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.npersonas}
              />
            </div>
            <br /><br />
            <hr />
            <br />
            <h3>Nueva compra</h3>
            <br />

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="firstName">Cantidad</label>
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
                    type="text"
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

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Caracteristicas</label>
                  <input
                    type="text"
                    className="form-control"
                    name="correo"
                    onChange={this.onChange}
                    value={""}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="phone">Proveedor:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="institucion"
                    required
                    onChange={this.onChange}
                    value={""}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Precio Unitario:</label>
              <input
                type="text"
                className="form-control"
                name="institucion"
                required
                onChange={this.onChange}
                value={""}
              />
            </div>

            <div className="form-group">
              <button className="btn btn-secondary btn-block" onClick={this.onSubmit}>Añadir</button>
            </div>
            <table className=" table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Objetivos</th>
                  <th>Contenido</th>
                  <th>Herramientas</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {ejemplo.map((item, i) => (
                  <tr key={i}>
                    <td>{item.cantidad}</td>
                    <td>{item.descripcion}</td>
                    <td>{item.caracteristicas}</td>
                    <td>{item.proveedor}</td>
                    <td>{item.precioUnitario}</td>
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
              <button className="btn btn-primary btn-block" onClick={this.onSubmit}>Siguiente</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
