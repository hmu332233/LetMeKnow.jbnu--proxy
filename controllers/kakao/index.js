const coreApi = require('../../utils/api/coreApi');
const parser = require('../../utils/parser');

exports.message = async (req, res, next) => {
  const { userId, utterance } = parser.parseKakaoRequestBody(req.body);
  try {
    const coreResponse = await coreApi.message({ userId, utterance });
    res.json(coreResponse);
  } catch (err) {
    next(err);
  }
};
