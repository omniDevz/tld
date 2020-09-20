import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Login';
import RecoveryPasswordCode from './RecoveryPassword/pages/Code';
import RecoveryPasswordNew from './RecoveryPassword/pages/New';
import RecoveryPassword from './RecoveryPassword';

import AuthorizedFinallyRegister from './Authorized/FinallyRegister';
import AuthorizedAccount from './Authorized/Account';

import AuthorizedAuthorUpdate from './Authorized/Author/pages/Update';
import AuthorizedAuthorNew from './Authorized/Author/pages/New';
import AuthorizedAuthor from './Authorized/Author';

import AuthorizedArticleUpdate from './Authorized/Article/pages/Update';
import AuthorizedArticleNew from './Authorized/Article/pages/New';
import AuthorizedArticle from './Authorized/Article';

import AuthorizedMaintainerUpdate from './Authorized/Maintainer/pages/Update';
import AuthorizedMaintainerNew from './Authorized/Maintainer/pages/New';
import AuthorizedMaintainer from './Authorized/Maintainer';

import NotFound from './NotFound';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/recoveryPassword/Code" component={RecoveryPasswordCode} />
        <Route path="/recoveryPassword/New" component={RecoveryPasswordNew} />
        <Route path="/recoveryPassword" component={RecoveryPassword} />

        <Route
          path="/authorized/finallyRegister"
          component={AuthorizedFinallyRegister}
        />
        <Route path="/authorized/account" component={AuthorizedAccount} />

        <Route
          path="/authorized/author/update/:authorId"
          component={AuthorizedAuthorUpdate}
        />
        <Route path="/authorized/author/new" component={AuthorizedAuthorNew} />
        <Route path="/authorized/author" component={AuthorizedAuthor} />

        <Route
          path="/authorized/article/update"
          component={AuthorizedArticleUpdate}
        />
        <Route
          path="/authorized/article/new"
          component={AuthorizedArticleNew}
        />
        <Route path="/authorized/article" component={AuthorizedArticle} />

        <Route
          path="/authorized/maintainer/update/:maintainerId"
          component={AuthorizedMaintainerUpdate}
        />
        <Route
          path="/authorized/maintainer/new"
          component={AuthorizedMaintainerNew}
        />
        <Route path="/authorized/maintainer" component={AuthorizedMaintainer} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
