import React, { Component } from 'react';


export default class Resumen extends Component {
  render() {

    const {window1,window2,window3,window4,window5,window6,window7,window8,window9} = this.props.data;

    return (
      <div className="container">
        <h1>Revisión</h1>
        <button className="btn btn-link" onClick={() => this.props.pagina(9)}>
          <i className="fas fa-arrow-circle-left" /> Volver a modificar
        </button>
        <div className="card">
          <br />
          <h2 className="h2" style={{ marginLeft: "20px" }}>Información General:</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card-body">
                <label>1. Facultad:</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <label>{window1.facultad}</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card-body">
                <label>2. Escuela:</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <label>{window1.escuela}</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card-body">
                <label>3. Linea de Proyeccion</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <label>{window1.lineaProyeccion}</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card-body">
                <label>4. Titulo de Proyección:</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <label>{window1.titulo}</label>
              </div>
            </div>


            <div className="col-md-12">
              <div className="card-body">
                <label>5. Breve descripción del perfil de los beneficiarios Directos:</label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card-body">
                <label>{window1.descripcionBeneficiarios}</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card-body">
                <label>6. Cantidad de Beneficiarios Directos:</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <label>{window1.cantidadBeneficiarios}</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card-body">
                <label>7. Duración en Ciclos:</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <label>{window1.duracionCiclos}</label>
              </div>
            </div>

            <div className="col-md-12">
              <div className="card-body">
                <label>8. Asignaturas que desarrollarán el proyecto o actividad de proyección social:</label>
              </div>
            </div>
            <div className="col-md-5 text-center">
              <div className="card-body">
                <table className=" table table-striped">
                  <thead>
                    <tr>
                      <th>Asignaturas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {window2.asignaturas.length > 0 && 
                    window2.asignaturas.map((asignatura, i) => 
                      <tr key={i}>
                        <td>{asignatura}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-md-12">
              <div className="card-body">
                <label>9. Numero de estudiantes que intervienen:</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body" style={{ marginLeft: "20px" }}>
                <table className="table">
                  <tbody>
                    <tr>
                      <th />
                      <th />
                    </tr>
                    <tr>
                      <td>M</td>
                      <td>{window2.alumnosM}</td>
                    </tr>
                    <tr>
                      <td>F</td>
                      <td>{window2.alumnosF}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="card">
          <br />
          <h2 className="h2" style={{ marginLeft: "20px" }}>Información de responsables del proyecto o actividad de Proyección social:</h2>
          <div className="card-body">
            <label>10. Nombre del docente coordinador y acompañantes</label>
          </div>
          <div className="card-body" style={{ marginLeft: "20px" }}>
            <table className=" table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Nombre</th>
                  <th>Escuela</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {window3.docentes.length > 0 && window3.docentes.map((docente, i) => (
                  <tr key={i}>
                    <td>{docente.nombre}</td>
                    <td>{docente.escuela}</td>
                    <td>{docente.tipo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card">
            <br />
            <h2 className="h2" style={{ marginLeft: "20px" }}>Información de contacto de Beneficiario</h2>
            <div className="card-body">
              <label>11. Nombre del representante del beneficiarios o informante clave:</label>
            </div>
            <div className="card-body" style={{ marginLeft: "20px" }}>
              <table className=" table table-striped">
                <thead className="thead-inverse">
                  <tr>
                    <th>Nombre</th>
                    <th>Telefono</th>
                    <th>Correo</th>
                    <th>Institución</th>
                  </tr>
                </thead>
                <tbody>
                  {window4.representantes.length > 0 && window4.representantes.map((representante, i) => (
                    <tr key={i}>
                      <td>{representante.correoRepresentante}</td>
                      <td>{representante.telefonoRepresentante}</td>
                      <td>{representante.correoRepresentante}</td>
                      <td>{representante.institucion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div >
        </div>

        <div className="card">
          <br />
          <h2 className="h2" style={{ marginLeft: "20px" }}>Justificación del proyecto o Actividad de Proyección Social</h2>

          <div className="card-body">
            12. Justifacacion
          </div>
          <br />
          <div className="card-body">
            {window5.justificacion}
          </div>
        </div>

        <div className="card">
          <br />
          <h2 className="h2" style={{ marginLeft: "20px" }}>Descripción de Objetivos</h2>
          <div className="card-body">
            13. Objetivos
          </div>
          <div className="card-body" style={{ marginLeft: "20px" }}>
            <table className=" table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Descripción</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {window6.objetivos.length > 0 && window6.objetivos.map((objetivo, i) => (
                  <tr key={i}>
                    <td>{objetivo.descripcion}</td>
                    <td>{objetivo.tipo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <br />
          <h2 className="h2" style={{ marginLeft: "20px" }}>Descripción de acciones a Ejecutar</h2>
          <div className="card-body">
            14. Actividades
          </div>
          <div className="card-body" style={{ marginLeft: "20px" }}>
            <table className=" table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Actividad</th>
                  <th>N de Visitas</th>
                  <th>Ciclo</th>
                  <th>Objetivo</th>
                </tr>
              </thead>
              <tbody>
                {window7.actividades.length > 0 && window7.actividades.map((actividad, i) => (
                  <tr key={i}>
                    <td>{actividad.actividad}</td>
                    <td>{actividad.nVisitas}</td>
                    <td>{actividad.ciclo}</td>
                    <td>{actividad.objetivo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <br />
          <h2 className="h2" style={{ marginLeft: "20px" }}>Descripción de Materiales a Utilizar</h2>
          <div className="card-body">
            15. Materiales
          </div>
          <div className="card-body" style={{ marginLeft: "20px" }}>
            <table className=" table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Descripcion</th>
                  <th>Cantidad</th>
                  <th>Precio Unitario</th>
                  <th>Total con IVA</th>
                </tr>
              </thead>
              <tbody>
                {window8.materiales.length > 0 && window8.materiales.map((material, i) => (
                  <tr key={i}>
                    <td>{material.descripcion}</td>
                    <td>{material.cantidad}</td>
                    <td>{material.precioU}</td>
                    <td>{material.precioIVA}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>

        <div className="card">
          <br />
          <h2 className="h2" style={{ marginLeft: "20px" }}>Información Complementaria</h2>
          <div className="card-body">
            16. Organizaciones Aliadas
          </div>
          <div className="card-body" style={{ marginLeft: "20px" }}>
            <table className=" table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                </tr>
              </thead>
              <tbody>
                {window9.organizacionesAliadas.length > 0 && window9.organizacionesAliadas.map((org, i) => (
                  <tr key={i}>
                    <td>{org.nombre}</td>
                    <td>{org.descripcion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <br/><br/>

          <div className="card-body">
          16.2) Transporte
          </div>
          <div className="card-body" style={{ marginLeft: "20px" }}>
            <table className=" table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Cantidad</th>
                  <th>Descripcion</th>
                  <th>Precio Unidad</th>
                  <th>Precio Con IVA</th>
                </tr>
              </thead>
              <tbody>
                {window8.transporte.length > 0 && window8.transporte.map((transporte, i) => (
                  <tr key={i}>
                    <td>{transporte.cantidad}</td>
                    <td>{transporte.descripcion}</td>
                    <td>{transporte.precioU}</td>
                    <td>{transporte.precioIVA}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card-body">
            17. Actores clave
          </div>
          <div className="card-body">
            <table className=" table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Nombre</th>
                  <th>Telefono</th>
                  <th>Correo</th>
                </tr>
              </thead>
              <tbody>
                {window9.actoresClave.length > 0 && window9.actoresClave.map((actor, i) => (
                  <tr key={i}>
                    <td>{actor.nombre}</td>
                    <td>{actor.telefono}</td>
                    <td>{actor.correo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-block" onClick={this.props.onSubmit}>
            Enviar Perfil
          </button>
        </div>
      </div >



    )
  }
}
