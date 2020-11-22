import Scheduling from '../../pages/Authorized/Scheduling';
import SchedulingNew from '../../pages/Authorized/Scheduling/pages/New';

const SchedulingRoutes = [
  {
    path: '/scheduling/new/:date',
    component: SchedulingNew,
  },
  {
    path: '/scheduling',
    component: Scheduling,
  },
];

export default SchedulingRoutes;
