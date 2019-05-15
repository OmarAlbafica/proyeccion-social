import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class AddPerfil7 extends Component {
  state = {
    actividad: "",
    nVisitas: "",
    ciclo: "",
    objetivo: "",
    actividades: []
  }

  onChange = e => {
    if (e.target.value === "Seleccionar Ciclo") {
      this.setState({ [e.target.name]: "" });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  componentDidMount() {
    const { actividades } = this.props.data;
    this.setState({ actividades });
  }

  onSubmit = () => {
		if (this.state.actividades.length > 0) {
			this.props.onSubmit("window7", {actividades: this.state.actividades});
			this.props.pagina(8);
		}
	}

  pushToTable = () => {
		const { actividad, nVisitas, ciclo, objetivo, actividades } = this.state;
    if (actividad === "" || 
      nVisitas === "" || 
      ciclo === "" || 
      objetivo === "") { return;}
		actividades.push({actividad, nVisitas, ciclo, objetivo});
		this.setState({ 
      actividades, 
      actividad: "", 
      nVisitas: "", 
      ciclo: "", 
      objetivo: "" 
    });
  }
  
  deleteFromTable = index => {
		const { actividades } = this.state;
		if (index !== -1) {
			actividades.splice(index, 1);
			this.setState({ actividades });
		}
	}

  render() {
    const { actividades } = this.state;
    const { ciclos } = this.props;

    const añadirBeneficiario = (
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Actividad:</label>
              <input
                type="text"
                className="form-control"
                name="actividad"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.actividad}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>N de visitas:</label>
              <input
                type="text"
                className="form-control"
                name="nVisitas"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.nVisitas}
              />
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>Ciclo a Ejecutar:</label>
            <select className="browser-default custom-select" name="ciclo" onChange={this.onChange}>
                <option value="">Seleccionar Ciclo</option>
                {ciclos.length > 0 && ciclos.map((ciclo, i) => 
                    <option key={i} value={ciclo}>{ciclo}</option>)
                }
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Objetivo:</label>
          <textarea name="objetivo" onChange={this.onChange} value={this.state.objetivo} rows="5" className="form-control"/>
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
          {actividades.length <= 0 ? añadirBeneficiario : (<div className="card-body">
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
                {actividades.length > 0 && actividades.map((act, i) => (
                  <tr key={i}>
                    <td>{act.actividad}</td>
                    <td>{act.nvisitas}</td>
                    <td>{act.ciclo}</td>
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
