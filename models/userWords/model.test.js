const { setupDB } = require('./../../jest.setup-db');
setupDB();

const { db } = require('./info');
const UserWords = require('./model');

describe('models - userWords', () => {
  describe('create', () => {
    test('id 값이 없을 경우 에러', async () => {
      try {
        await UserWords.create({ content: 'test ' });
        expect(true).toBe(false);
      } catch (err) {
        expect(err.name).toBe('ValidationError');
      }
    });

    test('content 값이 없을 경우 ""', async () => {
      const userWord = await UserWords.create({ id: 'test' });
      expect(userWord.content).toBe('');
    });

    test('id와 content가 있을 경우 정상 처리', async () => {
      const userWord = await UserWords.create({ id: 'test', content: 'test' });
      expect(userWord.id).toBe('test');
      expect(userWord.content).toBe('test');
    });
  });
});
