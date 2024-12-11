
import { lazy, Suspense } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import './index.css';
import './Themes.css';

import Loader from './assets/components/Loader';
import Navbar from './assets/components/Navbar';
import Tittle from './assets/components/Tittle';
import Pagina404 from './assets/components/Pagina404';



const Home = lazy(() => import('./assets/components/sections/home/Home'));
const Empleo = lazy(() => import('./assets/components/sections/oficina/empleo/Empleo'));
const Prestaciones = lazy(() => import('./assets/components/sections/oficina/prestaciones/Prestaciones'));
const Personal = lazy(() => import('./assets/components/sections/D.P./personal/Personal'));
const Observatorio = lazy(() => import('./assets/components/sections/D.P./observatorio/Observatorio'));
const Ratel = lazy(() => import('./assets/components/sections/D.P./ratel/Ratel'))
const Uci = lazy(()=> import ('./assets/components/sections/D.P./UCI/Uci'))
const Becas = lazy(()=> import ('./assets/components/sections/D.P./becas/Becas'))
const Directorio = lazy(() => import('./assets/components/sections/directorio/Directorio'));




function App() {
 

  return (
    <>
     <div className="container-app">
       <Tittle>DP-Melilla</Tittle>

        <div className="container-nav">
          <Navbar />
         
        </div>
        <div className="container-contenido">
          <Suspense fallback={<Loader />}>
            <Routes>
                <>
                  <Route path="/" element={<Home />} />
                  <Route path="/empleo" element={<Empleo />} />
                  <Route path="/prestaciones" element={<Prestaciones />} />
                  <Route path="/personal" element={<Personal />} />
                  <Route path="/observatorio" element={<Observatorio />} />
                  <Route path="/ratel" element={<Ratel />} />  
                  <Route path="/uci" element={<Uci />} />
                  <Route path="/becas" element={<Becas />} />  
                  <Route path="/directorio" element={<Directorio />} />
                </>
              <Route path="/*" element={<Pagina404 />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default App
