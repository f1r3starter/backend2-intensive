const { Strategy, ExtractJwt } = require('passport-jwt');

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:    'secret',
};

export const jwtStrategy = new Strategy(jwtOptions, function(jwt_payload, done) {
    const { email } = jwt_payload;

    if (!email) {
        return done('user not found', false);
    }

    return done(null, { email });
});
