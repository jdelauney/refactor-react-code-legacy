import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';

type FormGroupProps = PropsWithChildren<{
  className?: string;
  label?: string;
  inputName?: string;
  inputElement: ReactNode;
}> &
  HTMLAttributes<HTMLDivElement>;
export const FormGroup = ({ className, label, inputName, inputElement, children, ...restOfProps }: FormGroupProps) => {
  return (
    <div className={`mb-4 flex flex-wrap ${className}`} {...restOfProps}>
      {label && (
        <label htmlFor={inputName} className={'form-label pt-2 pb-2 mb-0 leading-normal sm:w-1/3 pr-4 pl-4'}>
          {label}
        </label>
      )}
      <div className={'sm:w-2/3 pr-4 pl-4'}>{inputElement}</div>
      {children}
    </div>
  );
};
