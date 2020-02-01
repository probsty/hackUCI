import React, { Component } from 'react';
import '../Css/App.css';
import '../Css/ButtonNeon.css';
import { connect } from 'react-redux';

class Questions extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.fillDataRedux = this.fillDataRedux.bind(this);

    }

    // / EXEMPLE: Fill the data in the redux store
    fillDataRedux(e) {
        console.log("BEGINNING OF DISPLAY");
        console.log(this.props.test_test);
        console.log("END OF DISPLAY")
        const { dispatch } = this.props;
        const action = {
            type: 'EXEMPLE',
            test: "i show you an exemple",
        };
        dispatch(action);
    }

    render() {
        return (
            <div>
                <div>
                    <h1 className="textMainMessage AkzidenzGrotesk-BoldCond">We help you decide your next car purchase !</h1>
                    <div className="button button-1 alignContent" onClick={this.fillDataRedux}>Start</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    test_test: state.test_test,
});

// eslint-disable-next-line no-undef
export default connect(mapStateToProps)(Questions);
