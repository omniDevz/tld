import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import RecoveryPassword from '../pages/RecoveryPassword';
import RecoveryPasswordCode from '../pages/RecoveryPassword/pages/Code';
import RecoveryPasswordNew from '../pages/RecoveryPassword/pages/New';

import FinallyRegister from '../pages/Authorized/FinallyRegister';

import NotFound from '../pages/NotFound';

function LogoffRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/recoveryPassword/code" component={RecoveryPasswordCode} />
        <Route path="/recoveryPassword/new" component={RecoveryPasswordNew} />
        <Route path="/recoveryPassword" component={RecoveryPassword} />
        <Route path="/finallyRegister" component={FinallyRegister} />

        <Route path="/home">
          <Redirect to="/" />
        </Route>
        <Route path="/login">
          <Redirect to="/" />
        </Route>

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default LogoffRoutes;
