import React, { Component } from 'react';


export default class AddPerfil6 extends Component {
  state = {
    checked: false,
    tipo: "Especifico",
    descripcion: "",
    objetivos: []
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  componentDidMount() {
    this.setState({objetivos: this.props.data.objetivos})
  }


  changeTipo = () => {
    this.state.checked ? this.setState({checked: false, tipo: "Especifico"})
    : this.setState({checked: true, tipo: "General"})
  }

  onSubmit = () => {
		if (this.state.objetivos.length > 0) {
			this.props.onSubmit("window6", {objetivos: this.state.objetivos});
			this.props.pagina(7);
		}
	}

  pushToTable = () => {
		const {descripcion, tipo, objetivos} = this.state;
		if (descripcion === "") { return;}
		objetivos.push({descripcion, tipo});
		this.setState({ objetivos, descripcion: "", checked: false, tipo: "Especifico"});
  }
  
  deleteFromTable = index => {
		const { objetivos } = this.state;
		if (index !== -1) {
			objetivos.splice(index, 1);
			this.setState({ objetivos });
		}
	}

  render() {
    console.log(this.state);
    const { checked, descripcion, objetivos } = this.state;

    const añadirBeneficiario = (
      <div className="card-body">
        <div className="form-group">
          <label>Objetivo:</label>
          <textarea name="descripcion" onChange={this.onChange} value={this.state.descripcion} cols="30" rows="5" className="form-control"></textarea>
        </div>

        {objetivos.length >= 0 && objetivos.filter(obj => obj.tipo === "General")
          .length <= 0 &&
          <div className="form-group">
            <label>Tipo:</label>
            <br />
            <input type="checkbox" onChange={this.changeTipo} checked={checked} name="check"/>{" "}General (Marcar solo si es objetivo general)
          </div>
        }


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
          {objetivos.length <= 0 ? añadirBeneficiario : (<div className="card-body">
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
                {objetivos.map((objetivo, i) => (
                  <tr key={i}>
                    <td>{objetivo.tipo}</td>
                    <td>{objetivo.descripcion}</td>
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
