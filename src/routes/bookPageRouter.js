import express from 'express';

import { Book, Comment, User, Rating } from '../../db/models';


const bookPageRouter = express.Router();

bookPageRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const oneBook = await Book.findByPk(id, { include: Rating }); // include model Rating
    
    const comments = await Comment.findAll({
      where: {
        book_id: Number(req.params.id),
      },
      include: [
        {
          model: User, // Assuming your User model is named 'User'
          attributes: ['name'], // Specify the attributes you want to retrieve from the Users table
        },
      ],
    });
    res.render('Layout', { oneBook, comments });

  } catch (error) {
    console.log(error);
  }
});

export default bookPageRouter;
