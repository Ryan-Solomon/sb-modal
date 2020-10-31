import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Modal from './Modal';
import { useGlobalContext } from './Context';

function App() {
  const { show, setShow } = useGlobalContext()!;

  return (
    <div className='container'>
      <div className='show'>
        {!show && <button onClick={setShow}>Show Nav</button>}
      </div>
      {show && <Sidebar sidebarHandler={setShow} />}
      <Modal />
    </div>
  );
}

export default App;
