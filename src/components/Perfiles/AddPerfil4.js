import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class AddPerfil4 extends Component {
  state = {
    nombreRepresentante: "",
    correoRepresentante: "",
    telefonoRepresentante: "",
    institucion: "",
    representantes: []
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  componentDidMount() {
    const {representantes} = this.props.data;
    this.setState({representantes});
  }

  pushToTable = () => {
		const {nombreRepresentante, correoRepresentante, telefonoRepresentante, institucion, representantes} = this.state;
		if (nombreRepresentante === "" || correoRepresentante === "" || telefonoRepresentante === "" || institucion === "") { return;}
		representantes.push({nombreRepresentante, correoRepresentante, telefonoRepresentante, institucion});
		this.setState({ representantes, nombreRepresentante: "", correoRepresentante: "", telefonoRepresentante: "", institucion: ""});
  }
  
  deleteFromTable = index => {
		const { representantes } = this.state;
		if (index !== -1) {
			representantes.splice(index, 1);
			this.setState({ representantes });
		}
  }
  
  onSubmit = () => {
		if (this.state.representantes.length > 0) {
			this.props.onSubmit("window4", {representantes: this.state.representantes});
			this.props.pagina(5);
		}
	}

  render() {
    const {nombreRepresentante, correoRepresentante, telefonoRepresentante, institucion, representantes} = this.state;

    const conditionalRender = (
      <div className="card-body">
        <h3>Información de contacto de Beneficiario</h3>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Nombre del representante:</label>
              <input
                type="text"
                className="form-control"
                name="nombreRepresentante"
                minlenght="2"
                required
                onChange={this.onChange}
                value={nombreRepresentante}
              />
            </div>

            <div className="form-group">
              <label>Telefono del representante:</label>
              <input
                type="text"
                className="form-control"
                name="telefonoRepresentante"
                minlenght="2"
                required
                onChange={this.onChange}
                value={telefonoRepresentante}
              />
            </div>

          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Correo del representante:</label>
              <input
                type="text"
                className="form-control"
                name="correoRepresentante"
                minlenght="2"
                required
                onChange={this.onChange}
                value={correoRepresentante}
              />
            </div>
            <div className="form-group">
              <label>Institución a la que pertenece:</label>
              <input
                type="text"
                className="form-control"
                name="institucion"
                minlenght="2"
                required
                onChange={this.onChange}
                value={institucion}
              />
            </div>
          </div>

        </div>


        <div className="form-group">
          <div className="col-md-4 float-right">
            <button
              onClick={this.pushToTable}
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
            <button onClick={() => this.props.pagina(3)} className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Volver atrás
            </button>
          </div>
        </div>
        <br />
        <h2>Añadir nuevo perfil (4/9)</h2>
        <br />
        <div className="card">
          <div className="card-header"> Información de responsables del proyecto o actividad de proyección social</div>
          {representantes.length <= 0 ? conditionalRender : (<div className="card-body">
            {conditionalRender}
            <br /><br /><br /><br />
            <table className=" table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Nombre</th>
                  <th>Telefono</th>
                  <th>Correo</th>
                  <th>Institución</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {representantes.map((representante, i) => (
                  <tr key={i}>
                    <td>{representante.nombreRepresentante}</td>
                    <td>{representante.telefonoRepresentante}</td>
                    <td>{representante.correoRepresentante}</td>
                    <td>{representante.institucion}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => this.deleteFromTable(i)}>
                        Borrar
                        </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

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
