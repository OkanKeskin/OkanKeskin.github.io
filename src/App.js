import './App.css';
import React from 'react';
import {BrowserRouter, Routes,Route} from "react-router-dom";

//Components
import Sidebar from './components/Sidebar'

//Pages
import Home from './pages/Home'
import Error404 from './pages/Error404'
import CV from './pages/CV';
import Portfolio from './pages/Portfolio';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="panel">
          <Sidebar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="*" index element={<Error404 />} />
          </Routes>
        </div>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
