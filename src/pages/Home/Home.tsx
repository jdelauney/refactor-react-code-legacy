import { GuestHome } from './GuestHome.tsx';
import { useAuth } from '../../hooks/useAuth.ts';
import { UserHome } from './UserHome.tsx';
import { ReactNode } from 'react';

export const Home = () => {
  const { isAuthenticated } = useAuth();

  let Element: ReactNode;
  if (isAuthenticated) {
    Element = <UserHome />;
  } else {
    Element = <GuestHome />;
  }
  return <div className={'mt-6'}>{Element}</div>;
};
