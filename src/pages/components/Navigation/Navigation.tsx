import { MenuItem, MenuItems } from './menu.type.ts';
import { NavigationLinkItem } from './NavigationLinkItem/NavigationLinkItem.tsx';
import { useAuth } from '../../../hooks/useAuth.ts';

type PageNavigationProps = {
  menuItems: MenuItems;
  className?: string;
};
export const Navigation = ({ menuItems, className }: PageNavigationProps) => {
  const { isAuthenticated } = useAuth();
  return (
    <nav className={`flex flex-col justify-center items-center ${className}`}>
      <ul className={'flex flex-col gap-5 justify-center'}>
        {menuItems.map((item: MenuItem) =>
          (item.requiredAuth && isAuthenticated) || !item.requiredAuth ? (
            <li key={item.url} className={'flex justify-center xl:justify-start'}>
              <NavigationLinkItem item={item} />
            </li>
          ) : null
        )}
      </ul>
    </nav>
  );
};
