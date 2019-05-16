import React, { Component } from 'react';

export default class AddPerfil3 extends Component {
  state = {
    escuela: "",
    nombre: "",
    check: false,
    tipo: "",
    docentes: []
  }

  componentDidMount() {
    const { docentes } = this.props.data;
    this.setState({docentes});
  }

  onChange = e => {
    if (e.target.value === "Seleccionar Escuela") {
      this.setState({ [e.target.name]: "" });
    } else if (e.target.name === "check") {
      if (this.state.check !== false) {
        this.setState({check: !this.state.check, tipo: "acompañante"});
      } else {
        this.setState({check: !this.state.check, tipo: "coordinador"});
      }
      
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  pushToTable = () => {
    const {nombre, docentes, escuela, tipo} = this.state;
		if (nombre === "" || escuela === "") { return;}
		if (escuela === "Elija su escuela") {this.setState({docente: ""})};
		docentes.push({nombre, tipo, escuela});
		this.setState({ docentes, nombre: "", check: false, tipo: "acompañante"});
  }
  
  deleteFromTable = index => {
		const { docentes } = this.state;
		if (index !== -1) {
			docentes.splice(index, 1);
			this.setState({ docentes });
		}
	}

  onSubmit = () => {
		if (this.state.docentes.length > 0) {
			this.props.onSubmit("window3", {docentes: this.state.docentes});
			this.props.pagina(4);
		}
	}

  render() {
    const { facultades, facultad } = this.props;
    const { docentes } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <button onClick={() => this.props.pagina(2)} className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Volver atrás
            </button>
          </div>
        </div>
        <br />
        <h2>Añadir nuevo perfil (3/9)</h2>
        <br />
        <div className="card">
          <div className="card-header"> Información de responsables del proyecto o actividad de proyección social</div>
          <div className="card-body">
          <div className="card-body">
        <h3>Nombre del docente coordinador y acompañantes</h3>
        <div className="form-group">
          <label>Escuela:</label>
          <select className="browser-default custom-select" name="escuela" onChange={this.onChange}>
                <option value="">Seleccionar Escuela</option>
                {facultad !== "" && facultades && facultades
                  .filter(facu => facu.nombre === facultad)[0]
                  . escuelas.map((escuela, i) => 
                    <option key={i} value={escuela.nombre}>{escuela.nombre}</option>)
                }
              </select>
        </div>

        <div className="form-group">
          <label>Docente:</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            minlenght="2"
            required
            onChange={this.onChange}
            value={this.state.nombre}
          />
        </div>

        {
          docentes.length === 0 && <div className="form-group">
          <label>Rol (checkear solo si es coordinador):</label>
          <br />
          <input type="checkbox" checked={this.state.check} onChange={this.onChange} name="check"/> Coordinador
        </div>
        }

        {
          docentes.length > 0 && docentes.filter(docente => docente.tipo === "coordinador").length <= 0 ?
          <div className="form-group">
            <label>Rol (checkear solo si es coordinador):</label>
            <br />
            <input type="checkbox" checked={this.state.check} onChange={this.onChange} name="check"/> Coordinador
          </div>
          : null
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
            <br /><br /><br /><br />
            <table className=" table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Nombre</th>
                  <th>Escuela</th>
                  <th>Tipo</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {docentes.length > 0 && docentes.map((docente, i) => (
                  <tr key={i}>
                    <td>{docente.nombre}</td>
                    <td>{docente.escuela}</td>
                    <td>{docente.tipo}</td>
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
          </div>
        </div>
      </div>
    )
  }
}
