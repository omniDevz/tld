import { UserProps } from '../services/interface';

export interface IAuthContext {
  signed: boolean;
  user: UserProps | null;
  signIn(
    username: string,
    password: string,
    levelAccess: number
  ): Promise<void>;
  signOut(): void;
  loading: boolean;
}
