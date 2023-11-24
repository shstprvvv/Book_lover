import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

export default function ModalWindow({
  nameBook, writer, img, handleClose, show, id
}) {

  const [bookData, setBookData] = useState({ nameBook: nameBook, writer: writer, img: img })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    formData.id = id
    console.log(formData); 

    try {
      const response = await axios.patch('/api/editbook', formData)

    } catch (error) {

      console.error('Error adding book:', error.message);
    }
    window.location.href ='/account'
  };

  console.log('newbook-', bookData.nameBook)
  return (
    <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={img} alt={nameBook} style={{ maxWidth: '100%', height: 'auto' }} />
          </Modal.Body>
          <Modal.Body>
            <p>{nameBook}</p>
            <p>{writer}</p>
            
            <Form onSubmit={handleSubmit}>
              <p>Название книги</p>
              <input name="nameBook" placeholder="Название книги" defaultValue={bookData.nameBook}></input>
              <p>Имя автора</p>
              <input name="writer" placeholder="Имя автора" defaultValue={bookData.writer}></input>
              <p>Обложка</p>
              <input name="img" placeholder="Обложка" defaultValue={bookData.img}></input><br></br> <br></br>
              <Button variant="primary" type="submit">
              Save Changes
            </Button>
              </Form>
            {/* <p>Комментарий</p><input placeholder="Обложка" defaultValue={bookData.owner_comment}></input></div> */}
          </Modal.Body>
         
        </Modal>
      
    </>
  );
}

