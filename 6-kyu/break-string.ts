export function stringBreakers(n: number, str: string): string {
  const ans = [];
  const letterArr = str.split(' ').join('').split('');
  let tempStr = '';
  for (let i = 1; i <= letterArr.length; i++) {
    const curr = letterArr[i - 1];
    tempStr = tempStr + curr;
    if (i % n === 0) {
      ans.push(tempStr);
      tempStr = '';
    }
  }
  tempStr !== '' ? ans.push(tempStr) : null;

  return ans.join('\n');
}
