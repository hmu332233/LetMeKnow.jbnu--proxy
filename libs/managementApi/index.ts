import axios from 'axios';

import { normalizeData } from './utils';
import { STORE } from '../../types';

const managementAxios = axios.create({
  baseURL: process.env.MANAGEMENT_URL,
});

const getMenus = async (storeId: STORE) => {
  const options = {};
  const res = await managementAxios.get(`/api/v1/menus/${storeId}`, options);

  if (res.data.success) {
    return normalizeData(res.data.data);
  }
  return {};
};

export default {
  getMenus,
};
