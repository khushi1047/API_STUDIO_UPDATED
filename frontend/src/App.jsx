import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="w-min-screen min-h-screen bg-black text-white flex flex-col overflow-x-hidden gap-8">
      <header className="w-full px-6 py-4"><Nav /></header>
      <main className="flex-1 w-full px-6"><Outlet /></main>
      <footer className="w-full px-6 py-6"><Footer /></footer>
      </div>
  );
}

export default App;
