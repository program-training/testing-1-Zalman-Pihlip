import { describe, expect, test } from "vitest";
import returnLengthOfString from "../exercise/lengthOfString";

describe("lengthOfString test", () => {
  test("get length of string", () => {
    const str = "hello";
    const result = returnLengthOfString(str);
    expect(result).toBe(5);
  });
  test("not a string error", () => {
    expect(() => {
      const str = ["hello"];
      // @ts-ignore
      returnLengthOfString(str);
    }).toThrow("please send a string");
  });
});
