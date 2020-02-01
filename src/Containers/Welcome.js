import React, { Component } from 'react';
import '../Css/App.css';

class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }

    render() {
        return (
            <div className="background">
                <h1 className="textMessage">We help you decide your next car purchase !</h1>
            </div>
        );
    }
}


export default Welcome;
