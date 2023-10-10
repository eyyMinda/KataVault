function deadAntCount(str) {
  let count = 0;
  if (!str) return count;

  let onlyDead = str.split('ant');
  let aCount = onlyDead.join("").split('a').length - 1;
  let nCount = onlyDead.join("").split('n').length - 1;
  let tCount = onlyDead.join("").split('t').length - 1;

  count = [aCount, nCount, tCount].sort((a, b) => b - a)[0];
  return count;
}

console.log(deadAntCount("...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t"))

module.exports = { deadAntCount };