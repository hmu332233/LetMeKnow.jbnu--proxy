import { setupDB } from '../../configs/jest.setup-db';
setupDB();

import db from './db';
import UserWords, { ORIGIN } from './index';

describe('models - userWords', () => {
  describe('create', () => {
    test('id 값이 없을 경우 에러', async () => {
      try {
        await UserWords.create({
          origin: ORIGIN.KAKAO,
          id: undefined,
          utterance: 'test ',
        });
        expect(true).toBe(false);
      } catch (err) {
        expect(err.name).toBe('ValidationError');
      }
    });

    test('origin 값이 없을 경우 에러', async () => {
      try {
        await UserWords.create({ origin: undefined, id: 'test' });
        expect(true).toBe(false);
      } catch (err) {
        expect(err.name).toBe('ValidationError');
      }
    });

    test('utterance 값이 없을 경우 ""', async () => {
      const userWord = await UserWords.create({
        origin: ORIGIN.KAKAO,
        id: 'test',
      });
      expect(userWord.origin).toBe(ORIGIN.KAKAO);
      expect(userWord.utterance).toBe('');
    });

    test('origin, id, utterance 있을 경우 정상 처리', async () => {
      const userWord = await UserWords.create({
        origin: ORIGIN.KAKAO,
        id: 'test',
        utterance: 'test',
      });
      expect(userWord.origin).toBe(ORIGIN.KAKAO);
      expect(userWord.id).toBe('test');
      expect(userWord.utterance).toBe('test');
    });

    test('모든 파라미터가 정상적으로 저장', async () => {
      const id = 'test';
      const utterance = 'test';
      const context = 'test';
      const block = { id: 'test', name: 'test' };
      const params = { test: 'test', test2: 'test2' };

      const userWord = await UserWords.create({
        origin: ORIGIN.KAKAO,
        id,
        utterance,
        context,
        block,
        params,
      });
      expect(userWord.origin).toBe(ORIGIN.KAKAO);
      expect(userWord.id).toEqual(id);
      expect(userWord.utterance).toEqual(utterance);
      expect(userWord.context).toEqual(context);
      expect(userWord.block).toEqual(block);
      expect(userWord.params).toEqual(params);
    });
  });
});
