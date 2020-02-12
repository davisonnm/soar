import React from 'react';

export default class FilterWidget extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
        return (
            <div class="max-w-sm rounded overflow-hidden shadow-lg mx-2 px-4 flex justify-center">
                <span class="text-gray-700">Filters</span>
                <div class="mt-2">
                    <div>
                    <label class="inline-flex items-center">
                        <input type="checkbox" class="form-checkbox"/>
                        <span class="ml-2">Facts</span>
                    </label>
                    </div>
                    <div>
                    <label class="inline-flex items-center">
                        <input type="checkbox" class="form-checkbox"/>
                        <span class="ml-2">Building Info</span>
                    </label>
                    </div>
                    <div>
                    <label class="inline-flex items-center">
                        <input type="checkbox" class="form-checkbox"/>
                        <span class="ml-2">Reviews</span>
                    </label>
                    </div>
                </div>
            </div>
        )
    }
}