import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './page/Login';
import { useAuth } from './providers/AuthProvider';
import GuardedRoute from './guards/GuardedRoute';
import React from 'react';
import Register from './page/Register';
import Home from './page/Home';
import Banner from './page/Banner';
import Create from './page/Create'


function App() {
const { isLoggedIn } = useAuth()

  return (
    <div className="App">
      <Home />
      <Banner />
      <Routes>
      <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/" />}>
          <Route path="/create" element={<Create />} />
        </Route>
        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
