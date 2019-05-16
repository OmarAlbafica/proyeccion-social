import React, { Component } from 'react';

export default class AddPerfil9 extends Component {
  state = {
    nombreOrganizacion: "",
    descripcionOrganizacion: "",
    correo: "",
    nombreActor: "",
    telefonoActor: "",
    correoActor: "",
    descripcionActor: "",
    organizacionesAliadas: [],
    actoresClave: []
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = () => {
    const {organizacionesAliadas, actoresClave} = this.state;
    console.log(this.state);
    this.props.onSubmit("window9", {organizacionesAliadas, actoresClave});
    this.props.pagina(10);
  }

  componentDidMount() {
    const { organizacionesAliadas, actoresClave } = this.props.data;
    this.setState({organizacionesAliadas, actoresClave})
  }

  pushToTableM = () => {
		const { nombreOrganizacion, descripcionOrganizacion, organizacionesAliadas } = this.state;
    if (nombreOrganizacion === "" || 
    descripcionOrganizacion === "") { return;}
      organizacionesAliadas.push({
      descripcion: descripcionOrganizacion, 
      nombre: nombreOrganizacion
    });
		this.setState({ 
      organizacionesAliadas, 
      nombreOrganizacion: "", 
      descripcionOrganizacion: ""
    });
  }
  
  deleteFromTableM = index => {
		const { organizacionesAliadas } = this.state;
		if (index !== -1) {
			organizacionesAliadas.splice(index, 1);
			this.setState({ organizacionesAliadas });
		}
  }
  
  pushToTableT = () => {
		const { nombreActor, telefonoActor, correoActor, descripcionActor, actoresClave } = this.state;
    if (nombreActor === "" || 
      telefonoActor === "" || 
      correoActor === "" || 
      descripcionActor === "") { return;}
      actoresClave.push({
        nombre: nombreActor, 
        telefono: telefonoActor, 
        correo: correoActor, 
        descripcionActor: descripcionActor
      });
		this.setState({ 
      actoresClave, 
      nombreActor: "", 
      telefonoActor: "", 
      correoActor: "",
      descripcionActor: ""
    });
  }
  
  deleteFromTableT = index => {
		const { actoresClave } = this.state;
		if (index !== -1) {
			actoresClave.splice(index, 1);
			this.setState({ actoresClave });
		}
	}

  render() {
    const beneficiarios = []
    const { organizacionesAliadas, actoresClave } = this.state;

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
                name="nombreOrganizacion"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.nombreOrganizacion}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="lastName">Descripcion</label>
              <input
                type="text"
                className="form-control"
                name="descripcionOrganizacion"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.descripcionOrganizacion}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="col-md-4 float-right">
            <button
              onClick={this.pushToTableM}
              className="btn btn-secondary btn-block"
            >
              Ingresar
          </button>
          </div>
        </div>

        <br /><br />
        {organizacionesAliadas.length > 0 &&
        <table className=" table table-striped">
        <thead className="thead-inverse">
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {organizacionesAliadas.map((organizacion, i) => (
            <tr key={i}>
              <td>{organizacion.nombre}</td>
              <td>{organizacion.descripcion}</td>
              <td>
                <button className="btn btn-danger" onClick={() => this.deleteFromTableM(i)}>
                  Borrar
                      </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        }

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
                name="nombreActor"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.nombreActor}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="firstName">Telefono</label>
              <input
                type="text"
                className="form-control"
                name="telefonoActor"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.telefonoActor}
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
                name="correoActor"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.correoActor}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="firstName">Descripcion</label>
              <input
                type="text"
                className="form-control"
                name="descripcionActor"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.descripcionActor}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-4 float-right">
            <button
              onClick={this.pushToTableT}
              className="btn btn-secondary btn-block"
            >
              Ingresar
          </button>
          </div>
        </div>
        <br /><br />
        {
          actoresClave.length > 0 &&
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
            {actoresClave.map((actor, i) => (
              <tr key={i}>
                <td>{actor.nombre}</td>
                <td>{actor.telefono}</td>
                <td>{actor.correo}</td>
                <td>{actor.descripcion}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => this.deleteFromTableT(i)}>
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        }

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
              <button className="btn btn-primary btn-block" onClick={this.onSubmit}>
                Siguiente
                </button>
            </div>
          </div>)}
        </div>
      </div>
    )
  }
}
