const solutions = require('./problem_1')

const limit = 1000

solutions.forEach(solution => {
    console.time(`${solution.name}`)
    solution(limit)
    console.timeEnd(`${solution.name}`)
    console.log(`   Result: ${solution(limit)}`)
})
