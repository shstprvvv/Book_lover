import express from 'express';
import { Book, Favorites_book, Rating } from '../../db/models';

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
  req.body.user_id = res.locals.user.id;
  res.sendStatus(200);

  try {
    await Favorites_book.create(req.body);
  } catch (error) {
    console.error('Error adding book to favourites:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// router.get('/rating', async (req, res) => {
//   try {
//     console.log('=======>', req.body);
//     const { id } = req.body;
//     const ratingBook = await Rating.findAll({
//       where: {
//         book_id: id,
//       },
//     });

//     res.send(ratingBook);

//     console.log('-=-=--=-=>>>', ratingBook);

//     console.log('=======>', ratingBook);
//   } catch (error) {
//     console.log(error);
//   }
// });


router.delete('/book/:id', async (req, res) => {
  try {
    const { id } = req.params; /* получаем айди из параметра */
    await Book.destroy({ where: { id } }); /* удаляем пост из бд */
    res.sendStatus(200); /* возращаем статус 200 все ок */
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
