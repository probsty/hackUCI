import React, { Component } from 'react';
import '../Css/App.css';
import '../Css/ButtonNeon.css';
import { connect } from 'react-redux';

class NewPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <h1 className="textMainMessage AkzidenzGrotesk-BoldCond"> New page !</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    test_test: state.test_test,
});

// eslint-disable-next-line no-undef
export default connect(mapStateToProps)(NewPage);
