import Record from '../../pages/Authorized/Record';
import RecordStudent from '../../pages/Authorized/Record/pages/Student';

const RecordRoutes = [
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
