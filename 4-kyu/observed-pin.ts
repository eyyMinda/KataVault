export const getPINs = (pin: string): Array<string> => {
  const keypad = {
    '1': ['1', '2', '4'],
    '2': ['1', '2', '3', '5'],
    '3': ['2', '3', '6'],
    '4': ['1', '4', '5', '7'],
    '5': ['2', '4', '5', '6', '8'],
    '6': ['3', '5', '6', '9'],
    '7': ['4', '7', '8'],
    '8': ['5', '7', '8', '9', '0'],
    '9': ['6', '8', '9'],
    '0': ['0', '8']
  };

  function generateCombinations(index: number): Array<string> {
    if (index === pin.length) return [''];
    const currentDigit = pin[index] as string;
    if (!(currentDigit in keypad)) {
      throw new Error(`Invalid digit: ${currentDigit}`);
    }

    const possibleDigits = (keypad as Record<string, string[]>)[currentDigit];
    if (!possibleDigits) {
      throw new Error(`Invalid digit: ${currentDigit}`);
    }

    const nextCombinations = generateCombinations(index + 1);
    const combinations = [];
    for (const digit of possibleDigits) {
      for (const nextCombination of nextCombinations) {
        combinations.push(digit + nextCombination);
      }
    }

    return combinations;
  }

  return pin ? generateCombinations(0) : [];
};
