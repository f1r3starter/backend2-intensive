// Core
import express from 'express';

// Instruments
import { authorization } from '../../utils';
import { get, post, enroll, expel } from './route';
import { deleteByHash, getByHash, putByHash } from './hash/route';

const router = express.Router();

router.get('/', get);
router.post('/', [ authorization ], post);
router.post('/enroll', [ authorization ], enroll);
router.post('/expel', [ authorization ], expel);
router.get('/:classHash', [ authorization ], getByHash);
router.put('/:classHash', [ authorization ], putByHash);
router.delete('/:classHash', [ authorization ], deleteByHash);

export { router as classes };
