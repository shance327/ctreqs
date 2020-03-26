import React, {Component} from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import './SearchBar.css';
import { Redirect } from 'react-router-dom';

export default class SearchBar extends Component {

    // stores request/response info
    state = {
            ingredients: [],
            selected: [],
            response: []
        };

    // Makes a request before the first render to load ingredient information in to the options of
    // search bar. Ingredient information is stored in the ingredients var of the state object.
    componentDidMount() {
        fetch('/api/ingredients')
            .then(res => res.json())
            .then((data) => {
                this.setState({ingredients: data})
            })
            .catch(console.log)
    }

    // handles changes in selected ingredients, storing all selected values in the selected var of
    // the state object
    onTagsChange = (event, values) => {
        this.setState({
            selected: values
        }, () => {
            // This will output an array of objects
            // given by Autocomplete options property.
            console.log(this.state.selected);
        });
    }

    // Renders the search bar and or a redirect if a search response has been received.
    render() {
        if (this.state.response.length > 0) {
            console.log("Attempting to redirect with number of responses: " + this.state.response.length);
            console.log("Attempting to redirect with: " + this.state.response);
            return (<Redirect
                to={{
                    pathname: "/results",
                    state: { responses: this.state.response }
                }}
            />) }
        else {
            return (
                <div className="container-search" style={{marginTop: 50}}>
                    <Autocomplete
                        multiple
                        size = 'medium'
                        id="tags-outlined"
                        options={this.state.ingredients}
                        getOptionLabel={option => option.name}
                        //defaultValue={}
                        filterSelectedOptions
                        onChange={this.onTagsChange}
                        renderInput={params => (
                            <TextField
                                {...params}
                                variant="outlined"
                                //label="Input Ingredients"
                                //placeholder="Ingredients"
                            />
                        )}
                    />
                    <button className ="searchButton" onClick={this.handleSearch}>Search</button>
                </div>
                )
            }
        }

    // Event handler for search button
    handleSearch = () => {
        this.makeApiCall(this.state.selected);
    };

    // Makes request for all recipes containing one or more of the ingredients selected on the search bar
    // Response is returned into the response variable of the state object
    makeApiCall = searchInput => {
        let ids = [];

        for(let i = 0; i < searchInput.length; i++) {
            let obj = searchInput[i];
            ids.push(obj.id);
            }

        const encodedValue = encodeURIComponent(ids);
        let searchUrl = `api/ingredientIds?id=${encodedValue}`;

        fetch(searchUrl)
            .then(response => {
                return response.json();
            })
            .then(jsonData => {
                console.log(jsonData);
                this.setState({ response: jsonData });
            });

        console.log("search response:" + this.state.response);

    };
}
