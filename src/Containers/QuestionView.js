import React from 'react'
import { connect } from 'react-redux'
import '../Css/ButtonNeon.css'
import '../Css/GridList.css'
import '../Css/ProgressBar.css'
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
        this.changeRoute = this.changeRoute.bind(this);

    }

    /* Change the route of the web page
    * the argument is the /newPath
    * */
    changeRoute(e) {
        const { history } = this.props;

        history.push(e);
    }

    processAnswers() {
        const url = 'http://localhost:5000/'
        const data = this.props.currentAnswers;

        console.log('Sending request');

        fetch (url, {
            method: 'POST', 
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then((res) => {
            console.log(res);
            return res.json();
        })
        .then((data) => {
            let results = data["cars"];
            console.log(results);

            const { dispatch } = this.props;
            dispatch({type: actions.GET_RESULTS, payload: results})
            return true;
        })
    }

    onSelectChoice(e) {
        let userAnswer = e.target.dataset["value"];
        console.log(`User selected: ${userAnswer}`);
        const { dispatch } = this.props;

        const payload = {
            question_id: this.props.question.id,
            answer: userAnswer,
        };

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
        if (this.props.questionIndex === this.props.questions.length - 1) {
            console.log('test');
            this.processAnswers();
            this.changeRoute("results");
        } else {
            const {dispatch} = this.props;
            const nextQuestionAction = {
                type: actions.NEXT_QUESTION,
            };
            dispatch(nextQuestionAction)
        }
    }

    onBackButton(e) {
        const { dispatch } = this.props;

        const previousQuestionAction = {
            type: actions.PREVIOUS_QUESTION,
        };

        dispatch(previousQuestionAction)
    }

    render() {
        let question = this.props.question;
        let questionNumber = this.props.questionIndex + 1;
        let totalQuestions = userQuestions.length;

        let choices = question.choices;
        let questionText = question.text;
        let questionButtons = choices.map((choice, index) => {

            let baseClassName = "buttonAnswer button-1";

            // Highlight selected choice
            if (choice.value === this.props.currentAnswers[this.props.question.id]) {
                baseClassName += " selectedChoice";
            }

            return (
                <li className="grid-item" key={index}>
                    <div
                        className={baseClassName}
                        onClick={this.onSelectChoice}
                        data-value={choice.value}
                    >
                        {choice.text}
                    </div>
                </li>
            )
        });

        let progressBar = this.props.questions.map((text, index) => {
            if (index + 1 <= this.props.questionIndex) {
                return (<li className="active" key={index + 1}/>)
            } else {
                return (<li key={index + 1}/>)
            }
        });

        let nextButton = undefined;
        if (this.props.currentAnswers[this.props.question.id]) {
            nextButton = (
                <div
                        className="button-1 buttonSecondary alignRight rightCorner"
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
                    className="button-1 buttonSecondary leftCorner"
                    onClick={this.onBackButton}
                >
                    Previous
                </div>
            );
        }

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
                    <h3 className="questionText">{questionText}</h3>
                </div>
                <div className="table">
                    <ul className="grid-container">
                        {questionButtons}
                    </ul>
                </div>
                <div className="marginBottom">
                    <div className=" container">
                        <ul className="progressbar">
                            {progressBar}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    question: state.current_question,
    questionIndex: state.current_question_index,
    currentAnswers: state.user_answers,
    questions: state.questions,
});

export default connect(mapStateToProps)(QuestionView);
