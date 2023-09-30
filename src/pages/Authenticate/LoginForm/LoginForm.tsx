import { getLoginFormConfig } from './loginForm.config.ts';
import { Form } from '../../../components/UI/Form/Form.tsx';
import { ChangeEvent, FormEvent, useState } from 'react';
import { z } from 'zod';
import { InputDataFieldType } from '../../../components/UI/Form/InputFields/inputDataField.type.ts';
import { Button } from '../../../components/UI/Button/Button.tsx';
import { extractZodErrorToMessage } from '../../../utils/zod.ts';

const loginSchema = z.object({
  email: z.string({ required_error: 'un email est obligatoire' }).email({ message: 'Adresse email invalide' }),
  password: z
    .string({ required_error: 'mot de passe obligatoire' })
    .min(8, { message: 'Mot de passe trop court. Minimum 8 caractères' }),
});

type LoginFormDataType = z.infer<typeof loginSchema>;
export const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFormDataType>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = (e as ChangeEvent<HTMLFormElement>).target;
    const newData = { ...formData, [name]: value };
    setFormData(newData);

    // Validate the field
    loginSchema
      .parseAsync(newData)
      .then(() =>
        setErrors(prev => {
          return { ...prev, [name]: '' };
        })
      )
      .catch(error => {
        setErrors({ ...errors, [name]: extractZodErrorToMessage(error, name) });
      });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit', formData);
  };

  const loginFormConfig: InputDataFieldType[] = getLoginFormConfig(formData, errors);

  return (
    <Form
      fields={loginFormConfig}
      onSubmit={handleSubmit}
      onInputChange={handleInputChange}
      className={'w-full mt-10 pt-10 border-t border-gray-200'}
    >
      <footer className={'w-full flex justify-center mt-4'}>
        <Button type={'submit'} className={'w-1/2'}>
          Connexion
        </Button>
      </footer>
    </Form>
  );
};
