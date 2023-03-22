export const timeToRead = (length: number) => {
  const wordsPerMinute = 250;
  return Math.ceil(length / wordsPerMinute);
};
