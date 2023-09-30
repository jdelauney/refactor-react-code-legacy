import { ReactNode } from 'react';
import { LoginForm } from './LoginForm/LoginForm.tsx';
import { RegisterForm } from './RegisterForm/RegisterForm.tsx';
import { Button } from '../../components/UI/Button/Button.tsx';
import { useParams } from 'react-router-dom';

export const Authenticate = () => {
  const { authType } = useParams();

  let Form: ReactNode;
  if (authType === 'login') {
    Form = <LoginForm />;
  } else if (authType === 'register') {
    Form = <RegisterForm />;
  } else {
    Form = <RegisterForm />;
  }

  return (
    <div className={'flex flex-col gap-4 items-center mt-6'}>
      <h2 className={'font-bold text-4xl'}>{authType === 'login' ? 'Connexion' : 'Inscription'}</h2>
      <div className={'flex justify-center items-center gap-1 pt-6'}>
        <Button isLink={true} to={'/authenticate/login'} className={'w-1/2'}>
          Connexion
        </Button>
        <Button isLink={true} to={'/authenticate/register'} className={'w-1/2'}>
          Inscription
        </Button>
      </div>
      {Form}
    </div>
  );
};
