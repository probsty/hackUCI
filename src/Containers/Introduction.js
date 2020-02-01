import React, { Component } from 'react';
import '../Css/App.css';
import '../Css/ButtonNeon.css';
import { connect } from 'react-redux';

class Introduction extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.changeRoute = this.changeRoute.bind(this);
        this.fillDataRedux = this.fillDataRedux.bind(this);

    }

    /* Change the route of the web page
    * the argument is the /newPath
    * */
    changeRoute(e) {
        const { history } = this.props;

        history.push(e);
    }

    /* Example to show you how to store data in the redux store
    * (you can pass data as an argument)
    * */
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
        this.changeRoute("/newPage")
    }

    render() {
        return (
            <div>
                <div>
                    <h1 className="textMainMessage AkzidenzGrotesk-BoldCond">We help you decide your next car purchase !</h1>
                    <div className="button button-1 alignStartContent" onClick={this.fillDataRedux}>Start</div>
                </div>
            </div>
        );
    }
}

/* Mandatory method to get access to the redux data
* use the data like: this.props.data
* */
const mapStateToProps = (state) => ({
    test_test: state.test_test,
});

export default connect(mapStateToProps)(Introduction);
