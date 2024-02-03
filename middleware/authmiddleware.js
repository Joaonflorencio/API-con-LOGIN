const hashedSecret = require('../crypto/config')
function isLoggedIn(req, res, next) {
    // Aquí iría la lógica para verificar si el usuario está logueado
    next();
  }
  
  module.exports = { isLoggedIn };