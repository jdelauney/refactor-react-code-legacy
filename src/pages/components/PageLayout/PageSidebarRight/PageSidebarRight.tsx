import { UsefulLinkList } from '../../UsefulLinkList/UsefulLinkList.tsx';
import { dataUsefulLinks } from './dataUsefulLinks.ts';

type PageSidebarRightProps = {
  className?: string;
};
export const PageSidebarRight = ({ className }: PageSidebarRightProps) => {
  return (
    <aside className={className}>
      <div>
        <h2 className={'font-bold text-3xl w-full text-center'}>Liens utiles</h2>
        <UsefulLinkList dataLinks={dataUsefulLinks} />
      </div>
    </aside>
  );
};
