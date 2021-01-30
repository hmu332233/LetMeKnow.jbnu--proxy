export interface Menu {
  place: string;
  week: string;
  time: string;
  category: string;
  menus: string;
}

export interface MenuList {
  [key: string]: Array<Menu>;
}

export enum DORMITORY {
  CHAM = 'cham',
  BASIC = 'basic',
  SPECIAL = 'special',
}

export enum STORE {
  MEDI = 'medi',
  JINSU = 'jinsu',
  STUDENTHALL = 'studentHall',
  JUNGDAM = 'jungdam',
  HU = 'hu',
}
