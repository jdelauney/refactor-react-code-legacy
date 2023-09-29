import { createContext, Dispatch, SetStateAction } from 'react';
import { User } from '../api/user/models/user.model.ts';

export type AuthContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
};
export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  currentUser: null,
  setCurrentUser: () => {},
});
