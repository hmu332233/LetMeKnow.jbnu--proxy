const { setupDB } = require('./../../jest.setup-db');
setupDB();

const { db, CONSTANTS } = require('./info');
const UserWords = require('./model');

describe('models - userWords', () => {
  describe('CONSTANTS', () => {
    test('CONSTANTS가 model에 정상적으로 있음', () => {
      expect(UserWords.CONSTANTS).toEqual(CONSTANTS);
    });
  });

  describe('create', () => {
    test('id 값이 없을 경우 에러', async () => {
      try {
        await UserWords.create({ origin: UserWords.CONSTANTS.ORIGIN.KAKAO, utterance: 'test ' });
        expect(true).toBe(false);
      } catch (err) {
        expect(err.name).toBe('ValidationError');
      }
    });

    test('origin 값이 없을 경우 kakao', async () => {
      try {
        await UserWords.create({ id: 'test' });
        expect(true).toBe(false);
      } catch (err) {
        expect(err.name).toBe('ValidationError');
      }
    });

    test('utterance 값이 없을 경우 ""', async () => {
      const userWord = await UserWords.create({ origin: UserWords.CONSTANTS.ORIGIN.KAKAO, id: 'test' });
      expect(userWord.origin).toBe(UserWords.CONSTANTS.ORIGIN.KAKAO);
      expect(userWord.utterance).toBe('');
    });

    test('origin, id, utterance 있을 경우 정상 처리', async () => {
      const userWord = await UserWords.create({ origin: UserWords.CONSTANTS.ORIGIN.KAKAO, id: 'test', utterance: 'test' });
      expect(userWord.origin).toBe(UserWords.CONSTANTS.ORIGIN.KAKAO);
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
        origin: UserWords.CONSTANTS.ORIGIN.KAKAO,
        id,
        utterance,
        context,
        block,
        params,
      });
      expect(userWord.origin).toBe(UserWords.CONSTANTS.ORIGIN.KAKAO);
      expect(userWord.id).toEqual(id);
      expect(userWord.utterance).toEqual(utterance);
      expect(userWord.context).toEqual(context);
      expect(userWord.block).toEqual(block);
      expect(userWord.params).toEqual(params);
    });
  });
});
