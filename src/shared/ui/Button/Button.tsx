import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { FC, HTMLAttributes } from 'react';
import 'app/styles/index.scss';

type ThemeButton = 'clear' | 'outline';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: FC<ButtonProps> = ({ className, children, theme, ...props }) => {
  return (
    <button className={classNames(cls.button, {}, [className, cls[theme]])} {...props}>
      {children}
    </button>
  );
};

export { Button };
