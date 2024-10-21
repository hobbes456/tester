// примерно то, что будет передаваться с сервера

const tests = [
    {
        id: 1,
        title: "Правила дорожного движения",
        questions: [
            {
                id: 1,
                title: "Один из списка",
                question_type: "single",
                answer: 1,
            },
            {
                id: 2,
                title: "Несколько из списка",
                question_type: "multiple",
                answer: [3, 4],
            },
            {
                id: 3,
                title: "Численный ответ",
                question_type: "number",
                answer: 155,
            },
        ],
        date: new Date(),
        author: "hobbes",
    },
];
