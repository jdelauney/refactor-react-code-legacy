import { UsefulLinkDef } from '../PageLayout/PageSidebarRight/dataUsefulLinks.ts';
import { UsefulLinkCard } from './UsefulLinkCard/UsefulLinkCard.tsx';

type UsefulLinkListProps = {
  dataLinks: UsefulLinkDef[];
};
export const UsefulLinkList = ({ dataLinks }: UsefulLinkListProps) => {
  return (
    <>
      <ul className={'flex flex-col gap-3 px-6 mt-3'}>
        {dataLinks.map(link => (
          <li key={link.url}>
            <a href={link.url} className={'text-decoration-none text-body'} target={'_blank'} rel={'noreferrer'}>
              <UsefulLinkCard title={link.title} description={link.description} />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
