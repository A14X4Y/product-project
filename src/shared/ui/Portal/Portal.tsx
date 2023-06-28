import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Portla.module.scss';
import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

const Portal: FC<PortalProps> = ({
  children,
  element = document.querySelector('#root'),
  ...props
}) => {
  const appElement = document.querySelector('.app');
  if (appElement) {
    element = appElement as HTMLElement;
  }
  return createPortal(children, element);
};

export { Portal };
