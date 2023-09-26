import { describe, test, expect } from "vitest";
import fetchUserData from "../exercise/fetchUserData";
import User from "../interfaces/user"
describe("fetchUserData test from json place holder", () => {
  test("fetch existing user", async () => {
    const userId = 1;
    const userData = await fetchUserData(userId);
    const expectedUser: User = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    }
    expect(userData).toEqual(expectedUser);
  });
  test("fetch not existing user",async () => {
    await expect(fetchUserData(2000)
    ).rejects.toThrow()
  });
  test("fetch invalid userId",async () => {
    // @ts-ignore
    await expect(fetchUserData("qw")
    ).rejects.toThrow("invalid id")
  })
});
