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
  });
});
