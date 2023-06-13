import { Routes, Route, Link } from 'react-router-dom';
import { Suspense, useState } from 'react';
import './styles/index.scss';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { classNames } from './helpers/classNames/classNames';
import { useTheme } from './theme/useTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames('app', { hovered: true, selected: false }, [
        theme,
        'cls2',
        'cls3',
      ])}
    >
      <button onClick={toggleTheme}>Тема</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
