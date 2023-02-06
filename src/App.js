import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Login from './pages/Login.jsx';
import Orders from './pages/Orders.jsx';
import Users from './pages/Users.jsx';

function App() {
  return (
          <Sidebar>
              <Routes>
                <Route path="/app/orders"element={<Orders />} />
                <Route path="/app/users"element={<Users/>} />
                <Route exact path="/"element={<Login/>} />
              </Routes>
          </Sidebar>
  );
};

export default App;
