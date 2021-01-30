import * as _ from 'lodash';

import { Menu, MenuList } from '../../types';

import { mapDayText } from '../../utils/mapper';

const normalizeMenus = (menus: any, place = '참빛관'): Menu[] => {
  return menus.reduce((arr: Menu[], menu: any) => {
    const { breakfast, lunch, dinner, week } = menu;
    return [
      ...arr,
      {
        place,
        week,
        time: '조식',
        menus: breakfast,
      },
      {
        place,
        week,
        time: '중식',
        menus: lunch,
      },
      {
        place,
        week,
        time: '석식',
        menus: dinner,
      },
    ];
  }, []);
};

export function normalizeData(data: { menus: any }, place: string): MenuList {
  const allMenus: Menu[] = normalizeMenus(data.menus, place);

  const menuList: MenuList = _.chain(allMenus)
    .groupBy('week')
    .mapKeys((value: any, key: any) => mapDayText(key))
    .value() as MenuList;

  return menuList;
}
