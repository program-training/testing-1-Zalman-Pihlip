const sortArray = (arr: Array<number>) => {
  if (!Array.isArray(arr)) throw new Error("please send an array");
  if (!arr.length) throw new Error("the array is empty");
  arr.forEach((num) => {
    if (typeof num !== "number") throw new Error("please send a numeric array");
  });
  return arr.sort((a,b)=> a - b);
};

export default sortArray;
