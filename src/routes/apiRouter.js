import express from 'express';
import { Book } from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

router.post('/addbook', async (req, res) => {
  await Book.create(req.body);
  // await book.create(req.body);
  // res.redirect('/');
  res.sendStatus(200);
});

export default router;
