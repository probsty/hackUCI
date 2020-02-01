import React, { Component } from 'react';
import '../Css/App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import StartLogo from '../Assets/Images/start.jpg'

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
                   
                </div>
            </div>
        );
    }
}


export default Introduction;
