const axios = require('axios');

const coreAxios = axios.create({
  baseURL: process.env.CORE_URL,
});

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
  const res = await coreAxios.get(`/message`, data);
  return res.data;
};

const getMenus = async () => {
  const res = await coreAxios.get(`/api/menu_domitory/menus`);
  return res.data;
};

export default {
  message,
  getMenus,
};
