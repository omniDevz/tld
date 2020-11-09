import Course from '../../pages/Authorized/Course';
import CourseNew from '../../pages/Authorized/Course/pages/NewCourse';
import CourseEdit from '../../pages/Authorized/Course/pages/EditCourse';
import CourseDetail from '../../pages/Authorized/Course/pages/Detail';

const CourseRoutes = [
  {
    path: '/course/new',
    component: CourseNew,
  },
  {
    path: '/course/edit/:idCourse',
    component: CourseEdit,
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
