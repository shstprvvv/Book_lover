import React, { useState } from 'react';
import FormMainPage from '../../ui/FormMainPage';

export default function MainPage({ books }) {
  // console.log('---------', books);
  const [newBooks, setNewBooks] = useState(books);

  const deleteHandler = (id) => {
    // e.preventDefault();

    fetch(`/api/book/${id}`, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
    }).then((res) => {
      if (res.ok) {
        const delPost = newBooks.filter((el) => el.id !== id);
        setNewBooks(delPost);
      }
    });
  };
  return (
    <div className="row">{newBooks.map((book) => <FormMainPage key={book.id} book={book} deleteHandler={deleteHandler} />)}</div>
  );
}
