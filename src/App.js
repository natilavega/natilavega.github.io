import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import './styles/App.css';
import Loader from './components/loader';

const HomePage = lazy(() => import('./pages/homePage'));
const AboutPage = lazy(() => import('./pages/aboutPage'));
const ProjectsPage = lazy(() => import('./pages/projectsPage'));
const NotFoundPage = lazy(() => import('./pages/notFoundPage'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Navigate to={ROUTES.HOME} replace />} />
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.PROJECTS} element={<ProjectsPage />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
