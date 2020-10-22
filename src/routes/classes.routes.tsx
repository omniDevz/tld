import Classes from '../pages/Authorized/Classes';
import New from '../pages/Authorized/Classes/pages/New';
import Detail from '../pages/Authorized/Classes/pages/Detail';
import Update from '../pages/Authorized/Classes/pages/Update';

const ClassRouter = [
  {
    path: '/classes/update/:idClass',
    component: Update,
  },
  {
    path: '/classes/new',
    component: New,
  },
  {
    path: '/classes/:idClass',
    component: Detail,
  },
  {
    path: '/classes',
    component: Classes,
  },
];

export default ClassRouter;
