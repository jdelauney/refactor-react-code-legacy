import { PropsWithChildren, useContext } from 'react';
import { AuthContext } from '../Context/authContext.tsx';
import { useNavigate } from 'react-router-dom';

type RequiredAuthProps = PropsWithChildren<{
  loginPath: string;
}>;
export const RequiredAuth = ({ loginPath, children }: RequiredAuthProps) => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate(loginPath);
  }

  return <>{children}</>;
};
