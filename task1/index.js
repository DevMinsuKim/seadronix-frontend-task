function fibonacci(n, count) {
  if (n === 0) {
    count.zero++;
    return 0;
  } else if (n === 1) {
    count.one++;
    return 1;
  } else {
    return fibonacci(n - 1, count) + fibonacci(n - 2, count);
  }
}

const count = { zero: 0, one: 0 };
fibonacci(3, count);
console.log(`${count.zero} ${count.one}`);
