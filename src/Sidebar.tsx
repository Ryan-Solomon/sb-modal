import React, { FC } from 'react';

type Props = {
  sidebarHandler: () => void;
};

const Sidebar: FC<Props> = ({ sidebarHandler }) => {
  return (
    <div className='sidebar-container'>
      <div className='sidebar'>
        <header className='header-sidebar'>
          <h3>Coding Addict</h3>

          <button onClick={sidebarHandler}>X</button>
        </header>
        <div className='sidebar-nav'>
          <nav className='sidebar-nav'>
            <ul className='sidebar-list'>
              <li>Home</li>
              <li>Team</li>
              <li>Projects</li>
              <li>Calendar</li>
              <li>Docs</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
