import express from 'express';
import { Book } from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

router.post('/addbook', async (req, res) => {
  const { nameBook, writer } = req.body;
  req.body.user_id = res.locals.user.id;

  try {
    // Check if the book already exists in the database
    const existingBook = await Book.findOne({ where: { nameBook, writer } });

    if (existingBook) {
      // Book already exists, send an error response
      return res.status(400).json({ error: 'Book already exists in the database.' });
    }

    // Book doesn't exist, proceed with creating the book
    await Book.create(req.body);

    res.redirect('/');
  } catch (error) {
    console.error('Error adding book:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.post('/add-to-favorites', async (req, res) => {
  const { nameBook, writer } = req.body;
  req.body.user_id = res.locals.user.id;

  try {
    // Check if the book already exists in the database
    const existingBook = await Book.findOne({ where: { nameBook, writer } });

    if (existingBook) {
      // Book already exists, send an error response
      return res.status(400).json({ error: 'Book already exists in the database.' });
    }

    // Book doesn't exist, proceed with creating the book
    await Book.create(req.body);

    res.redirect('/');
  } catch (error) {
    console.error('Error adding book:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/book/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Book.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

// router.get('/bookpage/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const oneBook = await Book.findByPk(id);
//     res.render('Layout', { oneBook });
//   } catch (error) {
//     console.log(error);
//   }
// });

export default router;
