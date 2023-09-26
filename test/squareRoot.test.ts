import { describe, expect, test } from "vitest";
import squareRoot from "../exercise/squareRoot";

describe("squareRoot test", () => {
  test("get squareRoot", () => {
    const num = 25;
    const result = squareRoot(num);
    expect(result).toBe(5);
  });
  test("negative number error", () => {
    expect(() => {
      const num = -25;
      squareRoot(num);
    }).toThrow("invalid number");
  });
  test("not a number error", () => {
    const num = "q"
    // @ts-ignore
    const result = squareRoot(num)
    expect(result).toBe(NaN)
  });
});
