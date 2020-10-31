import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const showSidebarHandler = () => setShowSidebar(!showSidebar);

  return (
    <div className='container'>
      <div className='show'>
        {!showSidebar && <button onClick={showSidebarHandler}>Show Nav</button>}
      </div>
      {showSidebar && <Sidebar sidebarHandler={showSidebarHandler} />}
    </div>
  );
}

export default App;
