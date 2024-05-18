const students = [
    {
        name: "Leticia",
        firstTest: 5,
        secondTest: 7,
    },

    {
        name: "Diego",
        firstTest: 9,
        secondTest: 8,
    },

    {
        name: "Julia",
        firstTest: 3,
        secondTest: 2,
    },

]

function calculateAverage(firstTest, secondTest) {
    return ((firstTest + secondTest) / 2).toFixed(2)

}

function printAverage(student) {
    return `A média do(a) aluno(a) ${student.name} é: ${calculateAverage(student.firstTest, student.secondTest)}`
    
}

function printVerifyAverage(student) {
    if(calculateAverage(student.firstTest, student.secondTest) >= 7) {
        return(`Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
    }
    else {
        return(`Não foi dessa vez, ${student.name}! Tente novamente!`)
    }
}

for (let student of students) {
    let studentAverage = printAverage(student)
    let studentVerify = printVerifyAverage(student)
    
    alert(`${studentAverage} \n ${studentVerify}`)
}