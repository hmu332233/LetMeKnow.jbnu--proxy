const UserWords = require('../../models/userWords');
const { parseKakaoRequestBody } = require('../../utils/parser');

exports.saveKakaoLog = (req, res, next) => {
  const { userId, utterance, context, block } = parseKakaoRequestBody(req.body);
  UserWords.create({
    origin: UserWords.CONSTANTS.ORIGIN.KAKAO,
    id: userId,
    utterance: utterance.trim(),
    context,
    block,
  });
  next();
};
