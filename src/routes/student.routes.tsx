import Detail from '../pages/Authorized/Student/pages/Detail';
import Student from '../pages/Authorized/Student';

const StudentRoutes = [
  {
    path: '/student/:studentId',
    component: Detail,
  },
  {
    path: '/student',
    component: Student,
  },
];

export default StudentRoutes;
