import { FC, useState, useEffect } from 'react';
import { Button } from 'shared/ui/Button';
import { error } from 'console';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
  className?: string;
}

const BugButton: FC<BugButtonProps> = ({ className, ...props }) => {
  const { t } = useTranslation();
  const [isError, setIsError] = useState(false);
  const onThrow = () => {
    setIsError((prev) => !prev);
  };
  useEffect(() => {
    if (isError) {
      throw new Error();
    }
  }, [isError]);

  return (
    <Button {...props} onClick={onThrow}>
      {t('Вызвать ошибку')}
    </Button>
  );
};

export { BugButton };
