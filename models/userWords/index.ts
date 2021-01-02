import db from './db';

export enum ORIGIN {
  KAKAO = 'kakao',
}

type UserWord = { origin: ORIGIN, id: string, utterance?: string, context?: string, block?: object, params?: object };
const create = (userWord: UserWord) => {
  return db.create(userWord);
};

export default {
  create,
}
