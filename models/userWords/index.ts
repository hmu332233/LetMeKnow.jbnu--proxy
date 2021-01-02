import db from './db';

export enum ORIGIN {
  KAKAO = 'kakao',
}

type UserWord = { origin: ORIGIN, id: string, utterance: string, context: string, block: string, params?: string };
const create = (userWord: UserWord) => {
  return db.create(userWord);
};

export default {
  create,
}
