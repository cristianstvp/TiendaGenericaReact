import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from'react-router-dom';
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";


const Login = () => {

  //para redireccionar un componente a otro
  const navigate = useNavigate();

  //definimos el estado inicial
  const [usuario, setUsuario] = useState({nombreUsuario: '',password: ''});

  const { nombreUsuario, password } = usuario;

  const onChange = (e) => {
    setUsuario(e.target.value);
    setUsuario({...usuario, [e.target.name]: e.target.value});
  }

  const onSubmit = (e) => {
    console.log("onsubmit");
    e.preventDefault();
    iniciarSesion();
  }

  const iniciarSesion = async () => {
    if (password.length < 2) {
      const msg = "the pw is too short";
      swal({
        title: 'Wrong',
        text: msg,
        icon: 'error',
        buttons: {
          confirm: {
            text: 'Ok',
            value: true,
            visible: true,
            className: 'btn btn-danger',
            closeModal: true
          }
        }
      });
    }else{
      const data = {
        nombreUsuario: usuario.nombreUsuario,
        password: usuario.password
      }
      console.log(data);
      const response = await APIInvoke.invokePOST(`/api/usuarios/loginclient`,data);
      console.log(response);
      if (response != 1) {
        const msg = "No fue posible";
        swal({
          title: 'Wrong',
          text: msg,
          icon: 'error',
          buttons: {
            confirm: {
              text: 'Ok',
              value: true,
              visible: true,
              className: 'btn btn-danger',
              closeModal: true
            }
          }
        });
      }
      
    }
  }

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <Link to={"#"}><b>Iniciar</b>Secion</Link>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Bienvenido</p>

            <form onSubmit={onSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre de Usuario"
                  id="emnombreUsuarioail"
                  name="nombreUsuario"
                  value={nombreUsuario}
                  onChange={onChange}
                  required
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
                  placeholder="Contraseña"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="social-auth-links text-center mb-3">
                <button type='submit' className="btn btn-block btn-primary"> Ingresar</button>
                <Link to={"/Registro"} className="btn btn-block btn-danger">Registrarse</Link>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;