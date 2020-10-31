import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Modal from './Modal';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const showSidebarHandler = () => setShowSidebar(!showSidebar);

  return (
    <div className='container'>
      <div className='show'>
        {!showSidebar && <button onClick={showSidebarHandler}>Show Nav</button>}
      </div>
      {showSidebar && <Sidebar sidebarHandler={showSidebarHandler} />}
      <Modal />
    </div>
  );
}

export default App;
