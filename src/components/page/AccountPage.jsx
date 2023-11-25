import React, { useState } from 'react';
import FormMainPage from '../../ui/FormMainPage';
import ModalWindow from '../../ui/Modal';
import { Button } from 'react-bootstrap';
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
  const [modalContent, setModalContent] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const style = {
    backgroundImage:
      "url('https://img1.akspic.ru/crops/5/9/9/2/4/142995/142995-minimalizm-cvet-purpur-rozovyj-artist-3840x2160.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '2000px',
  };
  return (
    <div style={style}>
      <div>
        <Button variant="light" size="lg">
          Список ваших книг
        </Button>
      </div>
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
        {show && <ModalWindow {...modalContent} setShow={setShow} handleClose={handleClose} show={show} />}
      </div>
      <div>
        <Button variant="light" size="lg">
          Ваши любимые книги
        </Button>
      </div>
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
    </div>
  );
}