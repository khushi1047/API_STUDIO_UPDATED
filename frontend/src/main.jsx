import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import BlankLayout from './components/BlankLayout.jsx'; // new layout
import Overview from './pages/Overview.jsx';
import ApiCodeEditor from './pages/ApiCodeEditor.jsx';
import Dashboard from './pages/Dashboard.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Routes that use App layout (with Nav + Footer) */}
        <Route path="/" element={<App />}>
          <Route index element={<Overview />} />
        </Route>

        {/* Routes that use Blank layout (no Nav/Footer) */}
        <Route element={<BlankLayout />}>
          <Route path="/editor" element={<ApiCodeEditor />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
