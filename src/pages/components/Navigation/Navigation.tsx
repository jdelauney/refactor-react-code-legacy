import { MenuItem, MenuItems } from './menu.type.ts';
import { NavigationLinkItem } from './NavigationLinkItem/NavigationLinkItem.tsx';

type PageNavigationProps = {
  menuItems: MenuItems;
  className?: string;
};
export const Navigation = ({ menuItems, className }: PageNavigationProps) => {
  return (
    <nav className={`flex flex-col justify-center items-center ${className}`}>
      <ul className={'flex flex-col gap-5 justify-center'}>
        {menuItems.map((item: MenuItem) => (
          <li key={item.url} className={'flex justify-center xl:justify-start'}>
            <NavigationLinkItem item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
