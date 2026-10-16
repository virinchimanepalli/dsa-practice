// Problem: Implement debounce(fn, delay).
// The fn runs only after `delay` ms have passed since the last call.

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Try it: only "call 3" should print
const log = debounce((msg) => console.log(msg), 200);
log("call 1");
log("call 2");
log("call 3");
