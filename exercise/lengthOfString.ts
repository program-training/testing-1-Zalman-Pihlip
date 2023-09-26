const returnLengthOfString = (str: string) => {
    if (typeof str !== "string") 
    throw new Error("please send a string");
    return str.length
}

export default returnLengthOfString