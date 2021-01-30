exports.parseKakaoRequestBody = body => {
  const { userRequest, action } = body;

  const userId = userRequest.user.id;
  const utterance = userRequest.utterance;
  const block = userRequest.block;
  const params = action.params;

  const context = Object.values(params).join(' ');

  return { userId, utterance, context, block, params };
};
