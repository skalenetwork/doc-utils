import { sum } from "../src";

describe("Unit Tests", () => {
  test("2 + 2 = 4", () => {
    expect(sum(2, 2)).toEqual(4);
  });
});
