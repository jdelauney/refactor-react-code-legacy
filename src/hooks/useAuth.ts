import { AuthContext } from '../Context/authContext.tsx';
import { useContext } from 'react';

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (authContext === undefined) {
    throw new Error('useFirebaseAuth must be used within an AuthProvider');
  }

  const { currentUser, isAuthenticated } = authContext;

  return { currentUser, isAuthenticated };
};
