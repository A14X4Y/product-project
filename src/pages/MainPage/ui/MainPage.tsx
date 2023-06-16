import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t('Главная страница')} <button>{t('Ghbdtn')}</button>
    </div>
  );
};

export default MainPage;
