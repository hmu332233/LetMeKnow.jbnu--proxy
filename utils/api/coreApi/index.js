const axios = require('axios');

exports.message = async ({ userRequest, chat }) => {
  const data = { userRequest, chat };
  const res = await axios.post(`${process.env.CORE_URL}/message`, data);
  return res.data;
};
