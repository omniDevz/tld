import Course from '../../pages/Authorized/Course';
import CourseDetail from '../../pages/Authorized/Course/pages/Detail';

const CourseRoutes = [
  {
    path: '/course/:idCourse',
    component: CourseDetail,
  },
  {
    path: '/course',
    component: Course,
  },
];

export default CourseRoutes;
