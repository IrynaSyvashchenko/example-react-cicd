//TODO: write a test that checks that the names are joining correctly
//More information can be found here: https://jestjs.io/docs/getting-started
//You might want to have a go at using some of Jest's other matchers: https://jestjs.io/docs/expect

import { getInfo } from "../../src/helpers/getInfo";

test('test if getInfo join correct', () => {
    expect(getInfo({ name: ["Iryna", "Nick"] })).toBe("Iryna,Nick");
});

//TODO: write a test if no data is passed to the function (returns "none")

test("check if no data is passed to the function ", () => {
  expect(getInfo()).toBe('none');
});