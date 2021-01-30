import { Request, Response, NextFunction } from 'express';

import managementApi from '../../libs/managementApi';
import coreApi from '../../libs/coreApi';
import { STORE, DORMITORY } from '../../types';

const isStore = (id: STORE | DORMITORY): id is STORE =>
  Object.values(STORE).includes(id);

type RequestQuery = { id: STORE | DORMITORY };
export const getMenus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.query as RequestQuery;
    let menuList = {};
    if (isStore(id)) {
      menuList = await managementApi.getMenus(id);
    } else {
      menuList = await coreApi.getMenus(id);
    }
    res.json(menuList);
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};
