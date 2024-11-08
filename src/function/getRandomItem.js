export function getRandomItemsFromArray(arr, n) {
  if (n >= arr.length) {
    // Return a shallow copy of the original array if n is greater than or equal to array length
    return arr.slice();
  }

  const shuffledArray = arr.slice(); // Make a shallow copy to avoid modifying the original array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    // Fisher-Yates (Knuth) shuffle algorithm
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray.slice(0, n); // Return the first n elements
}
