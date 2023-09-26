import {describe, test, expect } from "vitest"
import sumArray from "../exercise/sumArray"

describe("sumArray test", () => {
test("get sum of array", () => {
    const arr = [1,2,3,4,6]
    const result = sumArray(arr)
    expect(result).toBe(16)
})
test("greater than", () => {
    const arr = [1,2,3,4,6]
    const result = sumArray(arr)
    expect(result).toBeGreaterThan(9)
});
test("not array error", () => {
    expect(() => {
        const arr = ""
        // @ts-ignore
        sumArray(arr) 
    }).toThrow("please send an array")
});
test("empty array error", () => {
    expect(() => {
        const arr = []
        sumArray(arr) 
    }).toThrow("the array is empty")
});
test("not a numeric array error", () => {
    expect(() => {
        const arr = [""]
        // @ts-ignore
        sumArray(arr) 
    }).toThrow("please send a numeric array")
})   
});
