import React, { Component } from 'react';


export default class AddPerfil2 extends Component {
	state = {
		asignatura: "",
		asignaturas: [],
		alumnosM: "0",
		alumnosF: "0"
	}

	pushToTable = () => {
		const {asignatura, asignaturas} = this.state;
		if (asignatura === "") { return;}
		if (asignatura === "Elija su Asignatura") {this.setState({asignatura: ""})};
		asignaturas.push(asignatura);
		this.setState({ asignaturas, asignatura: "" });
	}


	componentDidMount() {
		const {asignaturas, alumnosM, alumnosF} = this.props.data;
		this.setState({asignaturas, alumnosM, alumnosF});
	}

	deleteFromTable = index => {

		const { asignaturas } = this.state;
		if (index !== -1) {
			asignaturas.splice(index, 1);
			this.setState({ asignaturas });
		}
	}

	onSubmit = () => {
		const {asignaturas, alumnosM, alumnosF} = this.state;
		if (asignaturas.length > 0 && alumnosM !== "0" && alumnosF !== "0") {
			this.props.onSubmit("window2", {
				asignaturas: this.state.asignaturas,
				alumnosM,
				alumnosF
			})
			this.props.pagina(3)
		}
	}

	onChange = e => {
		this.setState({[e.target.name]: e.target.value})
  };


	render() {
		const { facultades } = this.props;
		const {facultad, escuela} = this.props;

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

					<div className="row">
						<div className="col-md-6">
							<div className="card-body">
								<label>Facultad:</label>
							</div>
						</div>
						<div className="col-md-6">
							<div className="card-body">
								<label>{facultad}</label>
							</div>
						</div>
						<div className="col-md-6">
							<div className="card-body">
								<label>Escuela:</label>
							</div>
						</div>
						<div className="col-md-6">
							<div className="card-body">
								<label>{escuela}</label>
							</div>
						</div>
					</div>
					</div>
						<div className="form-group">
							<label>Asignatura:</label>
							<select className="browser-default custom-select" name="asignatura" onChange={this.onChange}>
								<option value="">Elija su Asignatura</option>
								{facultades.length > 0 && facultades.filter(facu => facu.nombre === facultad)[0].escuelas.filter(escu => escu.nombre === escuela)[0].materias.map((asignatura, i) => <option key={i} value={asignatura}>{asignatura}</option>)}
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
						{this.state.asignaturas.length > 0 && 
						<table className=" table table-striped">
						<thead className="thead-inverse">
							<tr>
								<th>Asignatura</th>
								<th />
							</tr>
						</thead>
						<tbody>
							{this.state.asignaturas.length > 0 && this.state.asignaturas.map((asignatura, i) => (
								<tr key={i}>
									<td>{asignatura}</td>
									<td>
										<button className="btn btn-danger" onClick={() => this.deleteFromTable(i)}>
											Borrar
											</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>}
						<br/><br/>
						<hr/>
						<div className="container">
						<div className="form-group">
						<label>Cantidad de alumnos masculinos: </label>
					<input
						type="number"
						className="form-control"
						name="alumnosM"
						minlenght="2"
						required
						onChange={this.onChange}
						value={this.state.alumnosM}
					/>
					</div>

					<div className="form-group">
					<label>Cantidad de alumnos femeninos: </label>
					<input
						type="number"
						className="form-control"
						name="alumnosF"
						minlenght="2"
						required
						onChange={this.onChange}
						value={this.state.alumnosF}
					/>
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
