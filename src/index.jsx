import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Survey from './pages/Survey/Survey';
import Home from './pages/Home/Home';
import Header from './components/Header';
import Error from './components/Error';
import Results from './pages/Results/Results';
import Freelances from './pages/Freelances/Freelances';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Survey/:survey_number" element={<Survey />} />
        <Route path="/Results" element={<Results />} />
        <Route path="/Freelances" element={<Freelances />} />
        <Route path="/:something" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
