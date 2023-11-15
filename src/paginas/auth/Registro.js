import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';


const Registro = () => {
  const [Usuario, setUsuario] = useState({
    idTipoDocumento : '',
    numeroDocumento : '',
    email : '',
    nombre :'',
    password : '',
    nombreUsuario : '',
    confirmar:''
  })

  const {idTipoDocumento,numeroDocumento,email,nombre,password,confirmar,nombreUsuario} = Usuario;

  const onChange = (e) =>{
    setUsuario(e.target.value);

    setUsuario({ ...Usuario, [e.target.name]:e.target.value});
  }

  return (
    <div className="hold-transition register-page">
      <div className="register-box">
        <div className="register-logo">
          <Link to={"#"}>
            <b>Bienvenido</b> Usuario
          </Link>
        </div>
        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Registro</p>
            <form action="../../index.html" method="post">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre completo"
                  id="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre de Usuario"
                  id="nombreUsuario"
                  name="nombreUsuario"
                  value={nombreUsuario}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="input-group mb-3">
                <select
                  className="form-control"
                  value={idTipoDocumento}
                  id="idTipoDocumento"
                  name="idTipoDocumento"
                  onChange={onChange}
                  required
                  >
                  <option value="">Selecciona un tipo de documento</option>
                  <option value="5">Cédula</option>
                  <option value="6">Tarjeta</option>
                  <option value="7">Pasaporte</option>
                  </select>
              </div>

              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Numero de documento"
                  id="numeroDocumento"
                  name="numeroDocumento"
                  value={numeroDocumento}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Repite tu contraseña"
                  id="confirmar"
                  name="confirmar"
                  value={confirmar}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="terms"
                      defaultValue="agree"
                    />
                    <label htmlFor="agreeTerms">
                      Acepto los <Link to={"#"}>Terminos y Condiciones</Link>
                    </label>
                  </div>
                </div>
              </div>
            </form>
            <div className="social-auth-links text-center">
              <Link to={"#"}className="btn btn-block btn-primary">
                Registrarme
              </Link>
            </div>
            <Link to={"/"} className="text-center">
              Estoy Registrado
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
