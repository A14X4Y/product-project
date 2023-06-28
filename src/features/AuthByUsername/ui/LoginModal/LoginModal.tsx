import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import { FC } from 'react';
import { LoginForm } from '../LoginForm/LoginForm';
import { Modal } from 'shared/ui/Modal';

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose, ...props }) => {
  console.log('LoginModal');
  return (
    <Modal
      className={classNames(cls.loginModal, {}, [className])}
      {...props}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};

export { LoginModal };
