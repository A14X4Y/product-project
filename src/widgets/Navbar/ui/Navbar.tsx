import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal';
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
  const onCloseModal = () => {
    setIsAuthModal(false);
  };

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button theme="clearInverted" className={cls.links} onClick={onToggleModal}>
        {t('Войти')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </div>
  );
};

export { Navbar };
