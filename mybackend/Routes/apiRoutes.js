const express = require('express');
const router = express.Router();

const User = '(../Models/useSchema)';

router.get('/', (req, res) => {
  res.send('Welcome from router');
});

module.exports = router;
