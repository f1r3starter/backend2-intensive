// Core
import express from 'express';

// Instruments
import { authorization } from '../../utils';
import { get, post } from './route';
import { getByHash, putByHash, deleteByHash } from './hash/route';
import { postKeynote } from './hash/keynotes/route';
import { getKeynoteByHash, deleteKeynoteByHash } from './hash/keynotes/hash/router';
import { postVideo } from './hash/videos/route';
import { getVideoByHash, deleteVideoByHash } from './hash/videos/hash/router';

export const router = express.Router();

router.get('/', get);
router.post('/', [ authorization ], post);

router.get('/:lessonHash', [ authorization ], getByHash);
router.put('/:lessonHash', [ authorization ], putByHash);
router.delete('/:lessonHash', [ authorization ], deleteByHash);

router.post('/:lessonHash/keynotes', [ authorization ], postKeynote);
router.get('/:lessonHash/keynotes/:noteHash', [ authorization ], getKeynoteByHash);
router.delete('/:lessonHash/keynotes/:noteHash', [ authorization ], deleteKeynoteByHash);

router.post('/:lessonHash/videos', [ authorization ], postVideo);
router.get('/:lessonHash/videos/:videoHash', [ authorization ], getVideoByHash);
router.delete('/:lessonHash/videos/:videoHash', [ authorization ], deleteVideoByHash);

export { router as lessons };
