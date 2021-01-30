import * as _ from 'lodash';

import { Menu, MenuList } from '../../types';

import { mapDayText } from '../../utils/mapper';

export function normalizeData(data: any): MenuList {
  const { breakfast = [], lunch, dinner } = data;
  const allMenus: Menu[] = [...breakfast, ...lunch, ...dinner];
  const menuList: MenuList = _.chain(allMenus)
    .groupBy('week')
    .mapKeys((value: any, key: any) => mapDayText(key))
    .value() as MenuList;
  return menuList;
}
