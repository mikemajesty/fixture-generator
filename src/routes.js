import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.status(200).send());

router.use('/*', (req, res) =>
  res.status(404).send()
);

module.exports = router;