import { Request, Response, NextFunction } from 'express';

import coreApi from '../../utils/api/coreApi';
import parser from '../../utils/parser';

export const message = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, utterance, context } = parser.parseKakaoRequestBody(
      req.body
    );
    const coreResponse = await coreApi.message({
      userId,
      utterance: context || utterance,
    });
    res.json(coreResponse);
  } catch (err) {
    next(err);
  }
};
