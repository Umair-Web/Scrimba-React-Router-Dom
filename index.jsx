import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from './pages/Vans';
import "./server.js" //This step is very important inorder to work with mirage js.
import VansDetail from './pages/VansDetail.jsx';

import Layout from './components/Layout.jsx';

import Dashboard from './pages/hosts/Dashboard.jsx';
import Income from './pages/hosts/Income.jsx';
import Reviews from './pages/hosts/Reviews.jsx';
import HostLayout from './pages/hosts/HostLayout.jsx';
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VansDetail />} />

          <Route path="host" element={<HostLayout />} >
          {/* So the child route is relative to the parent route we can remove / */}
            <Route path="host" element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>


          {/* The above route has path /vans/:id id is used to send value as parameter. here we have used "id" as a name so object will have key "id" */}
        </Route>
      </Routes>

    </BrowserRouter >
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);