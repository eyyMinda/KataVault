export function leastSteps(num) {
  if (num === 1) return 0; // Already at the target number

  if (num % 2 === 0) {
    return 1 + leastSteps(num / 2); // Doubling the number
  } else {
    return 1 + leastSteps(num - 1); // Adding 1 to the number
  }
}