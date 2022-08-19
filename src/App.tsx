import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

//ROUTES
import FrontPage from './routes/FrontPage';
import AdminPage from './routes/AdminPage';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/admin/:name" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
