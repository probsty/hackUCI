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
        this.onBackButton = this.onBackButton.bind(this);
        this.onNextButton = this.onNextButton.bind(this);
        
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

        if (!this.props.currentAnswers[this.props.question.id]) {
            dispatch(nextQuestionAction);
        }
        dispatch(answerAction);

        
    }

    onNextButton(e) {
        const { dispatch } = this.props;

        const nextQuestionAction = {
            type: actions.NEXT_QUESTION,
        }

        dispatch(nextQuestionAction)
    }

    onBackButton(e) {
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

            let baseClassName = "buttonAnswer button-1";

            // Highlight selected choice
            if (text === this.props.currentAnswers[this.props.question.id]) {
                baseClassName += " selectedChoice";
            }

            return (
                <li className="grid-item" key={index}>
                    <div 
                        className={baseClassName}
                        onClick={this.onSelectChoice}
                    >
                        {text}
                    </div>
                </li>
            )
        });

        let nextButton = undefined;
        if (this.props.currentAnswers[this.props.question.id]) {
            nextButton = (
                <div
                        className="button-1 buttonSecondary alignRight"
                        onClick={this.onNextButton}
                    >
                        Next
                    </div>
            );
        }

        let backButton = undefined;
        if (this.props.questionIndex > 0) {
            backButton = (
                <div
                    className="button-1 buttonSecondary"
                    onClick={this.onBackButton}
                >
                    Previous
                </div>
            );
        }

                                //<div className="filler-block button-1 buttonSecondary">T</div>


        return (
            <div>
                <div className="navbar-container">
                    <div className="navbar">
                        {backButton}
                        {nextButton}
                    </div>
                </div>
                
                <div className="questionContainer">
                    <h2 className="AkzidenzGrotesk-BoldCond">
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
    questionIndex: state.current_question_index,
    currentAnswers: state.user_answers,
});

export default connect(mapStateToProps)(QuestionView);