import express from 'express';
import { Book } from '../../db/models';

const bookPageRouter = express.Router();

bookPageRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const oneBook = await Book.findByPk(id);
    console.log(oneBook, '------------------------------>onebook');
    res.render('Layout', { oneBook });
  } catch (error) {
    console.log(error);
  }
});

export default bookPageRouter;
