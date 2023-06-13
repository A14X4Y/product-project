import { Routes, Route, Link } from 'react-router-dom';
import { Suspense } from 'react';
import './styles/index.scss';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { classNames } from 'shared/lib';
import { useTheme } from 'app/providers/ThemeProvider';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Тема</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
