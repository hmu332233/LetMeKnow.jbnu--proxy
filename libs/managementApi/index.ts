import axios from 'axios';

import { normalizeMenus } from './utils';

const managementAxios = axios.create({
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
  const res = await managementAxios.get(`/api/v1/menus/${storeId}`, options);

  if (res.data.success) {
    return normalizeMenus(res.data.data);
  }
  return {};
};

export default {
  getMenus,
};
