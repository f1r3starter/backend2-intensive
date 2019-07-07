// Core
import express from 'express';

// Instruments
import { authenticate } from '../../utils';
import { get, post, enroll, expel } from './route';
import { deleteByHash, getByHash, putByHash } from './hash/route';

const router = express.Router();

router.get('/', get);
router.post('/', [ authenticate ], post);
router.post('/enroll', [ authenticate ], enroll);
router.post('/expel', [ authenticate ], expel);
router.get('/:classHash', [ authenticate ], getByHash);
router.put('/:classHash', [ authenticate ], putByHash);
router.delete('/:classHash', [ authenticate ], deleteByHash);

export { router as classes };
