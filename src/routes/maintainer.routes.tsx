import Update from '../pages/Authorized/Maintainer/pages/Update';
import New from '../pages/Authorized/Maintainer/pages/New';
import Maintainer from '../pages/Authorized/Maintainer';

const MaintainerRoutes = [
  {
    path: '/maintainer/update/:maintainerId/:levelAccessMaintainer',
    component: Update,
  },
  {
    path: '/maintainer/new',
    component: New,
  },
  {
    path: '/maintainer',
    component: Maintainer,
  },
];

export default MaintainerRoutes;
