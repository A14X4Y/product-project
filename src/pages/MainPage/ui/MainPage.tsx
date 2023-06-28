import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('Главная страница')}
      <BugButton />
    </div>
  );
};

export default MainPage;
