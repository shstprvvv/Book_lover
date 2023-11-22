import React from 'react';
import FormMainPage from '../../ui/FormMainPage';

export default function MainPage({ books }) {
  return (
    <div className="row">{books.map((book) => <FormMainPage key={book.id} book={book} />)}</div>
  );
}
