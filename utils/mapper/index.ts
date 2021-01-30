const DAY_KR = ['월', '화', '수', '목', '금', '토', '일'];
const DAY_US = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

export const mapDayText = (text: string): string => {
  const index = DAY_KR.findIndex((v) => text === v);
  return DAY_US[index];
};
