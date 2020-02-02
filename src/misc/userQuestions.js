import Question from '../Classes/Question'
// ALl the questions to be asked of the user

class Choice {
    constructor(text, value) {
        this.text = text;
        this.value = value;
    }
}

const userQuestions = [

    new Question(
        "price",
        "What's your max budget?",
        [
            new Choice("20,000", 20000),
            new Choice("30,000", 30000),
            new Choice("40,000", 40000),
            new Choice("50,000", 50000),
        ]
    ),

    new Question(
        "commute",
        "Approximately how long is your commute?",
        [
            new Choice("8 miles", 8),
            new Choice("16 miles", 16),
            new Choice("24 miles", 24),
            new Choice("40 miles", 40),
        ]
    ),

    new Question(
        "body_type",
        "What car body type do you prefer?",
        [
            new Choice("Sedan", "Sedan"),
            new Choice("Hatchback", "Hatchback"),
            new Choice("SUV", "SUV"),
            new Choice("Coupe", "Coupe"),
        ]
    ),

    new Question(
        "fuel",
        "What fuel type do your prefer?",
        [
            new Choice("Gas", "gas"),
            new Choice("Hybrid", "hybrid"),
            new Choice("Electric", "electric"),
        ]
    ),

    new Question(
        "make",
        "Which car company do you prefer?",
        [
            new Choice("Honda", "Honda"),
            new Choice("Toyota", "Toyota"),
            new Choice("Hyundai", "Hyundai"),
            new Choice("Ford", "Ford")
        ]
    ),

    new Question(
        "size",
        "How many seats do you need?",
        [
            new Choice("2", 2),
            new Choice("4", 4),
            new Choice("6", 6),
            new Choice("7", 7)
        ]
    ),

]

export default userQuestions
