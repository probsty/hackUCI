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

    new Question(
        2,
        "Type of car",
        [
            "big",
            "small",
            "medium!",
            "sport?",
        ]
    ),

    new Question(
        3,
        "What's your budget?",
        [
            "Less than $10,000",
            "$10,000 - $50,000",
            "$50,000 - $100,000",
            "More than $100,000",
        ]
    ),

    new Question(
        4,
        "What's your sdezzevzet?",
        [
            "A",
            "B",
            "C",
            "D",
        ]
    ),

]

export default userQuestions
