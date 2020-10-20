import passport, { Strategy } from 'passport';
import {BasicStrategy} from 'passport-http';

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

const users = [
    { username: clientId, password: clientSecret }
];

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

export function InitializeAuthorization() {
    passport.use(new BasicStrategy(
        {},
        (username, password, done) => {
            VerifyUser(username, (error: any, user: any) => {
                console.log(
                    username + '\n'+
                    user + '\n' +
                    user.password + '\n' +
                    password);
                if (error) { return done(error); }
                if (!user) { return done(null, false); }
                if (user.password !== password) { return done(null, false); }
                return done(null, user);
          });
        }
      ));
}