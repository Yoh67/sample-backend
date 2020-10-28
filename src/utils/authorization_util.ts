import passport from 'passport';
import {BasicStrategy} from 'passport-http';

// Credential mapping
const users = [
    {
        username: process.env.CLIENT_ID,
        password: process.env.CLIENT_SECRET
    }
];

// BasicVerifyFunction Override
function VerifyUser(username: any, callback: any) {
    process.nextTick(() => {
        for (let i = 0, length = users.length; i < length; i++) {
            const userRecord = users[i];
            if (username === userRecord.username) {
                return callback(null, userRecord)
            }
        }
        return callback(null, null);
    });
};

// BasicAuth Strategy
export function InitializeAuthorization() {
    passport.use(new BasicStrategy(
        {},
        (username, password, done) => {
            VerifyUser(username, (error: any, user: any) => {
                if (error) { return done(error); }
                if (!user) { return done(null, false); }
                if (user.password !== password) { return done(null, false); }
                return done(null, user);
          });
        }
      ));
}