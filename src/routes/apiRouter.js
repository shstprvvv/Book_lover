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

router.delete('/book/:id', async (req, res) => {
  /* энпоинт удаления */
  try {
    console.log(req.params);
    const { id } = req.params; /* получаем айди из параметра */
    await Book.destroy({ where: { id } }); /* удаляем пост из бд */
    res.sendStatus(200); /* возращаем статус 200 все ок */
  } catch (err) {
    console.log(err);
  }
});

export default router;
