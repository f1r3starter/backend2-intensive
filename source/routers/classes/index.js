// Core
import express from 'express';

// Instruments
import { get, post, enroll, expel } from './route';
import { deleteByHash, getByHash, putByHash } from './hash/route';

const router = express.Router();

router.get('/', get);
router.post('/', post);
router.post('/enroll', enroll);
router.post('/expel', expel);
router.get('/:classHash', getByHash);
router.put('/:classHash', putByHash);
router.delete('/:classHash', deleteByHash);
