import React, { Component } from 'react';


export default class AddPerfil4 extends Component {
  state = {
    justificacion: "",
  }

  componentDidMount() {
    this.setState({justificacion: this.props.data.justificacion});
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = () => {
		if (this.state.justificacion  !== "") {
			this.props.onSubmit("window5", {justificacion: this.state.justificacion});
			this.props.pagina(6);
		}
	}

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <button onClick={() => this.props.pagina(4)} className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Volver atrás
            </button>
          </div>
        </div>
        <br />
        <h2>Añadir nuevo perfil (5/9)</h2>
        <br />
        <div className="card">
          <div className="card-header"> Justificación del proyecto o investigación social</div>
          <div className="card-body">
            <div className="form-group">
              <label>Justificación:</label>
              <textarea name="justificacion" onChange={this.onChange} rows="10" value={this.state.justificacion} className="form-control" />
            </div>

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
