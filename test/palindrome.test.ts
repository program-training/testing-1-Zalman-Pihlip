import {describe,expect, test} from "vitest"
import isPalindrome from "../exercise/palindrome"

describe("isPalindrome test",() => {
    test("palindrome true", () => {
        const str = "abcdcba"
        const result = isPalindrome(str)
        expect(result).toBeTruthy()
    });
    test("palindrome false", () => {
        const str = "abcgba"
        const result = isPalindrome(str)
        expect(result).toBeFalsy()
    });
    
})