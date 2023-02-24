import React from 'react';
import { BrowserRouter as Routes, createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Signout from './pages/Signout';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Consult from './pages/consult/Consult';
import About from './pages/AboutUs/AboutUs';
import Contact from "./pages/ContactUs/ContactUs";
import UserHome from './pages/UserHome/UserHome';

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
      element: <About />,
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
      element: <Signout />
    },
    {
      path: "/userhome",
      element:<UserHome/>
    }

  ])

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
