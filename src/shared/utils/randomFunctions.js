export const makeRandomProducts = (arr) => {
  if (arr.length > 10) {
    const randomIdx = [];
    for (let i = 0; i < 10; i += 1) {
      randomIdx.push(Math.floor(Math.random() * (arr.length - 1) + 1));
    }
    return arr.filter((_, idx) => randomIdx.includes(idx));
  }
  return arr;
};
