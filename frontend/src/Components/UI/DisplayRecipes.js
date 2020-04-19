import React, {Component} from "react";
import RecipeCards from "./RecipeCards";

// Component responsible for making request for  all recipes and displaying them in a list of cards
class DisplayRecipes extends Component {

    state = { recipeDetails: [] }

    componentDidMount() {
        fetch('/v1/recipes')
            .then(res => res.json())
            .then((data) => {
                this.setState({recipeDetails: data})
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>
                <h1>Recipe List</h1>
                <RecipeCards recipeDetail = {this.state.recipeDetails}/>
            </div>
        )
    }

}
export default DisplayRecipes
