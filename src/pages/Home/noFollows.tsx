import { Button } from '../../components/UI/Button/Button.tsx';
import { getRoutePath } from '../../routes/routes.tsx';

export const NoFollows = () => {
  return (
    <div className={'flex flex-col items-center gap-3 mt-10'}>
      <span className={'font-bold text-3xl'}>Vous ne suivez aucun utilisateur</span>
      <p className={'font-bold text-lg'}>Pour suivre un utilisateur aller sur son profil en cliquant sur son pseudo</p>
      <div className={'mt-2 w-full'}>
        <Button isLink={true} to={getRoutePath('explorer')} className={'w-full'}>
          Explorer
        </Button>
      </div>
    </div>
  );
};
