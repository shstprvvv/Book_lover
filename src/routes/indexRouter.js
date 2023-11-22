import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('Layout');
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
