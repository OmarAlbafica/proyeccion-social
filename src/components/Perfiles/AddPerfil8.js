import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class AddPerfil8 extends Component {
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
        descripcion: "Me aburri de poner Lorem Ipsums",
        cantidad: "8",
        preciou: "10.2",
        totalConIVA: "10.2"
      },
      {
        descripcion: "Me aburri de poner Lorem Ipsums",
        cantidad: "8",
        preciou: "10.2",
        totalConIVA: "10.2"
      },
      {
        descripcion: "Me aburri de poner Lorem Ipsums",
        cantidad: "8",
        preciou: "10.2",
        totalConIVA: "10.2"
      }
    ]

    const ejemplo2 = [
      {
        descripcion: "Carrito",
        cantidad: "20",
        preciou: "5",
        total: "100"
      },
      {
        descripcion: "Carrito",
        cantidad: "20",
        preciou: "5",
        total: "100"
      },
      {
        descripcion: "Carrito",
        cantidad: "20",
        preciou: "5",
        total: "100"
      }
    ]

    const añadirBeneficiario = (
      <div className="card-body">
        <h3>Material</h3>
        <div className="row">
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
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="lastName">Cantidad</label>
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

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="firstName">Precio Unitario</label>
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
              <label htmlFor="lastName">Precio con IVA</label>
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
              <th>Descripcion</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Total con IVA</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {ejemplo1.map((beneficiario, i) => (
              <tr key={i}>
                <td>{beneficiario.descripcion}</td>
                <td>{beneficiario.cantidad}</td>
                <td>{beneficiario.preciou}</td>
                <td>{beneficiario.totalConIVA}</td>
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
        <h3>Transporte</h3>
        <div className="row">
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
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="firstName">Precio Unitario</label>
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
              <label htmlFor="firstName">Total</label>
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
              <th>Descripcion</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>total</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {ejemplo2.map((beneficiario, i) => (
              <tr key={i}>
                <td>{beneficiario.descripcion}</td>
                <td>{beneficiario.cantidad}</td>
                <td>{beneficiario.preciou}</td>
                <td>{beneficiario.total}</td>
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
            <button onClick={() => this.props.pagina(7)} className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Volver atrás
            </button>
          </div>
        </div>

        <br />
        <h2>Añadir nuevo perfil (8/9)</h2>
        <br />
        <div className="card">
          <div className="card-header">Descripción de materiales a utilizar</div>
          {beneficiarios.length < 0 ? añadirBeneficiario : (<div className="card-body">
            {añadirBeneficiario}

            <div className="form-group">
              <button className="btn btn-primary btn-block" onClick={() => this.props.pagina(9)}>
                Siguiente
                </button>
            </div>
          </div>)}
        </div>
      </div>
    )
  }
}
