import React from 'react'
import './TestPage.css'
class TestPage extends React.Component {

    state = {
        searchValue: '',
        rid: {}
    };

    render() {
        return (
            <div className="SearchPage">
                <h1>CTReqs</h1>
                <img src = "lime.jpg" style= {{ width: 300, height: 200, borderRadius: 20}}  />

                <input
                    name="text"
                    type="text"
                    placeholder="Search"
                    onChange= {event => this.handleOnChange(event)}
                    value={this.state.searchValue}
                />
                <button onClick={this.handleSearch}>Search</button>

                { this.state.rid.id ? (
                    <div>
                        <h2 style = {{ marginBottom: 20}}>{this.state.rid.name}</h2>
                        <img src={this.state.rid.imgUrl}
                             style = {{ height: 200, width: 200, borderRadius: 25,
                            boxShadow: '2px 2px 2px 2px lightgray'}} />
                    </div>
                ) :
                    (
                        <p>Try searching</p>
                    )}
            </div>
        );
    }

    handleOnChange = event => {
        this.setState({ searchValue: event.target.value });
    }

    handleSearch = () => {
            this.makeApiCall(this.state.searchValue);
    };

    makeApiCall = searchInput => {
    let searchUrl = `api/recipes/${searchInput}`;

    fetch(searchUrl)
        .then(response => {
            return response.json();
        })
        .then(jsonData => {
            console.log(jsonData.id);
            this.setState({ rid: jsonData });
        });
    };
}
export default TestPage
