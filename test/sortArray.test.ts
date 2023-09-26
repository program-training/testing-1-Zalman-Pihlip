import {describe,expect, test} from "vitest"
import sortArray from "../exercise/sortArray"

describe("sortArray test", () => {
    test("sorted", () => {
        const arr = [7,4,2,3,110,15]
        const result = sortArray(arr)
        expect(result).toEqual([2,3,4,7,15,110])
    });
    test("not array error", () => {
        expect(() => {
            const arr = ""
            // @ts-ignore
            sortArray(arr) 
        }).toThrow("please send an array")
    });
    test("empty array error", () => {
        expect(() => {
            const arr = []
            sortArray(arr) 
        }).toThrow("the array is empty")
    });
    test("not a numeric array error", () => {
        expect(() => {
            const arr = [""]
            // @ts-ignore
            sortArray(arr) 
        }).toThrow("please send a numeric array")
    })
})