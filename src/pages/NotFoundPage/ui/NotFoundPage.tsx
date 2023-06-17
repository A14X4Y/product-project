import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className, ...props }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.notFoundPage, {}, [className])} {...props}>
      {t('Страница не найдена')}
    </div>
  );
};

export { NotFoundPage };
