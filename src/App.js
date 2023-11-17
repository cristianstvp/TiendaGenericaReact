import React, {Fragment} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./paginas/auth/Login";
import Registro from "./paginas/auth/Registro";
import Home from "./paginas/Home";
import ProyectosAdmin from "./paginas/Proyectos/ProyectosAdmin";



function App() {


  return (
    <Fragment> 
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/Registro" exact element={<Registro/>}/>
          <Route path="/home" exact element={<Home/>}/>
          <Route path="/Proyectos-Admin" exact element={<ProyectosAdmin/>}/>
        </Routes>
      </Router>
    </Fragment>/* actua como un div */
  );
}

export default App;
