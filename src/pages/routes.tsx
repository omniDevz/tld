import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Login';
import RecoveryPasswordCode from './RecoveryPassword/pages/Code';
import RecoveryPasswordNew from './RecoveryPassword/pages/New';
import RecoveryPassword from './RecoveryPassword';

import AuthorizedAuthorUpdate from './Authorized/Author/pages/Update';
import AuthorizedAuthorNew from './Authorized/Author/pages/New';
import AuthorizedAuthor from './Authorized/Author';

import AuthorizedArticleUpdate from './Authorized/Article/pages/Update';
import AuthorizedArticleNew from './Authorized/Article/pages/New';
import AuthorizedArticle from './Authorized/Article';

import NotFound from './NotFound';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/recoveryPassword/Code" component={RecoveryPasswordCode} />
        <Route path="/recoveryPassword/New" component={RecoveryPasswordNew} />
        <Route path="/recoveryPassword" component={RecoveryPassword} />

        <Route path="/authorized/author/update" component={AuthorizedAuthorUpdate} />
        <Route path="/authorized/author/new" component={AuthorizedAuthorNew} />
        <Route path="/authorized/author" component={AuthorizedAuthor} />

        <Route path="/authorized/article/update" component={AuthorizedArticleUpdate} />
        <Route path="/authorized/article/new" component={AuthorizedArticleNew} />
        <Route path="/authorized/article" component={AuthorizedArticle} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
