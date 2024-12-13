
import { AuthProvider, useAuth } from './assets/components/authentications/AuthContext';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import './App.css';
import './index.css';
import './Themes.css';

import Loader from './assets/components/Loader';
import Navbar from './assets/components/Navbar';
import Tittle from './assets/components/Tittle';
import Pagina404 from './assets/components/Pagina404';
import Login from './assets/components/authentications/Login';

const Home = lazy(() => import('./assets/components/sections/home/Home'));
const Empleo = lazy(() => import('./assets/components/sections/oficina/empleo/Empleo'));
const Prestaciones = lazy(() => import('./assets/components/sections/oficina/prestaciones/Prestaciones'));
const Personal = lazy(() => import('./assets/components/sections/D.P./personal/Personal'));
const Observatorio = lazy(() => import('./assets/components/sections/D.P./observatorio/Observatorio'));
const Ratel = lazy(() => import('./assets/components/sections/D.P./ratel/Ratel'));
const Uci = lazy(() => import('./assets/components/sections/D.P./UCI/Uci'));
const Becas = lazy(() => import('./assets/components/sections/D.P./becas/Becas'));
const Directorio = lazy(() => import('./assets/components/sections/directorio/Directorio'));

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const AppContent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="container-app">
      {isAuthenticated && <Tittle>DP-Melilla</Tittle>}
      <div className="container-nav">
        {isAuthenticated && <Navbar />}
      </div>
      <div className="container-contenido">
        <Suspense fallback={<Loader />}>
          <Routes>
            <>
              <Route path="/" element={<PrivateRoute element={<Home />} />} />
              <Route path="/empleo" element={<PrivateRoute element={<Empleo />} />} />
              <Route path="/prestaciones" element={<PrivateRoute element={<Prestaciones />} />} />
              <Route path="/personal" element={<PrivateRoute element={<Personal />} />} />
              <Route path="/observatorio" element={<PrivateRoute element={<Observatorio />} />} />
              <Route path="/ratel" element={<PrivateRoute element={<Ratel />} />} />
              <Route path="/uci" element={<PrivateRoute element={<Uci />} />} />
              <Route path="/becas" element={<PrivateRoute element={<Becas />} />} />
              <Route path="/directorio" element={<PrivateRoute element={<Directorio />} />} />
              <Route path="/login" element={<Login />} />
            </>
            <Route path="/*" element={<Pagina404 />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;