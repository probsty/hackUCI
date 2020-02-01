import React from 'react'
import { connect } from 'react-redux'
import '../Css/ButtonNeon.css'
import '../Css/GridList.css'
import actions from '../store/action_types';
import userQuestions from '../misc/userQuestions';


class QuestionView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            questionArray: {}
        }

        this.onSelectChoice = this.onSelectChoice.bind(this);
        this.onBackButtonClick = this.onBackButtonClick.bind(this);
    }

    onSelectChoice(e) {
        let userAnswer = e.target.textContent;
        console.log(`User selected: ${userAnswer}`);
        const { dispatch } = this.props;

        const payload = {
            question_id: this.props.question.id,
            answer: userAnswer,
        }

        const answerAction = {
            type: actions.ANSWER_QUESTION,
            payload: payload,
        };

        const nextQuestionAction = {
            type: actions.NEXT_QUESTION,
        };

        dispatch(answerAction);
        dispatch(nextQuestionAction);
    }

    onBackButtonClick(e) {
        const { dispatch } = this.props;

        const previousQuestionAction = {
            type: actions.PREVIOUS_QUESTION,
        }

        dispatch(previousQuestionAction)
    }

    render() {
        let question = this.props.question;
        let questionNumber = this.props.questionIndex + 1;
        let totalQuestions = userQuestions.length;
        
        let choices = question.choices;
        let questionText = question.text;
        let questionButtons = choices.map((text, index) => {
            return (
                <li className="grid-item" key={index}>
                    <div 
                        className="buttonAnswer button-1"
                        onClick={this.onSelectChoice}
                    >
                        {text}
                    </div>
                </li>
            )
        });

        return (
            <div>
                <div>
                    <div
                        className="button-1 buttonSecondary"
                        onClick={this.onBackButtonClick}
                    >
                        Previous
                    </div>
                </div>
                <div>
                    <h2 className="textMainMessage AkzidenzGrotesk-BoldCond">
                        {`Question ${questionNumber} / ${totalQuestions}`}
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

const mapStateToProps = (state) => ({
    question: state.current_question,
    questionIndex: state.current_question_index
});

export default connect(mapStateToProps)(QuestionView);