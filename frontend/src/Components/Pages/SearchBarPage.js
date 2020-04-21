import React from 'react'
import SearchBar from "../UI/SearchBar";
import Button from '@material-ui/core/Button';
import {ThemeProvider} from '@material-ui/core/styles';
import {createMuiTheme} from "@material-ui/core";


class SearchBarPage extends React.Component {

    state = {
        ingredients: []
    };

    //theme used for search buttons
    theme = createMuiTheme({
        palette: {
            primary: {
                main: '#32CD32',
                contrastText: '#6D616F'
            },
            secondary: {
                main: '#6D616F',
                contrastText: '#32CD32'
            },
            contrastThreshold: 3,
            tonalOffset: 0.2
        }
    });


    render() {
        return(
            <SearchBar ingredients = {this.ingredients}/>
        )
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
}
export default SearchBarPage
