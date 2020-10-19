import passport, { Strategy } from 'passport';
import {BasicStrategy} from 'passport-http';

function VerifyUser(username: any, callback: any) {
    if (username === process.env.CLIENT_ID) {
        return callback(null, username)
    } else {
        return callback(null, null);
    }
}

export function InitializeAuthorization() {
    passport.use(new BasicStrategy(
        (username, password, done) => {
            VerifyUser({ username }, (error: any, user: any) => {
            if (error) { return done(error); }
            if (!user) { return done(null, false); }
            if (user.password !== password) { return done(null, false); }
            return done(null, user);
          });
        }
      ));
}