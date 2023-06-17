import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';
import { FC } from 'react';
import { Bars } from 'react-loader-spinner';

interface PageLoaderProps {
  className?: string;
}

const PageLoader: FC<PageLoaderProps> = ({ className, ...props }) => {
  return (
    <div className={classNames(cls.pageLoader, {}, [className])} {...props}>
      <Bars height="80" width="80" color="grey" wrapperStyle={{}} wrapperClass="" visible={true} />
    </div>
  );
};

export { PageLoader };
