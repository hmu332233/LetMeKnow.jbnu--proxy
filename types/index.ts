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
