import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {NavLink, Switch, Route, BrowseRouter} from 'react-router-dom';
import Menu from './Components/Menu';
import Eventos from './Components/Eventos/Eventos';
import Bottom from './Components/Bottom';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Cotizar from './Components/Cotizar/Cotizar';
import Agenda from './Components/Agenda';
import Proveedores from './Components/Proveedores';
import Perfil from './Components/Perfil';
import Configuracion from './Components/Configuracion';
import Registrarse from './Components/SignUp'
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Menu>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/Registrarse' component={Registrarse}></Route>
          <Route exact path='/MisEventos' component={Eventos}></Route>
          <Route exact path='/Cotizar' component= {Cotizar}></Route>
          <Route exact path='/MiAgenda' component= {Agenda}></Route>
          <Route exact path='/Proveedores' component= {Proveedores}></Route>
          <Route exact path='/MiPerfil' component= {Perfil}></Route>
          <Route exact path='/Configuracion' component= {Configuracion}></Route>

          </Menu>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
