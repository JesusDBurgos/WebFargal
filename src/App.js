import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Login from './pages/Login.jsx';
import Orders from './pages/Orders.jsx';
import Users from './pages/Users.jsx';

function App() {
  return (
    <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/"element={<Orders/>} />
        <Route path="/orders"element={<Orders/>} />
        <Route path="/users"element={<Users/>} />
        <Route path="/login"element={<Login/>} />
      </Routes>
    </Sidebar>
    </BrowserRouter>
  );
};

export default App;
