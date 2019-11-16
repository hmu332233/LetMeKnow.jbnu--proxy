const { db } = require('./info');

exports.create = ({ id, content }) => {
  return db.user_words.create({ id, content });
};
