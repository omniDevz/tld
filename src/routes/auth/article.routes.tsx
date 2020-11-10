import Update from '../../pages/Authorized/Article/pages/Update';
import New from '../../pages/Authorized/Article/pages/New';
import Article from '../../pages/Authorized/Article';

const ArticleRoutes = [
  {
    path: '/article/update/:articleId',
    component: Update,
  },
  {
    path: '/article/new',
    component: New,
  },
  {
    path: '/article',
    component: Article,
  },
];

export default ArticleRoutes;
