import userQuestions from '../../misc/userQuestions'
import actions from '../action_types'
// State of the redux


/* Returns a COPY of the currentState with the changes applied to the currentState
 in order to preserve immutability. Kinda like setState from React */
function changeState(currentState, changes) {
    return Object.assign({}, currentState, changes);
  }

const initialState = {
    test_test: "",

    user_answers: new Array(userQuestions.length),
    current_question: userQuestions[0],
    current_question_index: 0,

    resultCars: [],

};

// Reducers used to modify the state of the redux

function service(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case 'EXEMPLE':
            nextState = {
                test_test: action.test
            };
            return nextState;
        case actions.ANSWER_QUESTION:
            let newAnswers = state.user_answers.slice();
            newAnswers[state.current_question_index] = action.answer;

            return changeState(state, {
                user_answers: newAnswers,
            });
        case actions.NEXT_QUESTION:
            // Do nothing if already on the last question
            if (state.current_question_index >= userQuestions.length - 1) {
                return state;
            } else {
                let new_question_index = state.current_question_index + 1;

                console.log("Getting NEXT QUESTION");

                return changeState(state, {
                    current_question : userQuestions[new_question_index],
                    current_question_index : new_question_index,
                });
            }
            
        default:
            return state;
    }
}

export default service;
