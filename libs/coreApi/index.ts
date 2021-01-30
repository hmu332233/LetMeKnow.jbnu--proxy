import axios from 'axios';

import { normalizeData } from './utils';
import { DORMITORY } from '../../types';

const coreAxios = axios.create({
  baseURL: process.env.CORE_URL,
});

const DORMITORY_NAME = {
  [DORMITORY.CHAM]: '참빛관',
  [DORMITORY.BASIC]: '직영관',
  [DORMITORY.SPECIAL]: '특성화',
};

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
  const res = await coreAxios.post(`/message`, data);
  return res.data;
};

const getMenus = async (domitoryId: DORMITORY) => {
  const res = await coreAxios.get(`/api/menu_domitory/menus`);
  const menusData = res.data[domitoryId];
  return normalizeData(menusData, DORMITORY_NAME[domitoryId]);
};

export default {
  message,
  getMenus,
};
