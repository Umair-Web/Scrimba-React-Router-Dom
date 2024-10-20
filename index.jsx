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
import HostVans from './pages/hosts/HostVans.jsx';
import HostVansDetails from './pages/hosts/HostVansDetails.jsx';
import Details from './pages/hosts/Details.jsx';
import Pricing from './pages/hosts/Pricing.jsx';
import Photos from './pages/hosts/Photos.jsx';
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* index tell that the route of the current component is the route of parent  which is here / .*/}
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VansDetail />} />

          {/* The above route has path /vans/:id id is used to send value as parameter. here we have used "id" as a name so object will have key "id" */}
          <Route path="host" element={<HostLayout />} >
            {/* So when the child route is relative to the parent route we can remove / */}
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansDetails />} >
              <Route index element={<Details />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />

            </Route>
          </Route>
          {/* path with / means they are absolute and can stand alone like /about ,path without / means these route are related to its parent and doesnot stand alone /host/income */}
        </Route>
      </Routes>

    </BrowserRouter >
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);