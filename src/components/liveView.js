import React from 'react';
import FilterWidget from './filterBox';
import InfoWidget from './infoWidget';

const buildingNames= ['100 East Wisconsin', 'U.S. Bank Center', 'Northwestern Mutual Tower and Commons'];


export default class LiveView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFacts: true,
            showInfo: true,
            showReviews: true,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit(showfactsChange, showInfoChange, showReviewsChange) {
        this.setState({
            showFacts: showfactsChange,
            showInfo: showInfoChange,
            showReviews: showReviewsChange
        });
        console.log(this.state);
    }

    render() {
        const num = Math.floor(Math.random() * 3);
        return (
            <div>
                <FilterWidget updateFilters={this.handleSubmit} showFacts={this.state.showFacts} showInfo={this.state.showInfo} showReviews={this.state.showReviews} />
                <InfoWidget name="infoWidget" currentBuilding={buildingNames[num]} showFacts={this.state.showFacts} showInfo={this.state.showInfo} showReviews={this.state.showReviews}/>
            </div>
            
        )
    }
}