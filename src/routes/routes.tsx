import { Home } from '../pages/Home/Home.tsx';
import { ReactNode } from 'react';
import { Authenticate } from '../pages/Authenticate/Authenticate.tsx';

export type RouteDef = {
  path: string;
  name: string;
  element: ReactNode;
  requiresAuth: boolean;
};
export const routes: RouteDef[] = [
  {
    path: '/',
    name: 'home',
    element: <Home />,
    requiresAuth: false,
  },

  {
    path: '/authenticate/:authType',
    name: 'authenticate',
    element: <Authenticate />,
    requiresAuth: false,
  },
];

export const getRoutePath = (routeName: string): string => {
  const route = routes.find(route => route.name.toLowerCase() === routeName.toLowerCase());
  return route ? route.path : '/';
};
