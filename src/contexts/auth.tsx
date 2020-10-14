import React, { createContext, useState, useEffect, useContext } from 'react';

import { useToasts } from 'react-toast-notifications';
import * as auth from '../services/auth';
import api from '../services/api';
import storage from '../utils/storage';

import { UserProps } from '../services/interface';
import { IAuthContext } from './interface';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToasts();

  useEffect(() => {
    async function loadStoriedData() {
      const storiedUser = storage.getUserJTW();
      const storiedToken = storage.getTokenJTW();

      if (storiedUser && storiedToken) {
        api.defaults.headers.Authorization = `Bearer ${storiedToken}`;

        setUser(JSON.parse(storiedUser));
      }
      setLoading(false);
    }
    loadStoriedData();
  }, []);

  async function signIn(
    username: string,
    password: string,
    levelAccess: number
  ) {
    const user = await auth.signIn(username, password, levelAccess);

    if (user.status !== 200) {
      addToast('Usuário ou senha incorreto, tente novamente', {
        appearance: 'warning',
        autoDismiss: true,
      });
    } else {
      setUser(user);
      api.defaults.headers.Authorization = `Bearer ${user.token}`;
      storage.setValuesJTW(user);

      addToast('Logado com sucesso', {
        appearance: 'success',
        autoDismiss: true,
      });
    }
  }

  function signOut() {
    storage.removeValuesJTW();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signOut,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
