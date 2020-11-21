import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Account from '../pages/Authorized/Account';
import ArticlePage from '../pages/Authorized/Article';
import NotFound from '../pages/NotFound';

import Author from './auth/author.routes';
import Course from './auth/course.routes';
import Record from './auth/record.routes';
import Article from './auth/article.routes';
import Student from './auth/student.routes';
import Classes from './auth/classes.routes';
import Scheduling from './auth/scheduling.routes';
import Maintainer from './auth/maintainer.routes';
import ConsultingType from './auth/consultingType.routes';
import TransmissionNotification from './auth/transmissionNotification.routes';

const AuthRoutes: React.FC = () => {
  const routes = [
    {
      path: '/',
      component: ArticlePage,
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
    TransmissionNotification,
    Classes,
    Course,
    Record,
    Scheduling
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
