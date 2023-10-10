import { alphabet } from '../@@utils/alphabet';

export function insertMissingLetters(str: string): string {
  const alph = alphabet.toUpperCase();
  let ans = '';

  const used: Set<string> = new Set();
  for (const l of str) {
    ans += l;
    const upperCaseL = l.toUpperCase();

    if (!used.has(upperCaseL)) {
      const index = alph.indexOf(upperCaseL);
      if (index !== -1) {
        const attachStr = alph.slice(index + 1);
        ans += removeChars(attachStr, str);
        used.add(upperCaseL);
      }
    }
  }

  return ans;
}

function removeChars(s1: string, s2: string): string {
  // Convert s2 to a Set for faster lookup
  const charSet = new Set(s2.toLowerCase());
  let output = '';

  for (let i = 0; i < s1.length; i++) {
    const char = s1.charAt(i).toLowerCase(); // Convert to lowercase for case-insensitivity
    if (!charSet.has(char)) {
      output += s1.charAt(i);
    }
  }
  return output;
}
