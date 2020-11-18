import Record from '../../pages/Authorized/Record';
import RecordStudent from '../../pages/Authorized/Record/pages/Student';
import RecordRevenue from '../../pages/Authorized/Record/pages/Revenue';

const RecordRoutes = [
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
