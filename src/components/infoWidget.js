import React from 'react';

export default class InfoWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buildingInfo: [],
            name: '',
            interesting_facts: [],
            info: [],
            reviews: [],
        };
    }


    componentWillMount() {
        fetch("http://localhost:5000/api/V1.0/get_building_info/" + this.props.currentBuilding)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({ 
                    buildingInfo: json.buildingInfo,
                    info: json.info,
                    interesting_facts: json.interesting_facts,
                    name: json.name,
                    reviews: json.reviews
                 });
            })
            .then(
                console.log(this.state)
            );
    }





    render() {
        var review = Math.floor(Math.random() * this.state.reviews.length);
        return (
            <div>
                <p>Building Name: {this.state.name}</p>
                <p hidden={!this.props.showFacts}>Interesting Facts: {this.state.interesting_facts}</p>
                <p hidden={!this.props.showInfo}>Building Info: {this.state.info}</p>
                <p hidden={!this.props.showReviews}>Reviews: {this.state.reviews[review]}</p>
            </div>
        )
    }
}

