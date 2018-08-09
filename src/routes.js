import express from 'express';
import service from './services/fixture';

const router = express.Router();

router.get('/', (req, res) => service().then(s => res.send(s)));

router.use('/*', (req, res) => res.status(404).send() );

export default router;