import React, { useState, useEffect } from 'react'
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainer';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import APIInvoke from '../../utils/APIInvoke';
import swal from "sweetalert";
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

const ProyectosEditar = () => {

    const navigate = useNavigate();
    const {idproyecto} = useParams();
    let arreglo = idproyecto.split('@');
    const idP = arreglo[0];
    const nombreProyecto = arreglo[1];

    const [proyectos, setProyectos] = useState({
        nombre: nombreProyecto
    });

    const {nombre} = proyectos;

    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    Titulo={'Edición del Proyecto'}
                    breadcrumb1={'Listado del Proyecto'}
                    breadcrumb2={'Edición'}
                    ruta={'/home'}
                />

                <section className="content">
                    <div className='container-fluid'>
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title"><Link to={"/Proyectos-Registro"} className="btn btn-block btn-primary">Crear Usuario</Link></h3>
                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                        <i className="fas fa-minus" />
                                    </button>
                                    <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">

                                Start creating your amazing application!
                                
                            </div>
                            <div className="card-footer">
                                Footer
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Responsive Hover Table</h3>
                                        <div className="card-tools">
                                            <div className="input-group input-group-sm" style={{ width: 150 }}>
                                                <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                                                <div className="input-group-append">
                                                    <button type="submit" className="btn btn-default">
                                                        <i className="fas fa-search" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body table-responsive p-0">
                                        <table className="table table-hover text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th >Usuario</th>
                                                    <th>Tipo Documento</th>
                                                    <th>Numero Documento</th>
                                                    <th>Nombre</th>
                                                    <th>Email</th>
                                                    <th>Password</th>
                                                    <th>Opciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    proyectos.map(
                                                        item =>
                                                            <tr key={item.id}>
                                                                <td>{item.id}</td>
                                                                <td>{item.nombreUsuario}</td>
                                                                <td>{item.idTipoDocumento.tipo}</td>
                                                                <td>{item.numeroDocumento}</td>
                                                                <td>{item.nombre}</td>
                                                                <td>{item.email}</td>
                                                                <td>{item.password}</td>
                                                                <td>
                                                                    
                                                                    <link to ={`/ProyectosEditar/${item.id}@${item.nombreUsuario}`}className='btn btn-sm btn-primary'>Editar</link>&nbsp;&nbsp;

                                                                </td>
                                                            </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div >
    );

}

export default ProyectosEditar;