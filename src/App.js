import React from 'react'
import { createContext, useState } from 'react';
import './App.css';

import {Home} from "./pages/Home";
import {Persona} from "./pages/Persona";
import {useAuthContext} from "./hooks/useAuthContext";

export const todoContext = createContext();

function App() {
  let [currentPage, setCurrentPage] = useState('home');
  let {user, _} = useAuthContext();

  const renderContent = () => {
    switch (currentPage) {
    case 'home':
      return <Home />;
    case 'avatar':
      return <Persona />;
    case 'settings':
      return <Home />;
      default:
        return null;
    }
  }

  return (
    <div className="App">
      {/* Navigation Bar */}
      <div className="NavigationBar">
        <div>
          <button onClick={() => setCurrentPage('home')}>Home</button>
          <button onClick={() => setCurrentPage('avatar')}>Avatar</button>
          <button onClick={() => setCurrentPage('settings')}>Settings</button>
        </div>
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  );
}

export default App;