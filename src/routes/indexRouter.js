import express from 'express';
import Book from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const books = await Book.findAll();
  const initState = { books };
  res.render('Layout', initState);
});

router.get('/signup', (req, res) => {
  res.render('Layout');
});

router.get('/login', (req, res) => {
  res.render('Layout');
});

router.get('/account', (req, res) => {
  res.render('Layout');
});

router.get('/addbook', (req, res) => {
  res.render('Layout');
});

router.get('/bookpage', (req, res) => {
  res.render('Layout');
});

export default router;
