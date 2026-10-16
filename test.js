// Tiny test helper: test(name, actual, expected)
import { isDeepStrictEqual } from "node:util";

export function test(name, actual, expected) {
  if (isDeepStrictEqual(actual, expected)) {
    console.log(`  ✅ ${name}`);
  } else {
    console.log(`  ❌ ${name}`);
    console.log(`     expected:`, expected);
    console.log(`     received:`, actual);
  }
}
