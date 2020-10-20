import TransmissionNotificationLive from '../pages/Authorized/TransmissionNotification/pages/Live';
import TransmissionNotification from '../pages/Authorized/TransmissionNotification';

const TransmissionNotificationRoutes = [
  {
    component: TransmissionNotification,
    path: '/transmissionNotification',
  },
  {
    component: TransmissionNotificationLive,
    path: '/transmissionNotification/live/:transmissionNotificationId',
  },
];

export default TransmissionNotificationRoutes;
