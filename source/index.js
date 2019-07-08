import express from 'express';
import passport from 'passport';
import path from 'path';

// Instruments
import { app } from './server';
import { getPort, logger, errorHandler, notFoundHandler, sessionHandler, githubStrategy } from './utils';

// Routers
import { users, login, logout, lessons, classes } from './routers';

const PORT = getPort();

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});
passport.use(githubStrategy);


app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.all('*', [ logger ]);

app.use(express.json({ limit: '10kb' }));
app.use(sessionHandler);
app.use(passport.initialize());

app.use('/users', users);
app.use('/login', login);
app.use('/logout', logout);
app.use('/lessons', lessons);
app.use('/classes', classes);
app.use(notFoundHandler);
app.use(errorHandler);
app.listen(PORT);
