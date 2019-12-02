exports.parseKakaoRequestBody = body => {
  const {
    chat: { userRequest, action },
  } = body;

  const userId = userRequest.user.id;
  const utterance = userRequest.user.utterance;
  const block = userRequest.block;
  const params = action.params;

  return { userId, utterance, block, params };
};
