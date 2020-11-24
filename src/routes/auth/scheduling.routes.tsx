import Scheduling from '../../pages/Authorized/Scheduling';
import SchedulingNew from '../../pages/Authorized/Scheduling/pages/New';
import SchedulingEdit from '../../pages/Authorized/Scheduling/pages/Edit';

const SchedulingRoutes = [
  {
    path: '/scheduling/new/:date',
    component: SchedulingNew,
  },
  {
    path: '/scheduling/edit/:idScheduling',
    component: SchedulingEdit,
  },
  {
    path: '/scheduling',
    component: Scheduling,
  },
];

export default SchedulingRoutes;
