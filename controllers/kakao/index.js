const coreApi = require('../../utils/api/coreApi');

exports.message = async (req, res, next) => {
  const { userRequest, chat } = req.body;
  try {
    const coreResponse = await coreApi.message({ userRequest, chat });
    res.json(coreResponse);
  } catch (err) {
    next(err);
  }
};
