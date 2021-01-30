const express = require('express');
const router = express.Router();

import controller from '../../../controllers';

router.get('/menus', controller.page.getMenus);

module.exports = router;
