import * as _ from 'lodash';

import { Menu, MenuList } from '../../types';

const DAY_KR = ['월', '화', '수', '목', '금', '토', '일'];
const DAY_US = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const mapDayText = (text: string): string => {
  const index = DAY_KR.findIndex((v) => text === v);
  return DAY_US[index];
};

export function normalizeMenus(data: any): MenuList {
  const allMenus: Menu[] = [...data.breakfast, ...data.lunch, ...data.dinner];
  const menuList: MenuList = _.chain(allMenus)
    .groupBy('week')
    .mapKeys((value: any, key: any) => mapDayText(key))
    .value() as MenuList;
  return menuList;
}
