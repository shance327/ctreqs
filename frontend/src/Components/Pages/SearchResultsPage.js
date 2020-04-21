import React, {Component} from 'react';
import RecipeOverlay from "../UI/RecipeOverlay";
import './SearchResultsPage.css';
import Button from "@material-ui/core/Button";
import {ThemeProvider} from "@material-ui/core/styles";
import {createMuiTheme} from "@material-ui/core";

// takes result from redirect and displays them in cards. Results are referenced using this.props.location.state.responses
// *This component could be better organized into individual components*
class SearchBarPage extends Component {

    render() {
        // maps results to card components displaying recipe names.
        return (
            <div>
                <p><a href='/FrontPage'>Return To Search</a> </p>
                <h1>Results</h1>
                <div id="resultsContainer">
                {this.props.location.state.responses.map((result, index) => (
                        <div className="card" style={{
                            boxShadow: '2px 2px 2px 2px lightgray',
                            transition: 0.5, width: '50%', margin: 'auto'
                        }}>
                            <RecipeOverlay recipeId={result.recipeId} recipeName={result.recipeName} recipeImg ={result.imgUrl} />
                        </div>
                ))}
                </div>
            </div>
        );
    }
}
export default SearchBarPage
