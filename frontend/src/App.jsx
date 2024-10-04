import React from 'react';
import './App.css';
<<<<<<< HEAD:src/App.jsx

import Navbar from './Components/Shared/Navbar';
import Footer from './Components/Shared/Footer';
import { ThemeProvider } from './context/themeContext.jsx';
=======
import Navbar from '../src/components/Shared/Navbar';
import Footer from "../src/components/Shared/Footer"
>>>>>>> 2c04f6476e97c9e8757c3bfa6555ac41bf2a7bcb:frontend/src/App.jsx
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
