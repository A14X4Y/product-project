import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/inedx';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>
          Главная
        </AppLink>
        <AppLink to={RoutePath.about}>О сайте</AppLink>
      </div>
    </div>
  );
};

export { Navbar };
