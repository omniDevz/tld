import Record from '../../pages/Authorized/Record';
import RecordStudent from '../../pages/Authorized/Record/pages/Student';
import RecordRevenue from '../../pages/Authorized/Record/pages/Revenue';
import RecordScheduling from '../../pages/Authorized/Record/pages/Scheduling';

const RecordRoutes = [
  {
    path: '/record/scheduling',
    component: RecordScheduling,
  },
  {
    path: '/record/revenue',
    component: RecordRevenue,
  },
  {
    path: '/record/student',
    component: RecordStudent,
  },
  {
    path: '/record',
    component: Record,
  },
];

export default RecordRoutes;
