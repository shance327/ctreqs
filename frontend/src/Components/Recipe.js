import React, {Component} from 'react';

export default class FirstComponent extends Component {
    //const recipeName = '';


    constructor(props) {
        super(props)
    }

    render() {
        const element = (<div>Text from Element</div>)
        return (<div className="comptext">
            <h3>First Component</h3>
            {this.recipeName}
            {element}
        </div>)
    }
}
