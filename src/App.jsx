import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth, AuthProvider } from './assets/components/authentications/AuthContext';
import Navbar from './assets/components/Navbar';
import Loader from './assets/components/Loader';
import Login from './assets/components/authentications/Login';
import Tittle from './assets/components/Tittle';
import Pagina404 from './assets/components/Pagina404';
import Salir from './assets/components/authentications/Salir';
import ProtectedRoute from './assets/components/authentications/ProtectedRoute'; 

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
            <Route path="/empleo" element={<ProtectedRoute requiredAccess="empleo" />}>
              <Route path="" element={<Empleo />} />
            </Route>
            <Route path="/prestaciones" element={<ProtectedRoute requiredAccess="prestaciones" />}>
              <Route path="" element={<Prestaciones />} />
            </Route>
            <Route path="/personal" element={<ProtectedRoute requiredAccess="personal" />}>
              <Route path="" element={<Personal />} />
            </Route>
            <Route path="/observatorio" element={<ProtectedRoute requiredAccess="observatorio" />}>
              <Route path="" element={<Observatorio />} />
            </Route>
            <Route path="/ratel" element={<ProtectedRoute requiredAccess="ratel" />}>
              <Route path="" element={<Ratel />} />
            </Route>
            <Route path="/uci" element={<ProtectedRoute requiredAccess="uci" />}>
              <Route path="" element={<Uci />} />
            </Route>
            <Route path="/becas" element={<ProtectedRoute requiredAccess="becas" />}>
              <Route path="" element={<Becas />} />
            </Route>
            <Route path="/sanciones" element={<ProtectedRoute requiredAccess="sanciones" />}>
              <Route path="" element={<Sanciones />} />
            </Route>
            <Route path="/directorio" element={<ProtectedRoute requiredAccess="directorio" />}>
              <Route path="" element={<Directorio />} />
            </Route>
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