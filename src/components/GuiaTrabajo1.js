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
    const { id, titulo, fecha, estudiantesFemeninos, estudiantesMasculinos } = this.props.data;
    this.setState({ id, titulo, fecha, estudiantesFemeninos, estudiantesMasculinos })
  }

  onSubmit = e => {
    e.preventDefault();
    const { id, titulo, fecha, estudiantesFemeninos, estudiantesMasculinos } = this.state;
    if (id === "" || titulo === "" || fecha === "" || estudiantesFemeninos === "" || estudiantesMasculinos === "") {
      this.setState({ error: "Por favor llenar todos los campos" });
    } else {
      this.props.onSubmit({ id, titulo, fecha, estudiantesFemeninos, estudiantesMasculinos });
      this.props.pagina(2);
    }
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
        <h3>Información de Guia de trabajo</h3>

        <div className="form-group">
          <label>Nombre de la guía:</label>
          <input
            type="text"
            className="form-control"
            name="id"
            minlenght="2"
            required
            onChange={this.onChange}
            value={""}
          />
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Fecha:</label>
              <input
                type="date"
                className="form-control"
                name="id"
                minlenght="2"
                required
                onChange={this.onChange}
                value={""}
              />
            </div>

            <div className="form-group">
              <label>Lugar:</label>
              <input
                type="text"
                className="form-control"
                name="id"
                minlenght="2"
                required
                onChange={this.onChange}
                value={""}
              />
            </div>

          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Hora de Inicio:</label>
              <input
                type="time"
                className="form-control"
                name="id"
                minlenght="2"
                required
                onChange={this.onChange}
                value={""}
              />
            </div>
            <div className="form-group">
              <label>Hora Final:</label>
              <input
                type="time"
                className="form-control"
                name="id"
                minlenght="2"
                required
                onChange={this.onChange}
                value={""}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label>Tema:</label>
              <input
                type="text"
                className="form-control"
                name="id"
                minlenght="2"
                required
                onChange={this.onChange}
                value={""}
              />
            </div>
            <div className="form-group">
              <label>Objetivo:</label>
              <input
                type="text"
                className="form-control"
                name="id"
                minlenght="2"
                required
                onChange={this.onChange}
                value={""}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label>Contenido:</label>
              <input
                type="text"
                className="form-control"
                name="id"
                minlenght="2"
                required
                onChange={this.onChange}
                value={""}
              />
            </div>
            <div className="form-group">
              <label>Herramientas:</label>
              <input
                type="text"
                className="form-control"
                name="id"
                minlenght="2"
                required
                onChange={this.onChange}
                value={""}
              />
            </div>
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
        <h2>Añadir nueva guia de Trabajo</h2>
        <br />
        <div className="card">
          <div className="card-header">Añadir Datos de Beneficiarios</div>
          {ejemplo.length <= 0 ? añadirBeneficiario : (<div className="card-body">
            {añadirBeneficiario}
            <br /><br /><br /><br />

            <h2>Nombre Guia de Investigación</h2>
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
                  <label>Fecha:</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <label>12/12/1998</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card-body">
                  <label>Lugar:</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <label>SDLFKJASDF;KJ ASD;FJASD;FJ</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card-body">
                  <label>Hora de Inicio</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <label>08:00</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card-body">
                  <label>Hora de finalización</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <label>09:30</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card-body">
                  <label>Tema</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <label>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste soluta omnis asperiores ipsam numquam labore amet ea ipsum. Veritatis vero quibusdam quaerat culpa illum officiis omnis esse veniam numquam? Voluptas?</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card-body">
                  <label>Objetivo</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <label>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, excepturi qui eaque incidunt praesentium minima rerum beatae sunt velit repellendus atque magnam suscipit magni. Asperiores facere possimus sint omnis aut.</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card-body">
                  <label>Contenido</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <label>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo sunt sapiente vel tenetur eos fuga commodi itaque cumque ad fugiat inventore, quis incidunt nobis soluta, molestias unde quidem beatae dicta.</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card-body">
                  <label>Herramientas</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <label>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error vero perspiciatis veritatis repudiandae unde sint fugiat, odio ducimus, minima nihil corporis tempora ullam suscipit expedita fugit ipsam consequatur ipsa doloribus?</label>
                </div>
              </div>

            </div>

            <h2>Nombre Guia de Investigación</h2>
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
                  <label>Fecha:</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <label>12/12/1998</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card-body">
                  <label>Lugar:</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <label>SDLFKJASDF;KJ ASD;FJASD;FJ</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card-body">
                  <label>Hora de Inicio</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <label>08:00</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card-body">
                  <label>Hora de finalización</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <label>09:30</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card-body">
                  <label>Tema</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <label>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste soluta omnis asperiores ipsam numquam labore amet ea ipsum. Veritatis vero quibusdam quaerat culpa illum officiis omnis esse veniam numquam? Voluptas?</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card-body">
                  <label>Objetivo</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <label>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, excepturi qui eaque incidunt praesentium minima rerum beatae sunt velit repellendus atque magnam suscipit magni. Asperiores facere possimus sint omnis aut.</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card-body">
                  <label>Contenido</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <label>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo sunt sapiente vel tenetur eos fuga commodi itaque cumque ad fugiat inventore, quis incidunt nobis soluta, molestias unde quidem beatae dicta.</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card-body">
                  <label>Herramientas</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <label>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error vero perspiciatis veritatis repudiandae unde sint fugiat, odio ducimus, minima nihil corporis tempora ullam suscipit expedita fugit ipsam consequatur ipsa doloribus?</label>
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
