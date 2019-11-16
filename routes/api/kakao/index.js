const express = require('express');
const router = express.Router();

const controller = require('../../../controllers');

router.get('/message', controller.kakao.message);

module.exports = router;
