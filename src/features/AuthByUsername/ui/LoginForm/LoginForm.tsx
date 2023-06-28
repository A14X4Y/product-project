import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { Button } from 'shared/ui/Button';

interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = ({ className, ...props }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.loginForm, {}, [className])} {...props}>
      <Input type="text" className={cls.input} placeholder={t('Введите никнейм')} autoFocus />
      <Input type="text" className={cls.input} placeholder={t('Введите пароль')} />
      <Button className={cls.loginBtn} theme="outline">
        {t('Войти')}
      </Button>
    </div>
  );
};

export { LoginForm };
