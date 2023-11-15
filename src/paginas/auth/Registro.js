import React from "react";
import {Link} from 'react-router-dom';


const Registro = () => {
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
                  placeholder="Full name"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Retype password"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
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
