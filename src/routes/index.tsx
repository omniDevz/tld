import React from 'react';

import { useAuth } from '../contexts/auth';

import AuthRoutes from './auth.routes';
import LogoffRoutes from './logoff.routes';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  return signed ? <AuthRoutes /> : <LogoffRoutes />;
};

export default Routes;
