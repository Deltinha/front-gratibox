/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import GlobalStyle from './styles/GloblalStyle';
import useLocalStorage from './hooks/useLocalStorage';
import UserContext from './contexts/userContext';
import Register from './screens/Register';
import Details from './screens/Details';
import Subscribe from './screens/Subscribe';

export default function App() {
  const [user, setUser] = useLocalStorage('@gratibox-user', {});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details" element={<Details />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
