const axios = require('axios');

const coreAxios = axios.create({
  baseURL: process.env.MANAGEMENT_URL,
});

export enum STORE {
  MEDI = 'medi',
  JINSU = 'jinsu',
  STUDENTHALL = 'studentHall',
  JUNGDAM = 'jungdam',
  HU = 'hu',
}

const getMenus = async (storeId: STORE) => {
  const options = {};
  const res = await coreAxios.get(`/api/v1/menus/${storeId}`, options);
  return res.data;
};

export default {
  getMenus,
};
