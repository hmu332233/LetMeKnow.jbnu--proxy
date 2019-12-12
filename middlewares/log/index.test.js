const { setupDB } = require('./../../jest.setup-db');
setupDB();

const { db } = require('../../models/userWords/info');
const UserWords = require('../../models/userWords');
const parser = require('../../utils/parser');

const { saveKakaoLog } = require('./index');

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

describe('log - saveKakaoLog', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('UserWord가 생성되고 next가 호출됨', async () => {
    const req = {
      body: REQUEST_BODY,
    };
    const res = v => v;
    const next = jest.fn();

    await saveKakaoLog(req, res, next);

    const userWord = await db.user_words.findOne({ id: REQUEST_BODY.userRequest.user.id }).lean();

    expect(userWord).not.toEqual(null);
    expect(userWord.context).toEqual('내일 참빛관');
    expect(next).toHaveBeenCalledTimes(1);
  });
});
