import { Request, Response, NextFunction } from 'express';

import UserWords, { ORIGIN } from '../../models/userWords';
import { parseKakaoRequestBody } from '../../utils/parser';

export const saveKakaoLog = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId, utterance, context, block } = parseKakaoRequestBody(req.body);
  UserWords.create({
    origin: ORIGIN.KAKAO,
    id: userId,
    utterance: utterance.trim(),
    context,
    block,
  });
  next();
};
