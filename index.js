// A
const max = (arr) => {
    let number = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < number) continue;
        number = arr[i]
    }
    return number
}

const secondMax = (arr) => {
    let number = arr[0]
    let checkMax = 0
    const maxNumber = max(arr)
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < number) continue;
        if (arr[i] === maxNumber && checkMax) {
            continue
            checkMax++
        }
        number = arr[i]
    }
    return number
}

// const resultA = max([-1, 4, 30, 2, -4])
// const resultA = secondMax([-1, 4, 30, 2, -4])
// const resultA = secondMax([3, 4, 5, 6, 7])
// const resultA = max([3, 4, 5, 6, 7])
const resultA = secondMax([3, 4, 5, 7, 7])


//  B
const fn = (arr, number) => {
    let max = 0
    if (arr.length < number) {
        return -1
    }
    for (let i = 0; i < arr.length + 1 - number; i++) {
        let sum = 0
        for (let j = 0; j < number; j++) {
            sum += arr[i + j]
        }
        if (max < sum) {
            max = sum
        }
    }
    return max
}

// const resultB = fn([1, 4, -1, 2, 3], 3)
const resultB = fn([1, 4, -1, 2, 3], 2)

console.log(resultB);