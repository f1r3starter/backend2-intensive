// Core
import express from 'express';

// Instruments
import { get, post } from './route';
import { getByHash, putByHash, deleteByHash } from './hash/route';
import { limiter, validator, authenticate } from '../../utils';

// Schema
import { createUser } from '../../schemas';

export const router = express.Router();

router.get('/', [ limiter(5, 60 * 1000) ], get);
router.post('/', [ validator(createUser), authenticate ], post);

router.get('/:userHash',  [ authenticate ], getByHash);
router.put('/:userHash', [ authenticate ], putByHash);
router.delete('/:userHash', [ authenticate ], deleteByHash);

export { router as users };
