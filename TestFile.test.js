import {test, expect} from "@jest/globals";
import sum from './TestFile';

test.skip('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});