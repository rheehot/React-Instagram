const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { users } = require('./models');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'password',
    session: true,
    passReqToCallback: true,
  }, (id, password, done) => {
    users.findOne({ where: { 'user_name': id }})
      .then((user) => {
        if (!user) {
          return done(null, false, { message: '존재하지 않는 아이디입니다'});
        }
        const dbPassword = user.get('user_password');
        if (dbPassword === password) {
          return done(null, user);
        } else {
          return done(null, false, { message: '비밀번호가 틀렸습니다' });
        }
      })
      .catch((err) => done(err));
  }));
}