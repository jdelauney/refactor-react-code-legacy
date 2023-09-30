import { Button } from '../../components/UI/Button/Button.tsx';
import { getRoutePath } from '../../routes/routes.tsx';
import { NoFollows } from './noFollows.tsx';
import { useAuth } from '../../hooks/useAuth.ts';

export const UserHome = () => {
  const { currentUser } = useAuth();
  return (
    <div className={'flex flex-col items-center gap-4'}>
      <h2 className={'font-bold text-3xl'}>
        Bonjour <span className={'font-black'}>{currentUser!.username}</span>
      </h2>
      <div className={'mt-2'}>
        <Button isLink={true} to={getRoutePath('profil')}>
          Modifier mon profil
        </Button>
      </div>
      <NoFollows />
    </div>
  );
};
