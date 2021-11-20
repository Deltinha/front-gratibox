/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import GlobalStyle from './styles/GloblalStyle';
import Theme from './styles/Theme';
import useLocalStorage from './hooks/useLocalStorage';
import UserContext from './contexts/userContext';

export default function App() {
  const [user, setUser] = useLocalStorage('@gratibox-user', {});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <GlobalStyle />
        <Theme />
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
