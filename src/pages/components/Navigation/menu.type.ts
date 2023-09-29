import { ReactNode } from 'react';

export type MenuItem = {
  url: string;
  label?: string;
  Icon?: ReactNode;
  linkClassName?: string;
  iconClassName?: string;
  labelClassName?: string;
  className?: string;
};

export type MenuItems = MenuItem[];
