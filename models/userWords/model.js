const { db, CONSTANTS } = require('./info');

exports.CONSTANTS = CONSTANTS;

exports.create = ({ origin, id, utterance, context, block, params }) => {
  return db.user_words.create({ origin, id, utterance, context, block, params });
};
