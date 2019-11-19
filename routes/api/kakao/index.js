const express = require('express');
const router = express.Router();

const controller = require('../../../controllers');

router.post('/message', controller.kakao.message);

module.exports = router;
