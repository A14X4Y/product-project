import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className, short, ...props }) => {
  const { t, i18n } = useTranslation();
  const onToggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(cls.langSwitcher, {}, [className])}
      {...props}
      onClick={onToggleLang}
      theme="clear"
    >
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  );
};

export { LangSwitcher };
