// State of the redux

const initialState = {
    test_test: "",
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
        default:
            return state;
    }
}

export default service;
