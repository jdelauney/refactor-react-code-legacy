import { BrandLogo } from '../../BrandLogo/BrandLogo.tsx';
import { Navigation } from '../../Navigation/Navigation.tsx';
import { dataMainMenu } from './dataMainMenu.tsx';

type PageSidebarLeftProps = {
  className?: string;
};
export const PageSidebarLeft = ({ className }: PageSidebarLeftProps) => {
  return (
    <div className={className}>
      <BrandLogo />
      <Navigation menuItems={dataMainMenu} className={'grow-1 mt-6'} />
    </div>
  );
};
