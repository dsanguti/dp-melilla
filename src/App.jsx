import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth, AuthProvider } from './assets/components/authentications/AuthContext';
import Navbar from './assets/components/Navbar';
import Loader from './assets/components/Loader';
import Login from './assets/components/authentications/Login';
import Tittle from './assets/components/Tittle';
import Pagina404 from './assets/components/Pagina404';
import Salir from './assets/components/authentications/Salir';

import './App.css';
import './index.css';
import './Themes.css';

const Home = lazy(() => import('./assets/components/sections/home/Home'));
const Empleo = lazy(() => import('./assets/components/sections/oficina/empleo/Empleo'));
const Prestaciones = lazy(() => import('./assets/components/sections/oficina/prestaciones/Prestaciones'));
const Personal = lazy(() => import('./assets/components/sections/D.P./personal/Personal'));
const Observatorio = lazy(() => import('./assets/components/sections/D.P./observatorio/Observatorio'));
const Ratel = lazy(() => import('./assets/components/sections/D.P./ratel/Ratel'));
const Uci = lazy(() => import('./assets/components/sections/D.P./UCI/Uci'));
const Becas = lazy(() => import('./assets/components/sections/D.P./becas/Becas'));
const Sanciones = lazy(() => import('./assets/components/sections/D.P./sanciones/Sanciones'));
const Directorio = lazy(() => import('./assets/components/sections/directorio/Directorio'));

const PrivateRoute = ({ element }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <Loader />; // Muestra el loader mientras se valida la autenticación
  }

  return isAuthenticated ? element : <Navigate to="/login" />;
};

const AppContent = () => {
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000); // Espera 1 segundo antes de mostrar el contenido
    } else {
      setLoading(false);
    }
  }, [isAuthenticated]);

  if (loading) {
    return <Loader />; // Muestra el Loader mientras se carga la autenticación
  }

  const shouldDisplayNavbar = location.pathname !== '/salir' && location.pathname !== '/login'; // No mostrar Navbar si estamos en /salir o /login
  const shouldDisplayTittle = location.pathname !== '/salir' && location.pathname !== '/login'; // No mostrar Tittle si estamos en /salir o /login

  return (
    <div className="container-app">
      {shouldDisplayTittle && isAuthenticated && <Tittle>DP-Melilla</Tittle>} {/* Mostrar Tittle solo si no estamos en /salir ni /login */}
      <div className={`container-nav ${location.pathname === '/login' ? 'hide-nav' : ''}`}>
        {shouldDisplayNavbar && isAuthenticated && <Navbar />} {/* Mostrar Navbar solo si no estamos en /salir ni /login */}
      </div>
      <div className="container-contenido">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<PrivateRoute element={<Home />} />} />
            <Route path="/empleo" element={<PrivateRoute element={<Empleo />} />} />
            <Route path="/prestaciones" element={<PrivateRoute element={<Prestaciones />} />} />
            <Route path="/personal" element={<PrivateRoute element={<Personal />} />} />
            <Route path="/observatorio" element={<PrivateRoute element={<Observatorio />} />} />
            <Route path="/ratel" element={<PrivateRoute element={<Ratel />} />} />
            <Route path="/uci" element={<PrivateRoute element={<Uci />} />} />
            <Route path="/becas" element={<PrivateRoute element={<Becas />} />} />
            <Route path="/sanciones" element={<PrivateRoute element={<Sanciones />} />} />
            <Route path="/directorio" element={<PrivateRoute element={<Directorio />} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/salir" element={<Salir />} />
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
