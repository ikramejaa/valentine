import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './Components/Home';
import YesPage from './Components/YesPage';

function App() {
  return (<Router>
    <div className="App">
      <div className='Form'>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/yes" element={< YesPage />} />
        </Routes>
      </div>
    </div>
  </Router>
);
};

export default App;
