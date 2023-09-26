const nextFibonacci = (arr: Array<number>): number => {
  if (!Array.isArray(arr)) throw new Error("please send an array");
  if (!arr.length) throw new Error("please send a numeric array");
  arr.forEach((num, i, arr) => {
    if (typeof num !== "number") throw new Error("please send a numeric array");
    if (i > 1 && num !== arr[i - 1] + arr[i - 2])
      throw new Error("please enter a fibonacci sequence");
  });
  const len = arr.length;
  return arr[len - 1] + arr[len - 2];
};

export default nextFibonacci;
