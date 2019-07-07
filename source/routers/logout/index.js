// Core
import express from 'express';

// Instruments
import { post } from './route';
import { authenticate } from '../../utils';

const router = express.Router();

router.post('/', [ authenticate ], post);

export { router as logout };
