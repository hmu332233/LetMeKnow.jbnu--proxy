const coreApi = require('../../utils/api/coreApi');
const parser = require('../../utils/parser');

exports.message = async (req, res, next) => {
  try {
    const { userId, context } = parser.parseKakaoRequestBody(req.body);
    const coreResponse = await coreApi.message({ userId, utterance: context });
    res.json(coreResponse);
  } catch (err) {
    next(err);
  }
};
