import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vansLoader } from './pages/Vans';
import "./server.js" //This step is very important inorder to work with mirage js.
import VansDetail, { loader as vanDetailLoader } from './pages/VansDetail.jsx';

import Layout from './components/Layout.jsx';

import Dashboard from './pages/hosts/Dashboard.jsx';
import Income from './pages/hosts/Income.jsx';
import Reviews from './pages/hosts/Reviews.jsx';
import HostLayout from './pages/hosts/HostLayout.jsx';
import HostVans, { loader as hostVansLoader } from './pages/hosts/HostVans.jsx';
import HostVansDetails, { loader as hostVanDetailLoader } from './pages/hosts/HostVansDetails.jsx';
import Details from './pages/hosts/Details.jsx';
import Pricing from './pages/hosts/Pricing.jsx';
import Photos from './pages/hosts/Photos.jsx';
import Errorpage from './pages/Errorpage.jsx';
import Error from './components/Error.jsx';
import Login from './pages/Login.jsx';
import { requireAuth } from './utils.js';


// The code below is related to the react-router Data-layer-Api 

//The Data Layer API in react-router-dom (available from version 6.4 onwards) is designed to manage data loading and mutation (updating or modifying data) for routes in React applications. This API integrates data management directly into the routing system, which allows you to define how data should be fetched and updated alongside each route.

//for using Data-Layer-Api we have to get rid of BrowserRouter and have to use createBrowserRouter in order to make Routes only in that way we can use can use loader and action functionality of react-router-dom

const route = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path='*' element={<Errorpage />} />
    {/* The above route is used when the existing doesnot match and we want to display some content here "*" means to catch all other routes. */}

    <Route index element={<Home />} />
    {/* Index tell that the route of the current component is the route of parent which is here / .*/}

    <Route path="about" element={<About />} />
    <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />} />
    {/* In the above line inside loader we are calling a function that will call the vans data and will pass it to the component after the data is fetched only then the component loads.ErrorElement is used when there is an error in our component and we want to display some kind of fallback component or data. Instead of attaching errorElement to each route we can attach this errorElement on the parent route and the parent route will catch all the error from children routes.*/}

    <Route path='login' element={<Login />} />

    <Route
      path="vans/:id"
      element={<VansDetail />}
      loader={vanDetailLoader} />
    {/* The above route has path /vans/:id id is used to send value as parameter. here we have used "id" as a name so object will have key "id" */}

    <Route path="host" element={<HostLayout />} >
      {/* So when the child route is relative to the parent route we can remove / */}

      <Route
        index
        element={<Dashboard />}
        loader={async () => await requireAuth()
        } />
      <Route
        path="income"
        element={<Income />}
        loader={async () => await requireAuth()
        } />
      <Route
        path="reviews"
        element={<Reviews />}
        loader={async () => await requireAuth()
        } />
      <Route
        path="vans"
        element={<HostVans />}
        loader={hostVansLoader} />


      <Route
        path="vans/:id"
        element={<HostVansDetails/>}
        loader={hostVanDetailLoader}
          >
        <Route
          index
          element={<Details />}
          loader={async () => await requireAuth()
          } />
        <Route
          path="pricing"
          element={<Pricing />}
          loader={async () => await requireAuth()
          } />
        <Route
          path="photos"
          element={<Photos />}
          loader={async () => await requireAuth()
          } />

      </Route>
    </Route>

    {/* path with / means they are absolute and can stand alone like /about ,path without / means these route are related to its parent and doesnot stand alone /host/income */}
  </Route>
))
function App() {
  return (
    <RouterProvider router={route} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);