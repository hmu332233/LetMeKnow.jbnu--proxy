import { Request, Response, NextFunction } from 'express';

import managementApi, { STORE } from '../../libs/managementApi';
// import parser from '../../utils/parser';

type RequestQuery = { store: STORE };
export const getMenus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { store } = req.query as RequestQuery;
    const response = await managementApi.getMenus(store);
    res.json(response);
  } catch (err) {
    next(err);
  }
};
