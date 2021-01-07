const express = require('express');
const router = express.Router();

router.use('/v1/kakao', require('./kakao'));

module.exports = router;
