import React from 'react';

export default class FilterWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFacts: this.props.showFacts,
            showInfo: this.props.showInfo,
            showReviews: this.props.showReviews
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
        console.log(this.state);
    }

    handleSubmit(event) {
        this.props.updateFilters(this.state.showFacts, this.state.showInfo, this.state.showReviews);
        console.log(this.state);
        event.preventDefault();
    }


    render() {
        return (
            <div class="w-64 rounded overflow-hidden shadow-lg mx-2 px-4 flex justify-center">
                <form onSubmit={this.handleSubmit}>
                    <span class="text-gray-700">Filters</span>
                    <div class="mt-2">
                        <div>
                            <label class="inline-flex items-center">
                                <input name="showFacts" type="checkbox" checked={this.state.showFacts} onChange={this.handleChange} class="form-checkbox" />
                                <span class="ml-2">Facts</span>
                            </label>
                        </div>
                        <div>
                            <label class="inline-flex items-center">
                                <input name="showInfo" type="checkbox" checked={this.state.showInfo} onChange={this.handleChange} class="form-checkbox" />
                                <span class="ml-2">Building Info</span>
                            </label>
                        </div>
                        <div>
                            <label class="inline-flex items-center">
                                <input name="showReviews" type="checkbox" checked={this.state.showReviews} onChange={this.handleChange} class="form-checkbox" />
                                <span class="ml-2">Reviews</span>
                            </label>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}