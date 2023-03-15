import './App.css';
import React from 'react';
import {BrowserRouter, Routes,Route} from "react-router-dom";

//Components
import Header from './components/Header'
import Space from './components/Space'

//Pages
import Home from './pages/Home'
import Error404 from './pages/Error404'
import CV from './pages/CV';
import Portfolio from './pages/Portfolio';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Space />
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" index element={<Error404 />} />
        </Routes>
        <Space />
    </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
