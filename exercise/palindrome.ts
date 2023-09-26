const isPalindrome = (str: string) => {
    const checkStr = str.trim().toLowerCase()
    const isPalindrome = checkStr.split('').reverse().join('')
    return isPalindrome === checkStr
}

export default isPalindrome
