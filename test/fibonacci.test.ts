import {describe, expect, test} from "vitest"
import nextFibonacci from "../exercise/fibonacci"

describe("fibonacci sequence test", () => {
    test("get next number in fibonacci sequence", ()=> {
        const arr = [0,1,1,2,3,5]
        const result  = nextFibonacci(arr)
        expect(result).toBe(8)
    });
    test("not array error",() => {
        expect(()=> {
            const arr = "0,1,1"
            // @ts-ignore
            nextFibonacci(arr)
        }).toThrow("please send an array")
    });
    test("not numbers error",() => {
        expect(()=> {
            const arr = []
            nextFibonacci(arr)
        }).toThrow("please send a numeric array")
    });
    test("empty array error",() => {
        expect(()=> {
            const arr = ["q"]
            // @ts-ignore
            nextFibonacci(arr)
        }).toThrow("please send a numeric array")
    });
    test("not fibonacci sequence error", ()=> {
        expect(()=> {
            const arr = [0,1,2]
            nextFibonacci(arr)
        }).toThrow("please enter a fibonacci sequence")
    });
})