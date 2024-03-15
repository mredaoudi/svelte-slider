export function generateRandomOrderedList(): number[] {
    const numbers: number[] = [];
    for (let i = 1; i <= 9; i++) {
        numbers.push(i);
    }
    return numbers.sort(() => Math.random() - 0.5);
}

export function countInversions(arr: number[]): number {
    let inversions = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                inversions++;
            }
        }
    }
    return inversions;
}

export function isSolvable(indexes: number[]): boolean {
    const inversions = countInversions(indexes);
    const blankRowIndex = Math.ceil(indexes.indexOf(0) / 3);
    if (blankRowIndex % 2 === 0) {
        return inversions % 2 === 0;
    } else {
        return inversions % 2 !== 0;
    }
}

// Example usage
const indexes = [2, 4, 3, 1, 5, 6, 7, 8, 0]; // Randomly sorted list of indexes
console.log(isSolvable(indexes)); // Output: true or false
