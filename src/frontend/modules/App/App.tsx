// App.tsx
import '../../static/global.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main';
import PageNotFound from './pages/404';


const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#121212] text-white font-sans p-8">
        <Routes>
          {/* aliases */}
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/*" element={<PageNotFound />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App; 