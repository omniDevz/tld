import Update from '../../pages/Authorized/ConsultingType/pages/Update';
import New from '../../pages/Authorized/ConsultingType/pages/New';
import ConsultingType from '../../pages/Authorized/ConsultingType';

const ConsultingTypeRoutes = [
  {
    component: Update,
    path: '/consultingType/update/:consultingTypeId',
  },
  {
    component: New,
    path: '/consultingType/new',
  },
  {
    component: ConsultingType,
    path: '/consultingType',
  },
];

export default ConsultingTypeRoutes;
