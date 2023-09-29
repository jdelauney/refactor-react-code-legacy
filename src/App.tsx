import { Route, Routes } from 'react-router-dom';
import { routes } from './routes/routes.tsx';
import { AuthContext, AuthContextType } from './Context/authContext.tsx';
import { useEffect, useState } from 'react';
import { User as UserModel } from './api/user/models/user.model.ts';
import { RequiredAuth } from './Security/RequiredAuth.tsx';
import { Auth, onAuthStateChanged } from 'firebase/auth';
import { apiServices } from './api/apiServices.ts';
import { PageLayout } from './pages/components/PageLayout/PageLayout.tsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserModel | null>(null);

  const defaultAuthContextValue: AuthContextType = {
    isAuthenticated: isAuthenticated,
    setIsAuthenticated: setIsAuthenticated,
    currentUser: currentUser,
    setCurrentUser: setCurrentUser,
  };

  const auth: Auth = apiServices.getAuthService().getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        let newCurrentUser: UserModel | null;
        apiServices
          .getUserService()
          .getUser(user.uid)
          .then(user => {
            newCurrentUser = user;
            if (newCurrentUser) {
              setCurrentUser(newCurrentUser);
              setIsAuthenticated(true);
            }
          })
          .catch(() => {
            setCurrentUser(null);
            setIsAuthenticated(false);
          });
      } else {
        setCurrentUser(null);
        setIsAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  return (
    <div className={'md:container md:mx-auto px-4 md:px-0 h-screen'}>
      <AuthContext.Provider value={defaultAuthContextValue}>
        <Routes>
          {routes.map(route => {
            return (
              <Route
                key={route.name}
                path={route.path}
                element={
                  <PageLayout>
                    {route.requiresAuth ? <RequiredAuth loginPath={'/'}>{route.element}</RequiredAuth> : route.element}
                  </PageLayout>
                }
              />
            );
          })}
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
