const squareRoot = (num: number) => {
    // if (typeof num !== "number") throw new Error("send a number");
    if (num < 0) throw new Error("invalid number")
    return Math.sqrt(num)
}

export default squareRoot