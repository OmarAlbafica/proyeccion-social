import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class Resumen extends Component {
  render() {

    const docentes = [
      {
        nombre: "Juan Perez",
        escuela: "Negocios",
        tipo: "coordinador"
      },
      {
        nombre: "Godinez",
        escuela: "Negocios",
        tipo: "acompañante"
      },
      {
        nombre: "adfaldsfad",
        escuela: "Negocios",
        tipo: "acompañante"
      }
    ];

    const beneficiarios = [
      {
        nombre: "Juan Perez",
        telefono: "823739484",
        correo: "mail@mail.com",
        institucion: "USAID"
      },
      {
        nombre: "Juan Perez",
        telefono: "823739484",
        correo: "mail@mail.com",
        institucion: "USAID"
      },
      {
        nombre: "Juan Perez",
        telefono: "823739484",
        correo: "mail@mail.com",
        institucion: "USAID"
      }
    ];

    const materiales = [
      {
        descripcion: "Me aburri de poner Lorem Ipsums",
        cantidad: "8",
        preciou: "10.2",
        totalConIVA: "10.2"
      },
      {
        descripcion: "Me aburri de poner Lorem Ipsums",
        cantidad: "8",
        preciou: "10.2",
        totalConIVA: "10.2"
      },
      {
        descripcion: "Me aburri de poner Lorem Ipsums",
        cantidad: "8",
        preciou: "10.2",
        totalConIVA: "10.2"
      }
    ]

    const actividades = [
      {
        actividad: "Charla",
        nvisitas: 3,
        ciclo: "01-2019",
        objetivo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam quisquam corrupti vitae tempore. Exercitationem quibusdam quis nemo iure, possimus necessitatibus modi unde quidem sapiente rem quaerat, amet ab maxime."
      },
      {
        actividad: "Charla",
        nvisitas: 3,
        ciclo: "01-2019",
        objetivo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam quisquam corrupti vitae tempore. Exercitationem quibusdam quis nemo iure, possimus necessitatibus modi unde quidem sapiente rem quaerat, amet ab maxime."
      },
      {
        actividad: "Charla",
        nvisitas: 3,
        ciclo: "01-2019",
        objetivo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam quisquam corrupti vitae tempore. Exercitationem quibusdam quis nemo iure, possimus necessitatibus modi unde quidem sapiente rem quaerat, amet ab maxime."
      }
    ]

    const organizaciones = [
      {
        nombre: "Me aburri de poner Lorem Ipsums",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam quisquam corrupti vitae tempore. Exercitationem quibusdam quis nemo iure, possimus necessitatibus modi unde quidem sapiente rem quaerat, amet ab maxime"
      },
      {
        nombre: "Me aburri de poner Lorem Ipsums",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam quisquam corrupti vitae tempore. Exercitationem quibusdam quis nemo iure, possimus necessitatibus modi unde quidem sapiente rem quaerat, amet ab maxime"
      },
      {
        nombre: "Me aburri de poner Lorem Ipsums",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam quisquam corrupti vitae tempore. Exercitationem quibusdam quis nemo iure, possimus necessitatibus modi unde quidem sapiente rem quaerat, amet ab maxime"
      },
      {
        nombre: "Me aburri de poner Lorem Ipsums",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam quisquam corrupti vitae tempore. Exercitationem quibusdam quis nemo iure, possimus necessitatibus modi unde quidem sapiente rem quaerat, amet ab maxime"
      },
    ]

    const actores = [
      {
        nombre: "Juan",
        telefono: "2948429",
        correo: "mail@mail.com",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam quisquam corrupti vitae tempore. Exercitationem quibusdam quis nemo iure, possimus necessitatibus modi unde quidem sapiente rem quaerat, amet ab maxime"
      },
      {
        nombre: "Juan",
        telefono: "2948429",
        correo: "mail@mail.com",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam quisquam corrupti vitae tempore. Exercitationem quibusdam quis nemo iure, possimus necessitatibus modi unde quidem sapiente rem quaerat, amet ab maxime"
      },
      {
        nombre: "Juan",
        telefono: "2948429",
        correo: "mail@mail.com",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam quisquam corrupti vitae tempore. Exercitationem quibusdam quis nemo iure, possimus necessitatibus modi unde quidem sapiente rem quaerat, amet ab maxime"
      }
    ]


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
                <label>Informática Y Ciencias Aplicadas</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card-body">
                <label>2.Escuela:</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <label>Ciencias Aplicadas</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card-body">
                <label>3. Linea de Proyección:</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <label>Desarrollo de TIC</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card-body">
                <label>4. Titulo de Proyección:</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <label>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex laboriosam laudantium impedit temporibus ratione perferendis, atque unde odit quibusdam molestiae saepe quaerat? Assumenda blanditiis, laudantium tempore doloribus facilis numquam voluptas!</label>
              </div>
            </div>


            <div className="col-md-12">
              <div className="card-body">
                <label>5. Breve descripción del perfil de los beneficiarios Directos:</label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card-body">
                <label>Descripción de la actividad...</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card-body">
                <label>6. Cantidad de Beneficiarios Directos:</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <label>45</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card-body">
                <label>7. Duración en Ciclos:</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <label>2</label>
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
                    <tr>
                      <td>Arquitectura</td>
                    </tr>
                    <tr>
                      <td>Comunicaciones</td>
                    </tr>
                    <tr>
                      <td>Turismo</td>
                    </tr>
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
                  <tr>
                    <th />
                    <th />
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>F</td>
                    <td>15</td>
                  </tr>
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
                {docentes.map((beneficiario, i) => (
                  <tr key={i}>
                    <td>{beneficiario.nombre}</td>
                    <td>{beneficiario.escuela}</td>
                    <td>{beneficiario.tipo}</td>
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
                  {beneficiarios.map((beneficiario, i) => (
                    <tr key={i}>
                      <td>{beneficiario.nombre}</td>
                      <td>{beneficiario.telefono}</td>
                      <td>{beneficiario.correo}</td>
                      <td>{beneficiario.institucion}</td>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sapiente ducimus voluptas, quis illo voluptates libero quibusdam animi delectus? Dolore voluptatum sed optio suscipit beatae accusantium exercitationem itaque illum eligendi.
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
                </tr>
              </thead>
              <tbody>
                {actividades.map((beneficiario, i) => (
                  <tr key={i}>
                    <td>{beneficiario.actividad}</td>
                    <td>{beneficiario.nvisitas}</td>
                    <td>{beneficiario.ciclo}</td>
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
                {materiales.map((beneficiario, i) => (
                  <tr key={i}>
                    <td>{beneficiario.descripcion}</td>
                    <td>{beneficiario.cantidad}</td>
                    <td>{beneficiario.preciou}</td>
                    <td>{beneficiario.totalConIVA}</td>
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
                {organizaciones.map((beneficiario, i) => (
                  <tr key={i}>
                    <td>{beneficiario.nombre}</td>
                    <td>{beneficiario.descripcion}</td>
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
                  <th>Descripcion</th>
                </tr>
              </thead>
              <tbody>
                {actores.map((beneficiario, i) => (
                  <tr key={i}>
                    <td>{beneficiario.nombre}</td>
                    <td>{beneficiario.telefono}</td>
                    <td>{beneficiario.correo}</td>
                    <td>{beneficiario.descripcion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="form-group">
          <Link to="/" className="btn btn-primary btn-block">
            Enviar Perfil
          </Link>
        </div>
      </div >



    )
  }
}
