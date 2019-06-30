// Core
import express from 'express';

// Instruments
import { get, post } from './route';
import { getByHash, putByHash, deleteByHash } from './hash/route';
import { limiter, validator, authorization } from '../../utils';

// Schema
import { createUser } from '../../schemas';

export const router = express.Router();

router.get('/', [ limiter(5, 60 * 1000) ], get);
router.post('/', [ validator(createUser), authorization ], post);

router.get('/:userHash',  [ authorization ], getByHash);
router.put('/:userHash', [ authorization ], putByHash);
router.delete('/:userHash', [ authorization ], deleteByHash);

export { router as users };
