import React, { useState } from 'react';
import FormMainPage from '../../ui/FormMainPage';
import ModalWindow from '../../ui/Modal';

export default function MainPage({ books }) {
  const [modalContent, setModalContent] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="row">
        {books.map((book) => (
          <FormMainPage
            key={book.id}
            book={book}
            setModalContent={setModalContent}
            handleShow={handleShow}
          />
        ))}
      </div>
      <div className="col-12">
        <ModalWindow {...modalContent} setShow={setShow} handleClose={handleClose} show={show} />
      </div>
    </>
  );
}
