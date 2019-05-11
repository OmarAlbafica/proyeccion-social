import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class AddPerfil2 extends Component {
  state = {
    facultad: "",
    escuela: "",
    asignatura: "",
    asignaturas: []
  }

  onChange = e => {
    if (e.target.name === "facultad") {
      this.setState({[e.target.name]: e.target.value, escuela: "", asignatura: ""});
    } else if (e.target.name === "escuela") {
      this.setState({[e.target.name]: e.target.value, asignatura: ""});
    } else this.setState({[e.target.name]: e.target.value})
  };

  componentDidMount() {
    this.setState({...this.state, ...this.props.data});
  }

  pushToTable = () => {
    const {facultad, escuela, asignatura, asignaturas} = this.state;
    if (facultad === "" || escuela === "" || asignatura === "") { return;}
    asignaturas.push({facultad, escuela, asignatura});
    this.setState({ asignaturas, facultad: "", escuela: "", asignatura: "" });
  }

  deleteFromTable = index => {

    const { asignaturas } = this.state;
    if (index !== -1) {
      asignaturas.splice(index, 1);
      this.setState({ asignaturas });
    }
  }

  onSubmit = () => {
    if (this.state.asignaturas.length > 0) {
      this.props.onSubmit("window2", this.state.asignaturas)
      this.props.pagina(3)
    }
  }


  render() {
    const { facultades } = this.props;
    const { facultad, escuela } = this.state;

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

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <button onClick={() => this.props.pagina(1)} className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Volver atrás
            </button>
          </div>
        </div>
        <br />
        <h2>Añadir nuevo perfil (2/9)</h2>
        <br />
        <div className="card">
          <div className="card-header">Asignaturas que desarrollarán el proyecto o actividad de proyección social</div>
          <div className="card-body">
          <div className="card-body">

            <div className="form-group">
              <label>Facultad:</label>
              <select 
                className="browser-default custom-select" 
                name="facultad" 
                onChange={this.onChange}
                value={this.state.facultad}
              >
                <option value="">Seleccionar facultad</option>
                {facultades && facultades.map((facultad, i) => 
                <option key={i} value={facultad.nombre}>{facultad.nombre}</option>)}
              </select>
            </div>

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
              <label>Asignatura:</label>
              <select className="browser-default custom-select" name="asignatura" onChange={this.onChange}>
                <option value="">Elija su Asignatura</option>
                {facultad !== "" && facultades && escuela !== "" && facultades
                   .filter(facu => facu.nombre === facultad)[0]
                   .escuelas.filter(escul => escul.nombre === escuela)[0].materias
                   .map((asignatura, i) => <option key={i} value={asignatura}>{asignatura}</option>)
                }
              </select>
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
            <br /><br /><br /><br />
            <table className=" table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Facultad</th>
                  <th>Escuela</th>
                  <th>Asignatura</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.state.asignaturas.length > 0 && this.state.asignaturas.map((asignatura, i) => (
                  <tr key={i}>
                    <td>{asignatura.facultad}</td>
                    <td>{asignatura.escuela}</td>
                    <td>{asignatura.asignatura}</td>
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
