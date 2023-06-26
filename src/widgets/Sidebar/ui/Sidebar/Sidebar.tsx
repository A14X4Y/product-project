/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { FC, useState } from 'react';
import { Button } from 'shared/ui/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { AppLink } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className, ...props }) => {
  const { t } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onToggleCollapsed = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: isCollapsed }, [className])}
      data-testid="sidebar"
      {...props}
    >
      <Button
        onClick={onToggleCollapsed}
        data-testid="sidebar-toggle"
        className={cls.collapsedBtn}
        theme="backgroundInverted"
        size="size_l"
        square
      >
        {isCollapsed ? '>' : '<'}
      </Button>
      <div className={classNames(cls.links)}>
        <AppLink to={RoutePath.main} theme="secondary" className={classNames(cls.link)}>
          <MainIcon className={cls.icon} />
          <span className={cls.appLink}>{t('Главная')}</span>
        </AppLink>
        <AppLink to={RoutePath.about} theme="secondary" className={cls.link}>
          <AboutIcon className={cls.icon} />
          <span className={cls.appLink}>{t('О сайте')}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={true} />
      </div>
    </div>
  );
};

export { Sidebar };
