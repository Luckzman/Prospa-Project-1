import React, { useState } from 'react';
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import "./App.scss";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const toggleSideBar = (show) => {
    setShowSideBar(show)
  }

  return (
    <div className="app">
      <Sidebar showBar={showSideBar} closeSideBar={toggleSideBar} />
      <Dashboard toggleSideBar={toggleSideBar} />
    </div>
  );
}

export default App;
