import React, {Fragment} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./paginas/auth/Login";
import Registro from "./paginas/auth/Registro";


function App() {


  return (
    <Fragment> 
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/Registro" exact element={<Registro/>}/>
        </Routes>
      </Router>
    </Fragment>/* actua como un div */
  );
}

export default App;
