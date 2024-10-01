import * as React from 'react';

import Register from './pages/Register';
import Login from './pages/Login';

import Dashboard from './pages/Dashboard';
import Designation from './pages/Designation';
import DesignationAdd from './pages/Designation/DesignationAdd';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from './components/protected';
function App() {
  const isSignedIn = localStorage.getItem("access_token") || false;
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path={"/"} element={
            <Protected isSignedIn={isSignedIn} >
              <Dashboard />
            </Protected>
          } />
          <Route path={"/designation"} element={
            <Protected isSignedIn={isSignedIn} >
              <Designation />
            </Protected>
          } />
          <Route path={"/designation/add"} element={
            <Protected isSignedIn={isSignedIn} >
              <DesignationAdd />
            </Protected>
          } />
          <Route path={"/designation/edit/:id"} element={
            <Protected isSignedIn={isSignedIn} >
              <DesignationAdd />
            </Protected>
          } />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
