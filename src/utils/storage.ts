import { UserProps } from '../services/interface';

const storage = {
  removeValuesJTW() {
    localStorage.removeItem('@TLD:user');
    localStorage.removeItem('@TLD:token');
    localStorage.removeItem('@TLD:dateExpires');
  },
  setValuesJTW(user: UserProps) {
    localStorage.setItem('@TLD:user', JSON.stringify(user));
    localStorage.setItem('@TLD:token', user.token);
    localStorage.setItem('@TLD:dateExpires', user.dateExpires);
  },
  getUserJTW() {
    return localStorage.getItem('@TLD:user');
  },
  getTokenJTW() {
    return localStorage.getItem('@TLD:token');
  },
  getDateExpirationJTW() {
    return new Date(localStorage.getItem('@TLD:dateExpires') || '');
  },
  hasValuesJTW() {
    return storage.getUserJTW() && storage.getTokenJTW();
  },
};

export default storage;
