const calculateWithLoop = limit => {
    let total = 0
    for (let i = 0; i < limit; i++) {
        if (i % 3 === 0 ||  i % 5 === 0) {
            total = total + i
        }
    }
    return total
}

const calculateWithRecursion = (limit, num = 1, total = 0) => {
    if (num >= limit) {
        return total
    }
    if (num % 3 === 0 ||  num % 5 === 0) {
        return calculateWithRecursion(limit, num + 1, total + num)
    }
    return calculateWithRecursion(limit, num + 1, total)
}

const calculateWithMaths = limit => {
    const sum = lim => Math.floor((lim / 2) * (lim + 1)) 
    const msum = (lim, mul) => Math.floor(sum(Math.floor((lim - 1) / mul)) * mul)
    return msum(limit, 3) + msum(limit, 5) - msum(limit, 15)
}

const providedSolution = limit => {
    const target = limit - 1
    const sumDivisibleBy = n => {
        const p = Math.floor(target / n)
        return n * (p * (p + 1)) / 2
    }
    return sumDivisibleBy(3) + sumDivisibleBy( 5) - sumDivisibleBy(15)
}


module.exports = [
    calculateWithLoop,
    calculateWithRecursion,
    calculateWithMaths,
    providedSolution
]