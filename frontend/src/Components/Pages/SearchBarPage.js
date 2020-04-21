import React from 'react'
import SearchBar from "../UI/SearchBar";


class SearchBarPage extends React.Component {

    state = {
        ingredients: []
    };

    render() {
        console.log(this.props)
        return(
            <div>
                <SearchBar ingredients = {this.ingredients}/>
            </div>
        )
    }
}
export default SearchBarPage
