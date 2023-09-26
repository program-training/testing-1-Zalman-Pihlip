const sumArray = (arr: Array<number>) => {
  if (!Array.isArray(arr)) throw new Error("please send an array");
  if (!arr.length) throw new Error("the array is empty");
  let sum = 0;
  arr.forEach((num) => {
    if (typeof num !== "number") throw new Error("please send a numeric array");
    sum += num
  });
  return sum
};
export default sumArray;
