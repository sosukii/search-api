export function generateArray(lastNumber: number): number[] {
  const array = [];

  for (let i = 1; i <= lastNumber; i++) {
    array.push(i);
  }

  return array;
}
