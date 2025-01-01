import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home.jsx';
import NotFound from './Pages/NotFound.jsx';
import Success from './Pages/Success.jsx';
import Navbar from "./components/Navbar.jsx"; // Home page with Navbar
import MenuPage from "./components/menuPage.jsx"; // Menu page component
import Gift from './Pages/Gift.jsx';
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Existing Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/success' element={<Success />} />
          <Route path='*' element={<NotFound />} />
          
          {/* Added Navbar and MenuPage Routes */}
          <Route path='/navbar' element={<Navbar />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/gift' element={<Gift />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;