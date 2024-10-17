import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from './pages/Vans';
import "./server.js" //This step is very important inorder to work with mirage js.
import VansDetail from './pages/VansDetail.jsx';
function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VansDetail />} />  
        {/* The above route has path /vans/:id id is used to send value as parameter. here we have used "id" as a name so object will have key "id" */}
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);