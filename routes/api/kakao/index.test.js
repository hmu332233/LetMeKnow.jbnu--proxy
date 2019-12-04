const { setupDB } = require('../../../jest.setup-db');
setupDB();

const coreApi = require('../../../utils/api/coreApi');
const request = require('supertest');
const app = require('../../../app');

const REQUEST_BODY = {
  intent: {
    id: 'test-intent-id',
    name: 'test-intent',
    extra: {
      reason: {
        code: 1,
        message: 'OK',
      },
    },
  },
  userRequest: {
    timezone: 'Asia/Seoul',
    params: {
      surface: 'BuilderBotTest',
      ignoreMe: 'true',
    },
    block: {
      id: 'test-intent-id',
      name: 'test-intent',
    },
    utterance: '내일 참빛\n',
    lang: 'kr',
    user: {
      id: 'test-user-id',
      type: 'botUserKey',
    },
  },
  contexts: [],
  action: {
    name: '알려줘전북대 bot server',
    params: {
      utils_week: '내일',
      dormitory_name: '참빛관',
    },
  },
};

describe('api - kakao', () => {
  test('post message - status code 200', done => {
    coreApi.message = jest.fn().mockResolvedValue({});
    request(app)
      .post('/api/v1/kakao/message')
      .send(REQUEST_BODY)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .then(res => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});
