export function deadAntCount(str: string): number {
  if (!str) return 0;

  const onlyDead = str.split('ant');
  const aCount = onlyDead.join('').split('a').length - 1;
  const nCount = onlyDead.join('').split('n').length - 1;
  const tCount = onlyDead.join('').split('t').length - 1;

  return [aCount, nCount, tCount].sort((a, b) => b - a)[0] || 0;
}
