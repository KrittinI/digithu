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

// const result = max([-1, 4, 30, 2, -4])
// const result = secondMax([-1, 4, 30, 2, -4])
// const result = secondMax([3, 4, 5, 6, 7])
// const result = max([3, 4, 5, 6, 7])
const result = secondMax([3, 4, 5, 7, 7])

console.log(result);