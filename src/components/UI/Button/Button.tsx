import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = PropsWithChildren<{
  className?: string;
  isLink?: boolean;
  to?: string;
}> &
  ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = ({ className, children, isLink, to, ...restOfProps }: ButtonProps) => {
  const buttonClasses = `flex justify-center items-center select-none border border-blue-200 rounded text-normal pt-2 pb-3 px-3 no-underline bg-blue-600 text-white hover:bg-blue-500 ${className}`;
  if (isLink) {
    return (
      <Link to={to!} className={buttonClasses}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={buttonClasses} {...restOfProps}>
        {children}
      </button>
    );
  }
};
