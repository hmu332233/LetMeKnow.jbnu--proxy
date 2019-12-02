const UserWords = require('../../models/userWords');
const { parseKakaoRequestBody } = require('../../utils/parser');

exports.saveKakaoLog = async (req, res, next) => {
  const { userId, utterance, block } = parseKakaoRequestBody(req.body);
  await UserWords.create({
    origin: UserWords.CONSTANTS.ORIGIN.KAKAO,
    id: userId,
    utterance: utterance.trim(),
    block,
  });
  next();
};
