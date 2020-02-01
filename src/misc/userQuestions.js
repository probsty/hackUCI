import Question from '../Classes/Question'
// ALl the questions to be asked of the user


const userQuestions = [
    new Question(
        0,
        "Are you a boy or a girl?",
        [
            "Boy",
            "Girl",
        ],
    ),

    new Question(
        1,
        "What's up?",
        [
            "Nothing",
            "Bad day",
            "I'm swell!",
            "What's it to ya?",
            "The sky.",
        ]
    ),
]

export default userQuestions