import React, { Suspense } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import './App.scss';

const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'));
const StartShips = React.lazy(() => import('./pages/StarShips/Star-ships'));

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <header id="header">
        <ul className='menus'>
          <li><NavLink to={'/'} className={location.pathname === '/' ? 'active' : ''}>Dashboard</NavLink></li>
          <li><NavLink to={'/star-ships'} className={location.pathname.includes('/star-ships') ? 'active' : ''}>StartShips</NavLink></li>
        </ul>
      </header>
      <Suspense>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/star-ships' element={<StartShips />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
