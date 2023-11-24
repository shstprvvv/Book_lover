import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import MainPage from './page/MainPage';
import SignUpPage from './page/SignUpPage';
import LoginPage from './page/LoginPage';
import AccountPage from './page/AccountPage';
import AddBook from './page/AddBook';
import BookPage from './page/BookPage';

export default function App({

  books, favouriteBooks, userBooks, oneBook, comments, user,
}) {
  const style = {
    backgroundImage:
      "url('https://images.wallpaperscraft.ru/image/single/gradient_abstraktsiia_fon_310094_1024x768.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<MainPage books={books} user={user} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/account"
          element={<AccountPage favouriteBooks={favouriteBooks} userBooks={userBooks} />}
        />
        <Route path="/addbook" element={<AddBook />} />


        <Route path="/bookpage/:id" element={<BookPage oneBook={oneBook} comments={comments} user={user} />} />


      </Routes>
    </>
  );
}
