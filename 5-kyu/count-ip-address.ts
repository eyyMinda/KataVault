export function ipsBetween(start: string, end: string): number {
  // Split the IP addresses into arrays of segments
  const startParts: number[] = start.split('.').map((x) => Number(x));
  const endParts: number[] = end.split('.').map((x) => Number(x));

  let count = 0;

  for (let i = 0; i < startParts.length; i++) {
    const startPart = startParts[i] || 0,
      endPart = endParts[i] || 0;
    const segmentDiff = endPart - startPart;
    count = count * 256 + segmentDiff;
  }

  return count;
}
