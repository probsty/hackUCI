import React, { Component } from 'react';
import '../Css/App.css';
import '../Css/ButtonNeon.css';
import '../Css/GridList.css'
import '../Css/ProgressBar.css'
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Ferrari from "../Assets/Images/ferrari.jpg";
import Hurracan from "../Assets/Images/hurracan.jpg";
import R8 from "../Assets/Images/r8.jpg";

class ResultsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.displayCarCard = this.displayCarCard.bind(this);

    }

    displayCarCard(model, imgModel, description) {
        return (
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={imgModel}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {model}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        );
    }

    render() {
        let car = [{model: "Ferrari California", img: Ferrari ,description: "The Ferrari California (Type F149) brzrere  rfzefrefez"},
            {model: "Lamborghini Huracan", img: Hurracan ,description: "The Lamborghini Huracán is a sports dczeverv"},
            {model: "Audi R8", img: R8 ,description: "The Audi R8 Coupe showcases its motorsport DNA while ceverver  ijreiferijgerji"}
        ];
        let cars = car.map((text, index) => {
            return (<li className="alignResults">{this.displayCarCard(car[index].model, car[index].img, car[index].description )}</li>)
        });

        return (
            <div>
                <h1 className="textEndMessage AkzidenzGrotesk-BoldCond">Cars made for you !</h1>
                <div className="table">
                    <ul className="grid-container">
                        {cars}
                    </ul>
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

export default connect(mapStateToProps)(ResultsPage);
