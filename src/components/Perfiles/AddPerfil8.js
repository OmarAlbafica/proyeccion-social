import React, { Component } from 'react';

export default class AddPerfil8 extends Component {
  state = {
    descripcionM: "",
    cantidadM: "",
    precioUM: "",
    precioIVAM: "",
    descripcionT: "",
    cantidadT: "",
    precioUT: "",
    precioIVAT: "",
    materiales: [],
    transporte: []
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  componentDidMount() {
    const { materiales, transporte } = this.props.data;
    this.setState({ materiales, transporte });
  }

  onSubmit() {
    const {materiales, transporte} = this.state;
    this.props.onSubmit("window8", {materiales, transporte});
  }

  pushToTableM = () => {
		const { descripcionM, cantidadM, precioUM, precioIVAM, materiales } = this.state;
    if (descripcionM === "" || 
      cantidadM === "" || 
      precioUM === "" || 
      precioIVAM === "") { return;}
    materiales.push({
      descripcion: descripcionM, 
      cantidad: cantidadM, 
      precioU: precioUM, 
      precioIVA: precioIVAM
    });
		this.setState({ 
      materiales, 
      cantidadM: "", 
      precioUM: "", 
      precioIVAM: "",
      descripcionM: ""
    });
  }
  
  deleteFromTableM = index => {
		const { materiales } = this.state;
		if (index !== -1) {
			materiales.splice(index, 1);
			this.setState({ materiales });
		}
  }
  
  pushToTableT = () => {
		const { descripcionT, cantidadT, precioUT, precioIVAT, transporte } = this.state;
    if (descripcionT === "" || 
      cantidadT === "" || 
      precioUT === "" || 
      precioIVAT === "") { return;}
      transporte.push({
        descripcion: descripcionT, 
        cantidad: cantidadT, 
        precioU: precioUT, 
        precioIVA: precioIVAT
      });
		this.setState({ 
      transporte, 
      cantidadT: "", 
      precioUT: "", 
      precioIVAT: "",
      descripcionT: ""
    });
  }
  
  deleteFromTableT = index => {
		const { transporte } = this.state;
		if (index !== -1) {
			transporte.splice(index, 1);
			this.setState({ transporte });
		}
	}

  render() {
    const beneficiarios = this.props.data;
    const { materiales, transporte } = this.state;

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
                name="descripcionM"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.descripcionM}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="lastName">Cantidad</label>
              <input
                type="number"
                className="form-control"
                name="cantidadM"
                onChange={this.onChange}
                value={this.state.cantidadM}
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
                name="precioUM"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.precioUM}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="lastName">Precio con IVA</label>
              <input
                type="text"
                className="form-control"
                name="precioIVAM"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.precioIVAM}
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
        {materiales.length > 0 && 
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
          {materiales.length > 0 && materiales.map((material, i) => (
            <tr key={i}>
              <td>{material.descripcion}</td>
              <td>{material.cantidad}</td>
              <td>{material.precioU}</td>
              <td>{material.precioIVA}</td>
              <td>
                <button className="btn btn-danger" onClick={() => this.deleteFromTableM(i)}>
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>}

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
                name="descripcionT"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.descripcionT}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="firstName">Cantidad</label>
              <input
                type="text"
                className="form-control"
                name="cantidadT"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.cantidadT}
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
                name="precioUT"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.precioUT}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="firstName">Total</label>
              <input
                type="text"
                className="form-control"
                name="precioIVAT"
                minlenght="2"
                required
                onChange={this.onChange}
                value={this.state.precioIVAT}
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
        {transporte.length > 0 && 
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
          {transporte.map((transporte, i) => (
            <tr key={i}>
              <td>{transporte.descripcion}</td>
              <td>{transporte.cantidad}</td>
              <td>{transporte.precioU}</td>
              <td>{transporte.precioIVA}</td>
              <td>
                <button className="btn btn-danger" onClick={() => this.deleteFromTableT(i)}>
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>}

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
