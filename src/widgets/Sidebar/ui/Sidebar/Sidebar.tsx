import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { FC, useState } from 'react';
import { Button } from 'shared/ui/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/inedx';
import { LangSwitcher } from 'widgets/LangSwitcher';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className, ...props }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onToggleCollapsed = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: isCollapsed }, [className])}
      {...props}
    >
      <Button onClick={onToggleCollapsed}>Toggle</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};

export { Sidebar };
