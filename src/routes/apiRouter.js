import express from 'express';
import { Book } from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

router.post('/addbook', async (req, res) => {
  const { nameBook, writer } = req.body;

  try {
    // Check if the book already exists in the database
    const existingBook = await Book.findOne({ where: { nameBook, writer } });

    if (existingBook) {
      // Book already exists, send an error response
      return res.status(400).json({ error: 'Book already exists in the database.' });
    }

    // Book doesn't exist, proceed with creating the book
    await Book.create(req.body);

    res.redirect('/')
  } catch (error) {
    console.error('Error adding book:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  
});


export default router;
