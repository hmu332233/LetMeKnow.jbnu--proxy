const axios = require('axios');

const message = async ({
  userId,
  utterance,
}: {
  userId: string;
  utterance: object;
}) => {
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

export default {
  message,
};
