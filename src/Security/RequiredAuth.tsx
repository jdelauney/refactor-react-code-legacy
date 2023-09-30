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

  // let location = useLocation();

  // if (!auth.user) {
  //   // Redirect them to the /login page, but save the current location they were
  //   // trying to go to when they were redirected. This allows us to send them
  //   // along to that page after they login, which is a nicer user experience
  //   // than dropping them off on the home page.
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }

  return children;
};
