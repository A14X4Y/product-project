import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className, ...props }) => {
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
      {t('Язык')}
    </Button>
  );
};

export { LangSwitcher };
