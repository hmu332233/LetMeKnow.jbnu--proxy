const express = require('express');
const router = express.Router();

router.use('/v1/kakao', require('./kakao'));
router.use('/v1/page', require('./page'));

module.exports = router;
