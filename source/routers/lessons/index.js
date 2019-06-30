// Core
import express from 'express';

// Instruments
import { get, post } from './route';
import { getByHash, putByHash, deleteByHash } from './hash/route';
import { postKeynote } from './hash/keynotes/route';
import { getKeynoteByHash, deleteKeynoteByHash } from './hash/keynotes/hash/router';
import { postVideo } from './hash/videos/route';
import { getVideoByHash, deleteVideoByHash } from './hash/videos/hash/router';

export const router = express.Router();

router.get('/', get);
router.post('/', post);

router.get('/:lessonHash', getByHash);
router.put('/:lessonHash', putByHash);
router.delete('/:lessonHash', deleteByHash);

router.post('/:lessonHash/keynotes', postKeynote);
router.get('/:lessonHash/keynotes/:noteHash', getKeynoteByHash);
router.delete('/:lessonHash/keynotes/:noteHash', deleteKeynoteByHash);

router.post('/:lessonHash/videos', postVideo);
router.get('/:lessonHash/videos/:videoHash', getVideoByHash);
router.delete('/:lessonHash/videos/:videoHash', deleteVideoByHash);

export { router as lessons };
