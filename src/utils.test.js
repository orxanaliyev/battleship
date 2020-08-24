import checkBundaries from "./utils/checkBundaries";
import createGrid from "./utils/createGrid";

test("checkBundaries should return false", () => {
  expect(checkBundaries()).toBeFalsy();
});

describe("arrayContaining", () => {
  const expected = createGrid();
  it("should return array", () => {
    expect([]).toEqual(expect.arrayContaining(expected));
  });
});
