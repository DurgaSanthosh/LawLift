import React from 'react';
import { BrowserRouter as Routes, createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Signout from './pages/Signout';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Feed2 from './pages/Feed2/feed2';
import Consult from './pages/consult/Consult';
import Feed from './pages/feed/Feed';
import About from './pages/AboutUs/AboutUs';
import Contact from "./pages/ContactUs/ContactUs";
import UserHome from './pages/UserHome/UserHome';
import Connect from './pages/Connect';

 const App = () => {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Signin />
        </>
      ),
    },
    {
      path: "/aboutus",
      element: (
        <>
        <Navbar />
      <About />
      </>
      ),
    },
    {
      path: "/contactus",
      element: (
        <>
          <Navbar />
          <Contact />
        </>
      ),
    },
    {
      path: "/signout",
      element: <Signout />,
    },
    {
      path: "/consult",
      element: <Consult />,
    },
    {
      path: "/feed",
      element: <Feed />,
    },
    {
      path: "/feed2",
      element: <Feed2 />,
    },
    { path: "/userhome", element: <UserHome /> },
    { path: "/connect", element: <Connect /> },
  ]);

  return (
    <div>
      <AuthContextProvider>
        
        <RouterProvider router={routes} />
        {/* <Routes>
          <Navbar />
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route
            path='/signout'
            element={
              <Protected>
                <Signout />
              </Protected>
            }
          />
        </Routes> */}
      </AuthContextProvider>
    </div>
  );
}

export default App;
