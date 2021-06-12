export const getRandomLetter = () => {
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  return getRandomElement(characters);
};

export const getRandomElement = (list = []) => {
  return list[Math.floor(Math.random() * list.length)];
};
