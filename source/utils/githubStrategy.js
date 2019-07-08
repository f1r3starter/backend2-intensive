import { getGithubCredentials } from './env';

const { Strategy } = require('passport-github2');
const creds = getGithubCredentials();

export const githubStrategy = new Strategy({
    clientID:     creds.GITHUB_ID,
    clientSecret: creds.GITHUB_SECRET,
    callbackURL:  creds.GITHUB_CB,
},
function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
});
