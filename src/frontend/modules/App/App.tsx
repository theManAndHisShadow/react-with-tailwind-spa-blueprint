// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main';
import '../../static/global.css';


const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#121212] text-white font-sans p-8">
        <Routes>
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App; 