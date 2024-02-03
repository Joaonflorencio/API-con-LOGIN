const express = require('express');
const router = express.Router();

// Datos de usuario ficticios para la demostración
const user = {
  username: 'user1',
  password: 'pass123' // En un caso real, esto debería estar hasheado
};

router.get('/', (req, res) => {
  if (req.session.loggedin) {
    res.redirect('/search');
  } else {
    res.render('login');
  }
});

router.post('/auth', (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    req.session.loggedin = true;
    req.session.username = username;
    res.redirect('/search');
  } else {
    res.send('Incorrect Username and/or Password!');
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

module.exports = router;