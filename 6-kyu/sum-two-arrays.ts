export function addArrays(array1: Array<number>, array2: Array<number>): Array<number> {
  const nbr1 = parseInt(array1.join('')) || 0;
  const nbr2 = parseInt(array2.join('')) || 0;
  const sum = Math.abs(nbr1 + nbr2);
  const sign = nbr1 + nbr2 < 0 ? -1 : 1;
  const res = sum
    .toString()
    .split('')
    .map((x) => parseInt(x));

  res[0] *= sign;

  return nbr1 === 0 && nbr2 === 0 ? [] : res;
}
