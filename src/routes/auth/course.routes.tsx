import Course from '../../pages/Authorized/Course';
import CourseDetail from '../../pages/Authorized/Course/pages/Detail';
import CourseNew from '../../pages/Authorized/Course/pages/NewCourse';

const CourseRoutes = [
  {
    path: '/course/new',
    component: CourseNew,
  },
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
