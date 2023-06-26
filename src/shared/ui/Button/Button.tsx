import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { FC, HTMLAttributes } from 'react';
import 'app/styles/index.scss';

type ButtonTheme = 'clear' | 'outline' | 'background' | 'backgroundInverted';
type Size = 's' | 'm' | 'l' | 'xl';
type ButtonSize = `size_${Size}`;

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

const Button: FC<ButtonProps> = ({ className, children, square, theme, size, ...props }) => {
  const mods: Record<string, boolean> = {
    [cls.square]: square,
  };

  return (
    <button className={classNames(cls.button, mods, [className, cls[theme], cls[size]])} {...props}>
      {children}
    </button>
  );
};

export { Button };
