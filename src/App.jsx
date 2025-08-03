import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col min-h-screen bg-cover bg-center" style={{
              backgroundImage: 'url("https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/Aq2NJ23MzBH2rx2j/untitled-design-2-YD0rJbvp3nSz7Dvz.png")'
            }}>
              <Navbar />
              <div className="flex flex-col items-center justify-center px-4 py-8">
                <div className="text-2xl sm:text-3xl font-bold text-center text-white mb-6  bg-opacity-40 px-4 py-2 rounded-2xl backdrop-blur-md">
                  Fundraising Intern Portal
                </div>
                <div className="w-full max-w-2xl bg-white bg-opacity-90 rounded-xl shadow-lg p-4 md:p-6">
                  <Dashboard />
                  <Leaderboard />
                </div>
              </div>
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
