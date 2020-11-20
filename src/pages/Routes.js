import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home/Home'
import Cadastrar from './CadastrarCliente/cadastrocliente'
import ConsultarAgen from './ConsultarAgen/consultaragen'
import Serviços from './Serviços/servicos'
import Agendar from './Agendar/Agendar';
import MenuFunc from './MenuFuncionario/menufunc';
import MenuCliente from './MenuCliente/menucliente';
import Login from './Login/login';

export default function Routes() {

    return(
        <BrowserRouter>
          <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/Login" exact={true} component={Login} />
              <Route path="/Cadastrar" exact={true} component={Cadastrar} />
              <Route path="/Consultar" exact={true} component={ConsultarAgen} />
              <Route path="/Serviços" exact={true} component={Serviços} />
              <Route path="/MenuCliente" exact={true} component={MenuCliente} />
              <Route path="/MenuFuncionario" exact={true} component={MenuFunc} />
              <Route path="/Agendar" exact={true} component={Agendar} />
          </Switch>
        </BrowserRouter>
    )
}