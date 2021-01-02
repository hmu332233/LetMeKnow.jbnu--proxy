const express = require('express');
const router = express.Router();

import * as controller from '../../../controllers';
import { log } from '../../../middlewares';

router.post('/message', log.saveKakaoLog, controller.kakao.message);

module.exports = router;
