import React from 'react';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Signout from './pages/Signout';
import Home from './pages/Home';
import Signin from './pages/Signin';

function App() {
  return (
    <div>
      <AuthContextProvider>
        
        <Routes>
        <Navbar />
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route
            path='/account'
            element={
              <Protected>
                <Signout />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
