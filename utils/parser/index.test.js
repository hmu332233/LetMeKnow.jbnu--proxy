const parser = require('./index');

const REQUEST_BODY = {
  chat: {
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
  },
};

describe('parser - parseKakaoRequestBody', () => {
  test('userId, utterance, block, params가 정상적으로 뽑히는가', () => {
    const result = parser.parseKakaoRequestBody(REQUEST_BODY);
    expect(result.userId).toEqual(REQUEST_BODY.chat.userRequest.user.id);
    expect(result.utterance).toEqual(REQUEST_BODY.chat.userRequest.utterance);
    expect(result.block).toEqual(REQUEST_BODY.chat.userRequest.block);
    expect(result.params).toEqual(REQUEST_BODY.chat.action.params);
  });
});
