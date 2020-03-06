import React, { Component } from 'react'
import TestDisplay from "./Components/UI/RecipeCards";
import DisplayRecipes from "./Components/UI/DisplayRecipes";
class App extends Component {

    state = {}

        render() {
            return (
                <div>
                    <h1>Entry Point</h1>
                    <DisplayRecipes></DisplayRecipes>
                </div>
            )
        }
    }
    export default App

