import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FormMainPage2 from '../../ui/FormMainPage2';
import ModalWindow from '../../ui/Modal';
// import { Display } from 'react-bootstrap-icons';

export default function MainPage({ books, user }) {
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
  const [modalContent, setModalContent] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Carousel style={{ width: '400px' }}>
          <Carousel.Item>
            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTSNy4vaJfc57vyaG7CKBWI6TUKaLWUCnQbsdJyup5RhC-h3Jq_pJR7tkYaf-ehE1G_0gSTplVvjXcIKBwJQ46Lse-xY4fKzx8-faQE4i4&usqp=CAE" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTS99g0c09uXTOe2qCOHIGMY28jKTZZlSt6OBpS-0oYyd1qwP-P_5YdoJ_hvh977Ww_PNO5we-phX2YS4_W_Aiy_i0RrXFCXF0DnWJLioAqm1XHnMjeZTc-&usqp=CAE" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcROuZl50ycUssVuJ18nwbPisYJt80xf-nQtTHEEOAiLLuFSXG66j3JR6w75q5Fye5VjD7oZmqdYdpmlYtdJhyRQCkHsRGQ69TeQ8xF1PJo&usqp=CAE" />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="row">
        {newBooks.map((book) => (
          <FormMainPage2
            user={user}
            key={book.id}
            book={book}
            setModalContent={setModalContent}
            handleShow={handleShow}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>
      <div className="col-12">
        <ModalWindow {...modalContent} setShow={setShow} handleClose={handleClose} show={show} />
      </div>
    </>
  );
}
