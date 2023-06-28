import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal';
import { Button } from 'shared/ui/Button';
import { useState } from 'react';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const onToggleModal = () => {
    setIsAuthModal((prev) => !prev);
  };
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button theme="clearInverted" className={cls.links} onClick={onToggleModal}>
        {t('Войти')}
      </Button>
      <Button theme="clear" className={cls.links} onClick={onToggleModal}>
        {t('Зарегистрироваться')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}></Modal>
    </div>
  );
};

export { Navbar };
