import React, { useState } from 'react';
import FormMainPage from '../../ui/FormMainPage';
import ModalWindow from '../../ui/Modal';

export default function AccountPage({ favouriteBooks, userBooks }) {
  const [newBooks, setNewBooks] = useState(favouriteBooks);

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
  // return (
  //   <div className="row">{newBooks.map((book) => <FormMainPage key={book.id} book={book} deleteHandler={deleteHandler} />)}</div>

  const [modalContent, setModalContent] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {userBooks && (
        <>
          <div>Список ваших книг</div>
          <div className="row">
            {userBooks.map((book) => (
              <FormMainPage
                key={book.id}
                book={book}
                setModalContent={setModalContent}
                handleShow={handleShow}
                deleteHandler={deleteHandler}
              />
            ))}
          </div>
          <div className="col-12">
            <ModalWindow
              {...modalContent}
              setShow={setShow}
              handleClose={handleClose}
              show={show}
            />
          </div>
        </>
      )}
      <div>Ваши любимые книги</div>
      <div className="row">
        {newBooks.map((book) => (
          <FormMainPage
            key={book.id}
            book={book}
            setModalContent={setModalContent}
            handleShow={handleShow}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>
    </>
  );
}
