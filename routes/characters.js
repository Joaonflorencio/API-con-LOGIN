const express = require('express');
const axios = require('axios');
const router = express.Router();

function isLoggedIn(req, res, next) {
  if (req.session.loggedin) {
    next();
  } else {
    res.redirect('/');
  }
}

router.get('/search', isLoggedIn, (req, res) => {
  res.render('search');
});

router.get('/character/:name', isLoggedIn, async (req, res) => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${req.params.name}`);
    const character = response.data.results[0];
    res.render('character', { character });
  } catch (error) {
    res.send('Character not found!');
  }
});

module.exports = router;