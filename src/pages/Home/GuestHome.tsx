import { Button } from '../../components/UI/Button/Button.tsx';

export const GuestHome = () => {
  return (
    <div className={'flex flex-col items-center gap-4'}>
      <h2 className={'font-bold text-3xl'}>
        Bonjour <span className={'font-black'}>visiteur</span>
      </h2>
      <span className={'font-bold'}>Vous n'êtes pas connecté !</span>
      <div className={'mt-2'}>
        <Button isLink={true} to={'/authenticate/register'}>
          Inscription / Connexion
        </Button>
      </div>
    </div>
  );
};
