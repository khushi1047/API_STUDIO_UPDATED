import React from 'react';
import { Outlet } from 'react-router-dom';

function BlankLayout() {
  return (
    <div className="w-min-screen min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
      <Outlet />
    </div>
  );
}

export default BlankLayout;
