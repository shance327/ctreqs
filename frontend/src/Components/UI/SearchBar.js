import React, {Component} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import './SearchBar.css';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {ThemeProvider} from '@material-ui/core/styles';
import {createMuiTheme} from "@material-ui/core";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ListIcon from "@material-ui/icons/List";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";

export default class SearchBar extends Component {

    // stores request/response info
    state = {
            ingredients: [],
            selected: [],
            response: [],
            recipeSearch: false,
            recipes: []
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

    setRecipeSearch() {
        this.setState({recipeSearch : true});
        this.callRecipeInfo();
    };

    setIngredientSearch() {
        this.setState({recipeSearch : false});
    };

    callRecipeInfo() {
        let infoUrl = `/v1/recipes`;
        fetch(infoUrl)
            .then(response => {
                return response.json();
            })
            .then(jsonData => {
                this.setState({ recipes: jsonData });
            });
    };

    handleBuzz = () => {
        this.buzzPicks(this.state.selected);
    };
    // Event handler for search button
    handleSearch = () => {
        if (this.state.recipeSearch == true) {
            this.recipeSearch(this.state.selected[0].recipeId);
        }
        else {
            this.makeApiCall(this.state.selected);
        }
    };

    recipeSearch = (id) => {

        let searchUrl = `/v1/recipe/${id}`;

        fetch(searchUrl)
            .then(response => {
                return response.json();
            })
            .then(jsonData => {
                this.setState({ response: [...this.state.response ,jsonData] });
            });
    };

    buzzPicks = () => {
        let searchUrl = `/v1/randomRecipe?id=`;

        fetch(searchUrl)
            .then(response => {
                return response.json();
            })
            .then(jsonData => {
                console.log(jsonData);
                this.setState({ response: [...this.state.response ,jsonData] });
            });
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
        console.log(searchUrl)
        fetch(searchUrl)
            .then(response => {
                return response.json();
            })
            .then(jsonData => {
                console.log(jsonData);
                this.setState({ response: jsonData });
            });

    };

    // Renders the search bar and or a redirect if a search response has been received.
    render() {
        console.log(this.state.response)
        if (this.state.response.length > 0) {
            return (<Redirect
                to={{
                    pathname: "/results",
                    state: { responses: this.state.response }
                }}
            />) }
        else {
            if (this.state.recipeSearch == true) {
                console.log('true')
                    return (
                        <div className="SearchPage" style={{marginTop: 50}}>
                            <h1>CTReqs</h1>
                            <img src = "lime.jpg" style= {{ width: 300, height: 200, borderRadius: 20}}  />
                            <Autocomplete
                                multiple
                                size = 'medium'
                                id="tags-outlined"
                                limitTags={1}
                                options={this.state.recipes}
                                getOptionLabel={option => option.recipeName}
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

                            <br/>
                            <ThemeProvider theme ={this.theme}>
                                <ToggleButtonGroup size="large" exclusive className="toggleGroup">
                                    <ToggleButton  key={1} value="left" onClick={() => this.setIngredientSearch()}>
                                        <ListIcon className="toggleButton" />
                                    </ToggleButton>,
                                    <ToggleButton key={2} value="center"  onClick={() => this.setRecipeSearch()}>
                                        <LocalDrinkIcon className="toggleButton" />
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </ThemeProvider>
                        </div>
                    )
                }
            else{
                console.log(this.state.ingredients)
                return (
                    <div className="SearchPage" style={{marginTop: 50}}>
                        <h1>CTReqs</h1>
                        <img src = "lime.jpg" style= {{ width: 300, height: 200, borderRadius: 20}}  />
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

                        <br/>
                        <ThemeProvider theme ={this.theme}>
                            <ToggleButtonGroup size="large" exclusive className="toggleGroup">
                                <ToggleButton className="toggleButton" key={1} value="left" onClick={() => this.setIngredientSearch()}>
                                    <ListIcon />
                                </ToggleButton>,
                                <ToggleButton key={2} value="center" className="toggleButton" onClick={() => this.setRecipeSearch()}>
                                    <LocalDrinkIcon />
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </ThemeProvider>
                    </div>
                )
                }
            }
    }

}
