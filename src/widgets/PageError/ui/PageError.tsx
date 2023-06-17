import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

interface PageErrorProps {
  className?: string;
}

const PageError: FC<PageErrorProps> = ({ className, ...props }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={classNames(cls.pageError, {}, [className])} {...props}>
      <p>{t('Произошла непридвиденная ошибка')}</p>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
};

export { PageError };
