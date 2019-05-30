const limit = 1000

const calculateNextValue = (numToCheck = 1, total = 0) => {
    if (numToCheck >= limit) {
        return total
    }
    if (numToCheck % 3 === 0) {
        return calculateNextValue(numToCheck + 1, total + numToCheck)
    }
    if (numToCheck % 5 === 0) {
        return calculateNextValue(numToCheck + 1, total + numToCheck)
    }
    return calculateNextValue(numToCheck + 1, total)
}

console.log(calculateNextValue())