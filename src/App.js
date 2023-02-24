import React from 'react';
import { BrowserRouter as Routes, createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Signout from './pages/Signout';
import Home from './pages/Home';
import Signin from './pages/Signin';

 const App = () => {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Signin />
    },
    {
      path: "/signout",
      element: <Signout />
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
