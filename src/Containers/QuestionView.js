import React from 'react'
import Button from '@material-ui/core/Button';


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
        let choices = question.choices;
        let questionText = "How long is your commute?"

        return (
            <div>
                <div>
                    <h2
                        className="textMainMessage AkzidenzGrotesk-BoldCond"
                    >
                        Question 1/10
                    </h2>
                    <h3
                        className="questionText"
                    >
                        {questionText}
                    </h3>
                </div>
                    <Button></Button>
                    <Button></Button>
                    <Button></Button>
                    
                <div>

                </div>
                
            </div>
        );
    }
}

export default QuestionView;