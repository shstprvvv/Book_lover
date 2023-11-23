import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import MainPage from './page/MainPage';
import SignUpPage from './page/SignUpPage';
import LoginPage from './page/LoginPage';
import AccountPage from './page/AccountPage';
import AddBook from './page/AddBook';
import BookPage from './page/BookPage';

export default function App({ books }) {
  const style = {
    backgroundImage:
      "url('https://images.wallpaperscraft.ru/image/single/gradient_abstraktsiia_fon_310094_1024x768.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  return (
    <div style={style}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage books={books} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/bookpage" element={<BookPage />} />
      </Routes>
    </div>
  );
}
