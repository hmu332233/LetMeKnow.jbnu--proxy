const coreApi = require('../../utils/api/coreApi');
const parser = require('../../utils/parser');

exports.message = async (req, res, next) => {
  try {
    const { userId, params } = parser.parseKakaoRequestBody(req.body);
    const newUtterance = Object.values(params).join(' ');
    const coreResponse = await coreApi.message({ userId, utterance: newUtterance });
    res.json(coreResponse);
  } catch (err) {
    next(err);
  }
};
