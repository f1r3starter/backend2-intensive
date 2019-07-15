// Core
import express from 'express';

// Instruments
import { authenticate } from '../../utils';
import { get, post } from './route';
import { getByHash, putByHash, deleteByHash } from './hash/route';
import { postKeynote } from './hash/keynotes/route';
import { getKeynoteByHash, deleteKeynoteByHash } from './hash/keynotes/hash/router';
import { postVideo } from './hash/videos/route';
import { getVideoByHash, deleteVideoByHash } from './hash/videos/hash/router';

export const router = express.Router();

router.get('/', get);
router.post('/', [ authenticate ], post);

router.get('/:lessonHash', [ authenticate ], getByHash);
router.put('/:lessonHash', [ authenticate ], putByHash);
router.delete('/:lessonHash', [ authenticate ], deleteByHash);

router.post('/:lessonHash/keynotes', [ authenticate ], postKeynote);
router.get('/:lessonHash/keynotes/:noteHash', [ authenticate ], getKeynoteByHash);
router.delete('/:lessonHash/keynotes/:noteHash', [ authenticate ], deleteKeynoteByHash);

router.post('/:lessonHash/videos', [ authenticate ], postVideo);
router.get('/:lessonHash/videos/:videoHash', [ authenticate ], getVideoByHash);
router.delete('/:lessonHash/videos/:videoHash', [ authenticate ], deleteVideoByHash);

export { router as lessons };
