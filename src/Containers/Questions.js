import React, { Component } from 'react';
import '../Css/App.css';
import '../Css/ButtonNeon.css';

class Introduction extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }

    render() {
        return (
            <div>
                <div>
                    <h1 className="textMainMessage AkzidenzGrotesk-BoldCond">We help you decide your next car purchase !</h1>
                    <div className="button button-1 alignContent">Start</div>
                </div>
            </div>
        );
    }
}


export default Introduction;
