// shallow = cópia superficial, não pega os itens aninhados.

const htmlCourse = {
    course: "HTML",
    students: [{ name: "Vitória" }],
}

const jsCourse = {
    ...htmlCourse,
    course: "JavaScript",
}

// vai retornar a mesma lista de estudantes mas o nome do curso vai ser JavaScript

jsCourse.students.push({ name: "João" })

// vai modificar o HTML course, pois students é uma referência, ele só trabalha com objeto de primeiro nível,
// no caso o 'course' já students é uma propriedade aninhada

// João irá aparecer nas duas listas.


// deep copy = copia profunda

const jsCourse = {
    ...htmlCourse,
    course: "JavaScript",
    students: [...htmlCourse.students, {name: João }]
}

// vai retornar o novo estudante só na nova lista