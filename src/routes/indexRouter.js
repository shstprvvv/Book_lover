import express from 'express';
import { Book, Favorites_book, Rating } from '../../db/models';
import { verifyAccessToken } from '../middlewares/verifyTokens';

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

router.get('/account', verifyAccessToken, async (req, res) => {
  const favouriteBooks = await Book.findAll({
    include: [
      {
        model: Favorites_book,
        where: {
          user_id: res.locals.user.id,
        },
      },
    ],
  });

  const userBooks = await Book.findAll({
    where: {
      user_id: res.locals.user.id,
    },
  });
  const initState = { favouriteBooks, userBooks };

  res.render('Layout', initState);
});

router.get('/addbook', (req, res) => {
  res.render('Layout');
});

router.get('/bookpage', (req, res) => {
  res.render('Layout');
});

export default router;
