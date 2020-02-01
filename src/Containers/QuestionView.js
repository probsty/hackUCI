import React from 'react'
import '../Css/ButtonNeon.css'
import '../Css/GridList.css'


class QuestionView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            questionArray: {}
        }
    }

    render() {
        let question = this.props.question
        let totalQuestions = this.props.totalQuestions;
        let choices = [
            'Hello',
            'Goodbye',
            'Hot Pink',
            "Hi I'm BLANK (HackUCI)",
            'Hot Pink',
            "Hi I'm BLANK (HackUCI)"
        ]
        let questionText = "How long is your commute?"
        let questionButtons = choices.map((text, index) => {
            return (
                <li className="grid-item" key={index}>
                    <div className="buttonAnswer button-1">
                        {text}
                    </div>
                </li>
            )
        });

        return (
            <div>
                <div>
                    <h2 className="textMainMessage AkzidenzGrotesk-BoldCond">
                        Question 1/10
                    </h2>
                    <h3
                        className="questionText"
                    >
                        {questionText}
                    </h3>
                </div>
                <div className="table red">
                    <ul className="grid-container">
                        {questionButtons}
                    </ul>
                </div>


            </div>
        );
    }
}

export default QuestionView;
