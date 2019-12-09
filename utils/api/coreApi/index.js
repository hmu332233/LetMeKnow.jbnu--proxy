const axios = require('axios');

exports.message = async ({ userId, utterance }) => {
  const data = {
    userRequest: {
      user: {
        id: userId,
      },
      utterance,
    },
  };
  const res = await axios.post(`${process.env.CORE_URL}/message`, data);
  return res.data;
};
