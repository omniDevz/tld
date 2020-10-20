import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Account from '../pages/Authorized/Account';
import NotFound from '../pages/NotFound';

import Author from './author.routes';
import Article from './article.routes';
import Student from './student.routes';
import Maintainer from './maintainer.routes';
import ConsultingType from './consultingType.routes';
import TransmissionNotification from './transmissionNotification.routes';

const AuthRoutes: React.FC = () => {
  const routes = [
    {
      path: '/',
      component: Account,
    },
    {
      path: '/account',
      component: Account,
    },
  ].concat(
    Author,
    Article,
    Maintainer,
    Student,
    ConsultingType,
    TransmissionNotification
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route path={`/home`}>
          <Redirect to="/" />
        </Route>

        {routes.map((entry) => (
          <Route key={entry.path} exact {...entry} />
        ))}

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default AuthRoutes;
