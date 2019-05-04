import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class GuiaTrabajo1 extends Component {
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
    // const { id, titulo, fecha, estudiantesFemeninos, estudiantesMasculinos } = this.props.data;
    // this.setState({ id, titulo, fecha, estudiantesFemeninos, estudiantesMasculinos })
  }

  onSubmit = e => {
    e.preventDefault();
    // const { id, titulo, fecha, estudiantesFemeninos, estudiantesMasculinos } = this.state;
    // if (id === "" || titulo === "" || fecha === "" || estudiantesFemeninos === "" || estudiantesMasculinos === "") {
    //   this.setState({ error: "Por favor llenar todos los campos" });
    // } else {
    //   this.props.onSubmit({ id, titulo, fecha, estudiantesFemeninos, estudiantesMasculinos });
    //   this.props.pagina(2);
    // }
  }

  render() {

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
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Fecha de Entrega:</label>
              <input
                type="number"
                className="form-control"
                name="id"
                minlenght="2"
                required
                onChange={this.onChange}
                value={""}
              />
            </div>
            <div className="form-group">
              <label>N entrega:</label>
              <input
                type="number"
                className="form-control"
                name="id"
                minlenght="2"
                required
                onChange={this.onChange}
                value={""}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label>Talla M:</label>
              <input
                type="number"
                className="form-control"
                name="id"
                minlenght="2"
                required
                onChange={this.onChange}
                value={""}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>talla M:</label>
              <input
                type="number"
                className="form-control"
                name="id"
                minlenght="2"
                required
                onChange={this.onChange}
                value={""}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>talla XL:</label>
              <input
                type="number"
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
            <Link to="/perfiles/3453453236/solicitudes"
              className="btn btn-primary btn-block"
            >
              Ingresar
          </Link>
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
        <h2>Solicitudes de Chalecos</h2>
        <br />
        <div className="card">
          <div className="card-header">Añadir Datos</div>
          {ejemplo.length <= 0 ? añadirBeneficiario : (<div className="card-body">
            {añadirBeneficiario}




          </div>)}
        </div>
      </div>
    )
  }
}
