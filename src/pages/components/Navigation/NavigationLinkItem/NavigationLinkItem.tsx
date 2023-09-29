import { MenuItem } from '../menu.type.ts';
import { Link } from 'react-router-dom';

type NavigationItemProps = {
  item: MenuItem;
};
export const NavigationLinkItem = ({ item }: NavigationItemProps) => {
  const { url, label, Icon, labelClassName, linkClassName, iconClassName, className } = item;
  return (
    <div className={className}>
      <Link to={url} className={linkClassName}>
        {Icon && <span className={iconClassName}>{Icon}</span>}
        <span className={labelClassName}>{label}</span>
      </Link>
    </div>
  );
};
