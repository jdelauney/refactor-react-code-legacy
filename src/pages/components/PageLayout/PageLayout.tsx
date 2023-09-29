import { PropsWithChildren } from 'react';
import { PageSidebarRight } from './PageSidebarRight/PageSidebarRight.tsx';
import { PageSidebarLeft } from './PageSidebarLeft/PageSidebarLeft.tsx';

type PageLayoutProps = PropsWithChildren<object>;

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className={'flex flex-wrap py-2 md:py-4 h-full'}>
      <PageSidebarLeft className={'flex flex-col flex-auto-noresize w-1/6 md:w-1/4 h-full gap-4 border-e-2 pt-6'} />
      <main className={'w-5/6 md:w-1/2 h-full overflow-auto pt-4 ps-2'}>{children}</main>
      <PageSidebarRight className={'hidden md:flex flex-col justify-between h-full w-1/6 md:w-1/4 border-s-2 p-2'} />
    </div>
  );
};
