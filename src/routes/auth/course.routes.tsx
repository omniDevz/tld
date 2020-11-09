import Course from '../../pages/Authorized/Course';
import ClassNew from '../../pages/Authorized/Course/pages/ClassNew';
import ClassEdit from '../../pages/Authorized/Course/pages/ClassEdit';
import CourseNew from '../../pages/Authorized/Course/pages/CourseNew';
import CourseEdit from '../../pages/Authorized/Course/pages/CourseEdit';
import CourseDetail from '../../pages/Authorized/Course/pages/Detail';

const CourseRoutes = [
  {
    path: '/course/:idCourse/edit/class/:idClass',
    component: ClassEdit,
  },
  {
    path: '/course/:idCourse/new/class',
    component: ClassNew,
  },
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
