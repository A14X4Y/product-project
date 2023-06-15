import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div className={classNames(cls.sidebar, {}, [className])}>

    </div>
  );
};

export { Sidebar };
