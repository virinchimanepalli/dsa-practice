// Problem: Two Sum - return indices of the two numbers that add up to target.
// Approach: hash map of value -> index
// Time: O(n)  Space: O(n)

import { test } from "../../test.js";

function twoSum(nums, target) {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (seen.has(need)) return [seen.get(need), i];
    seen.set(nums[i], i);
  }
  return [];
}

test("basic", twoSum([2, 7, 11, 15], 9), [0, 1]);
test("middle", twoSum([3, 2, 4], 6), [1, 2]);
