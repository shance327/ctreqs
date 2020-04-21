import React, {Component} from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import './SearchBar.css';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {ThemeProvider} from '@material-ui/core/styles';
import {createMuiTheme} from "@material-ui/core";

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
        fetch('/v1/ingredients')
            .then(res => res.json())
            .then((data) => {
                this.setState({ingredients: data})
            })
            .catch(console.log)
    }

    //theme used for search buttons
    theme = createMuiTheme({
        palette: {
            primary: {
                main: '#32CD32',
                contrastText: '#6D616F'
            },
            secondary: {
                main: '#6D616F',
                contrastText: '#FFFFFF'
            },
            contrastThreshold: 3,
            tonalOffset: 0.2
        }
    });

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
    };

    // Renders the search bar and or a redirect if a search response has been received.
    render() {
        if (this.state.response.length > 0) {
            return (<Redirect
                to={{
                    pathname: "/results",
                    state: { responses: this.state.response }
                }}
            />) }
        else {
            return (
                <div className="SearchPage" style={{marginTop: 50}}>
                    <h1>CTReqs</h1>
                    <img src = "lime.jpg" style= {{ width: 300, height: 200, borderRadius: 20}}  />
                    <p>Enter ingredients in the search bar or <a href='\TestPage'>search by recipe here</a> </p>
                    <ThemeProvider theme ={this.theme}>
                        <br/>
                        <Button color ="primary" variant = "contained" className ="searchButton" onClick={this.handleSearch}>Search</Button>
                        <br/>
                    </ThemeProvider>

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

                    <ThemeProvider theme ={this.theme}>
                        <Button color ="primary" variant = "contained" onClick={this.handleSearch}>Search</Button>
                        <Button color ="secondary" variant ="contained" onClick={this.handleBuzz}>I'm Feeling Buzzed</Button>
                    </ThemeProvider>
                </div>
                )
            }
        }
    handleBuzz = () => {
        this.buzzPicks(this.state.selected);
    };
    // Event handler for search button
    handleSearch = () => {
        this.makeApiCall(this.state.selected);
    };

    buzzPicks = () => {
        let searchUrl = `/v1/randomRecipe`;

        fetch(searchUrl)
            .then(response => {
                return response.json();
            })
            .then(jsonData => {
                console.log(jsonData);
                this.setState({ response: [...this.state.response ,jsonData] });
            });
        console.log(this.state.response.length);
        console.log("search response:" + this.state.response);
    };

    searchByRecipe = () => {
        window.location = '/TestPage';
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
        let searchUrl = `/v1/ingredientIds?id=${encodedValue}`;

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
