// Core
import express from 'express';

// Instruments
import { post } from './route';

const router = express.Router();

router.post('/', post);

export { router as logout };
