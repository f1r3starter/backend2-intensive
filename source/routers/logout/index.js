// Core
import express from 'express';

// Instruments
import { post } from './route';
import { authorization } from '../../utils';

const router = express.Router();

router.post('/', [ authorization ], post);

export { router as logout };
