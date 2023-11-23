import express from 'express';
import { Book, Favorites_book } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const books = await Book.findAll();
  // console.log(books);
  const initState = { books };
  res.render('Layout', initState);
});

router.get('/signup', (req, res) => {
  res.render('Layout');
});

router.get('/login', (req, res) => {
  res.render('Layout');
});

router.get('/account', async (req, res) => {
  const books = await Book.findAll({
    include: [
      {
        model: Favorites_book,
        where: {
          user_id: res.locals.user.id,
        },
      },
    ],
  });
  console.log(books);
  const initState = { books };

  console.log(res.locals.user.id);
  res.render('Layout', initState);
});

router.get('/addbook', (req, res) => {
  res.render('Layout');
});

router.get('/bookpage', (req, res) => {
  res.render('Layout');
});

export default router;
