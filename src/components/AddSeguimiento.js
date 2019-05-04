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
          <div className="col-md-3">
            <div className="form-group">
              <label>N de estudiantes:</label>
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
              <label>N de Beneficiarios:</label>
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

          <div className="col-md-12">
            <div className="form-group">
              <label>Descripción:</label>
              <textarea className="form-control" rows="10"></textarea>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-group">
            <h3>Incluir Pruebas</h3>
            <input type="file"
              id="avatar" name="avatar"
              accept="image/png, image/jpeg" /><br /><br />
            <input type="file"
              id="avatar" name="avatar"
              accept="image/png, image/jpeg" /><br /><br />
            <input type="file"
              id="avatar" name="avatar"
              accept="image/png, image/jpeg" /><br /><br />
          </div>
        </div>


        <div className="form-group">
          <div className="col-md-4 float-right">
            <button
              onClick={this.enviar}
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
            <Link to="/perfiles/3453453236/solicitudes" className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Volver atrás
            </Link>
          </div>
        </div>
        <br />
        <h2>Seguimiento</h2>
        <br />
        <div className="card">
          <div className="card-header">Añadir Datos</div>
          {ejemplo.length <= 0 ? añadirBeneficiario : (<div className="card-body">
            {añadirBeneficiario}
            <br /><br /><br /><br />

            <div className="card">
              <div className="card-body">
                <Link
                  to={`/client/6`}
                  className="btn btn-secondary btn-sm"
                >
                  <i className="fas fa-arrow-circle-right" />
                  <pre></pre>
                  Editar
            </Link> {" "}
                <Link
                  to={`/client/9`}
                  className="btn btn-danger btn-sm"
                >
                  <i className="fas fa-angle-double-down"></i>
                  <pre></pre>
                  Eliminar
                    </Link>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card-body">
                      <label>Numero:</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <label>1</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card-body">
                      <label>Numero de estudiantes:</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <label>45</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card-body">
                      <label>N de beneficiarios</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <label>3</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card-body">
                      <label>Descripción</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <label>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum sequi eos vitae quo enim excepturi distinctio sit voluptates unde eum nostrum modi dolor ratione corrupti cumque autem, quod fuga labore?</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card-body">
                      <label>Pruebas</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <a href="#">Prueba 1</a> {" "}
                      <a href="#">Prueba 2</a> {" "}
                      <a href="#">Prueba 3</a> {" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br /><br />

            <div className="card">
              <div className="card-body">
                <Link
                  to={`/client/6`}
                  className="btn btn-secondary btn-sm"
                >
                  <i className="fas fa-arrow-circle-right" />
                  <pre></pre>
                  Editar
            </Link> {" "}
                <Link
                  to={`/client/9`}
                  className="btn btn-danger btn-sm"
                >
                  <i className="fas fa-angle-double-down"></i>
                  <pre></pre>
                  Eliminar
                    </Link>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card-body">
                      <label>Numero:</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <label>1</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card-body">
                      <label>Numero de estudiantes:</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <label>45</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card-body">
                      <label>N de beneficiarios</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <label>3</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card-body">
                      <label>Descripción</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <label>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum sequi eos vitae quo enim excepturi distinctio sit voluptates unde eum nostrum modi dolor ratione corrupti cumque autem, quod fuga labore?</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card-body">
                      <label>Pruebas</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <a href="#">Prueba 1</a> {" "}
                      <a href="#">Prueba 2</a> {" "}
                      <a href="#">Prueba 3</a> {" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>




            <div className="form-group">
              <Link to="/perfiles/3453453236/solicitudes" className="btn btn-link">
                <i className="fas fa-arrow-circle-left" /> Volver atrás
            </Link>
            </div>
          </div>)}
        </div>
      </div>
    )
  }
}
