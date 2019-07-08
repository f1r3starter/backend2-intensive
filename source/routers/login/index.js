// Core
import express from 'express';
import passport from 'passport';

// Instruments
import { get, post, callback } from './route';

const router = express.Router();

router.get('/', get);
router.post('/', passport.authenticate('github', { scope: [ 'user:email' ] }), post);
router.get(
    '/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    callback,
);

export { router as login };
