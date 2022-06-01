const passport = require('passport');
const LocalStrategy = require('./strategies/local.strategy');
// Usando estrategia local passportjs
passport.use(LocalStrategy);
