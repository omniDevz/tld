import Update from '../pages/Authorized/Author/pages/Update';
import New from '../pages/Authorized/Author/pages/New';
import Author from '../pages/Authorized/Author';

const AuthorRoutes = [
  {
    component: Update,
    path: '/author/update/:authorId',
  },
  {
    component: New,
    path: '/author/new',
  },
  {
    component: Author,
    path: '/author',
  },
];

export default AuthorRoutes;
