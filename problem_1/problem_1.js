const limit = 1000

const calculateNextValue = (num = 1, total = 0) => {
    if (num >= limit) {
        return total
    }
    if (num % 3 === 0 ||  num % 5 === 0) {
        return calculateNextValue(num + 1, total + num)
    }
    return calculateNextValue(num + 1, total)
}

console.log(calculateNextValue())