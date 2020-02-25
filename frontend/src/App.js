import React, { Component } from 'react'
import TestDisplay from "./Components/TestDisplay";
class App extends Component {

    state = { recipeDetails: [] }

    componentDidMount() {
        fetch('/api/recipes')
            .then(res => res.json())
            .then((data) => {
                this.setState({ recipeDetails: data })
            })
            .catch(console.log) }

        render() {
            return (
                <TestDisplay recipeDetail = {this.state.recipeDetails} />
            )
        }
    }
    export default App

