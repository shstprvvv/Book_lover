import express from 'express';
import { Book, Rating } from '../../db/models';

const bookPageRouter = express.Router();

bookPageRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const oneBook = await Book.findByPk(id, { include: Rating }); // include model Rating
    res.render('Layout', { oneBook });
  } catch (error) {
    console.log(error);
  }
});

export default bookPageRouter;
